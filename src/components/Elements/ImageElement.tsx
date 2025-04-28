import React from 'react';
import { SlideElement } from '../../types';

interface ImageElementProps {
  element: SlideElement;
  onUpdate: (updates: Partial<SlideElement>) => void;
}

const ImageElement: React.FC<ImageElementProps> = ({ element }) => {
  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100%',
        cursor: 'move',
        overflow: 'hidden'
      }}
    >
      <img
        src={element.content}
        alt="Slide image"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default ImageElement;