import React from 'react';
import { usePresentationStore } from '../../store/presentationStore';
import { Trash } from 'lucide-react';

const SlideList: React.FC = () => {
  const { 
    presentation, 
    currentSlideIndex, 
    setCurrentSlideIndex,
    removeSlide
  } = usePresentationStore();

  // Calculate thumbnail dimensions (maintain 16:9 aspect ratio)
  const thumbnailWidth = 160;
  const thumbnailHeight = (thumbnailWidth / 16) * 9;

  const handleSlideClick = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const handleDeleteClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (presentation.slides.length > 1) {
      removeSlide(index);
    } else {
      alert('无法删除最后一张幻灯片');
    }
  };

  return (
    <div className="slide-list bg-gray-100 p-3 overflow-y-auto h-full">
      {presentation.slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`slide-thumbnail relative mb-3 cursor-pointer transition-all ${
            index === currentSlideIndex ? 'ring-2 ring-blue-500' : 'hover:ring-1 hover:ring-blue-300'
          }`}
          onClick={() => handleSlideClick(index)}
          style={{ width: thumbnailWidth, height: thumbnailHeight }}
        >
          <div 
            className="absolute inset-0 bg-white shadow-sm flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: slide.background }}
          >
            <div className="text-xs text-center text-gray-500">幻灯片 {index + 1}</div>
          </div>
          
          <button
            onClick={(e) => handleDeleteClick(index, e)}
            className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 opacity-0 hover:opacity-100 transition-opacity"
            title="Delete Slide"
          >
            <Trash size={14} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SlideList;