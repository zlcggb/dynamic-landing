import React, { useState } from 'react';
import { usePresentationStore } from '../../store/presentationStore';
import { 
  Bold, Italic, AlignLeft, AlignCenter, AlignRight, 
  Type, Image, BarChart, Plus, Download
} from 'lucide-react';
import { exportToPptx } from '../../utils/exportUtils';

const Toolbar: React.FC = () => {
  const { 
    presentation, 
    currentSlideIndex, 
    addSlide, 
    addElement, 
    updateSlideElement 
  } = usePresentationStore();
  
  const [textColor, setTextColor] = useState('#000000');
  const [fontSize, setFontSize] = useState('24');
  
  const handleAddTextElement = () => {
    const newElement = {
      id: `text-${Date.now()}`,
      type: 'text' as const,
      content: '点击编辑文本',
      position: { x: 100, y: 100, width: 300, height: 50 },
      style: { 
        fontSize: parseInt(fontSize), 
        fontWeight: 'normal', 
        color: textColor,
        textAlign: 'left'
      }
    };
    
    addElement(currentSlideIndex, newElement);
  };
  
  const handleAddImageElement = () => {
    // For demonstration, we're using a placeholder image URL
    // In a real app, you'd have an image upload feature
    const imageUrl = 'https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
    
    const newElement = {
      id: `image-${Date.now()}`,
      type: 'image' as const,
      content: imageUrl,
      position: { x: 100, y: 100, width: 300, height: 200 },
      style: {}
    };
    
    addElement(currentSlideIndex, newElement);
  };
  
  const handleAddChartElement = () => {
    // Sample VChart specification for a bar chart
    const chartSpec = {
      type: 'bar',
      data: {
        values: [
          { category: '类别1', value: 34 },
          { category: '类别2', value: 65 },
          { category: '类别3', value: 43 },
          { category: '类别4', value: 89 },
          { category: '类别5', value: 72 }
        ]
      },
      xField: 'category',
      yField: 'value',
      title: {
        text: '样例图表',
        style: {
          fontSize: 16,
          fontWeight: 'bold'
        }
      },
      colorScheme: 'blueGreen'
    };
    
    const newElement = {
      id: `chart-${Date.now()}`,
      type: 'chart' as const,
      content: JSON.stringify(chartSpec),
      position: { x: 100, y: 100, width: 400, height: 300 },
      style: {}
    };
    
    addElement(currentSlideIndex, newElement);
  };
  
  const handleFormatText = (property: string, value: string | number) => {
    const currentSlide = presentation.slides[currentSlideIndex];
    if (!currentSlide) return;
    
    // This is a simplified approach. In a real app, you'd have element selection tracking
    // and only apply formatting to selected elements
    currentSlide.elements.forEach(element => {
      if (element.type === 'text') {
        const updatedStyle = { ...element.style, [property]: value };
        updateSlideElement(currentSlideIndex, element.id, { style: updatedStyle });
      }
    });
  };
  
  const handleExport = async () => {
    await exportToPptx(presentation);
  };
  
  return (
    <div className="toolbar flex items-center p-2 bg-gray-100 border-b border-gray-300">
      <div className="flex space-x-2 mr-6">
        <button 
          onClick={handleAddTextElement}
          className="p-2 hover:bg-gray-200 rounded"
          title="Add Text"
        >
          <Type size={18} />
        </button>
        <button 
          onClick={handleAddImageElement}
          className="p-2 hover:bg-gray-200 rounded"
          title="Add Image"
        >
          <Image size={18} />
        </button>
        <button 
          onClick={handleAddChartElement}
          className="p-2 hover:bg-gray-200 rounded"
          title="Add Chart"
        >
          <BarChart size={18} />
        </button>
      </div>
      
      <div className="border-l border-gray-300 h-8 mx-2" />
      
      <div className="flex space-x-2 mr-6">
        <button 
          onClick={() => handleFormatText('fontWeight', 'bold')}
          className="p-2 hover:bg-gray-200 rounded"
          title="Bold"
        >
          <Bold size={18} />
        </button>
        <button 
          onClick={() => handleFormatText('fontStyle', 'italic')}
          className="p-2 hover:bg-gray-200 rounded"
          title="Italic"
        >
          <Italic size={18} />
        </button>
        <button 
          onClick={() => handleFormatText('textAlign', 'left')}
          className="p-2 hover:bg-gray-200 rounded"
          title="Align Left"
        >
          <AlignLeft size={18} />
        </button>
        <button 
          onClick={() => handleFormatText('textAlign', 'center')}
          className="p-2 hover:bg-gray-200 rounded"
          title="Align Center"
        >
          <AlignCenter size={18} />
        </button>
        <button 
          onClick={() => handleFormatText('textAlign', 'right')}
          className="p-2 hover:bg-gray-200 rounded"
          title="Align Right"
        >
          <AlignRight size={18} />
        </button>
      </div>
      
      <div className="border-l border-gray-300 h-8 mx-2" />
      
      <div className="flex items-center space-x-2 mr-6">
        <input
          type="color"
          value={textColor}
          onChange={(e) => {
            setTextColor(e.target.value);
            handleFormatText('color', e.target.value);
          }}
          className="w-8 h-8 p-0 border-0"
          title="Text Color"
        />
        <select
          value={fontSize}
          onChange={(e) => {
            setFontSize(e.target.value);
            handleFormatText('fontSize', parseInt(e.target.value));
          }}
          className="p-1 border border-gray-300 rounded"
          title="Font Size"
        >
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="18">18</option>
          <option value="24">24</option>
          <option value="36">36</option>
          <option value="48">48</option>
        </select>
      </div>
      
      <div className="border-l border-gray-300 h-8 mx-2" />
      
      <div className="flex space-x-2">
        <button 
          onClick={addSlide}
          className="p-2 hover:bg-gray-200 rounded"
          title="Add Slide"
        >
          <Plus size={18} />
        </button>
        <button 
          onClick={handleExport}
          className="p-2 bg-blue-600 text-white hover:bg-blue-700 rounded flex items-center space-x-1"
          title="Export to PowerPoint"
        >
          <Download size={18} />
          <span>导出 PPT</span>
        </button>
      </div>
    </div>
  );
};

export default Toolbar;