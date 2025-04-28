import React, { useEffect, useRef } from 'react';
import { SlideElement } from '../../types';
import { VChart } from '@visactor/vchart';

interface ChartElementProps {
  element: SlideElement;
  onUpdate: (updates: Partial<SlideElement>) => void;
}

const ChartElement: React.FC<ChartElementProps> = ({ element }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<any>(null);

  useEffect(() => {
    if (chartRef.current) {
      try {
        const chartData = JSON.parse(element.content);
        
        // Clean up existing chart if any
        if (chartInstance.current) {
          chartInstance.current.release();
        }
        
        // Create new chart
        chartInstance.current = new VChart(chartData, { dom: chartRef.current });
        chartInstance.current.renderSync();
      } catch (error) {
        console.error('Error rendering chart:', error);
      }
    }

    // Cleanup
    return () => {
      if (chartInstance.current) {
        chartInstance.current.release();
      }
    };
  }, [element.content, element.position.width, element.position.height]);

  return (
    <div 
      ref={chartRef}
      style={{ 
        width: '100%', 
        height: '100%',
        cursor: 'move',
        backgroundColor: '#ffffff'
      }}
    />
  );
};

export default ChartElement;