import React from 'react';
import { usePresentationStore } from '../../store/presentationStore';
import TextElement from '../Elements/TextElement';
import ImageElement from '../Elements/ImageElement';
import ChartElement from '../Elements/ChartElement';
import { Rnd } from 'react-rnd';
import { SlideElement } from '../../types';

const SlideEditor: React.FC = () => {
  const { presentation, currentSlideIndex, updateSlideElement } = usePresentationStore();

  const currentSlide = presentation.slides[currentSlideIndex];
  if (!currentSlide) return <div>No slide selected</div>;

  const handleElementUpdate = (element: SlideElement, updates: Partial<SlideElement>) => {
    updateSlideElement(currentSlideIndex, element.id, updates);
  };

  const handleResize = (element: SlideElement, position: { x: number; y: number; width: number; height: number }) => {
    updateSlideElement(currentSlideIndex, element.id, {
      position: position
    });
  };

  return (
    <div 
      className="slide-editor bg-white shadow-lg"
      style={{ 
        width: '960px', 
        height: '540px', 
        position: 'relative',
        margin: '0 auto',
        backgroundSize: 'cover',
        backgroundColor: currentSlide.background,
        overflow: 'hidden'
      }}
    >
      {currentSlide.elements.map((element) => (
        <Rnd
          key={element.id}
          default={{
            x: element.position.x,
            y: element.position.y,
            width: element.position.width,
            height: element.position.height
          }}
          position={{ x: element.position.x, y: element.position.y }}
          size={{ width: element.position.width, height: element.position.height }}
          onDragStop={(e, d) => {
            handleResize(element, {
              ...element.position,
              x: d.x,
              y: d.y
            });
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            handleResize(element, {
              x: position.x,
              y: position.y,
              width: parseInt(ref.style.width),
              height: parseInt(ref.style.height)
            });
          }}
          bounds="parent"
          className="element-container"
        >
          <div style={{ width: '100%', height: '100%' }}>
            {element.type === 'text' && (
              <TextElement 
                element={element} 
                onUpdate={(updates) => handleElementUpdate(element, updates)} 
              />
            )}
            {element.type === 'image' && (
              <ImageElement 
                element={element} 
                onUpdate={(updates) => handleElementUpdate(element, updates)} 
              />
            )}
            {element.type === 'chart' && (
              <ChartElement 
                element={element} 
                onUpdate={(updates) => handleElementUpdate(element, updates)} 
              />
            )}
          </div>
        </Rnd>
      ))}
    </div>
  );
};

export default SlideEditor;