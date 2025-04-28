import React, { useState, useEffect, useRef } from 'react';
import { SlideElement } from '../../types';

interface TextElementProps {
  element: SlideElement;
  onUpdate: (updates: Partial<SlideElement>) => void;
}

const TextElement: React.FC<TextElementProps> = ({ element, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(element.content);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setContent(element.content);
  }, [element.content]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onUpdate({ content });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      setIsEditing(false);
      onUpdate({ content });
    }
  };

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setContent(target.innerText);
  };

  return (
    <div
      ref={textRef}
      contentEditable={isEditing}
      suppressContentEditableWarning
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onInput={handleInput}
      style={{
        width: '100%',
        height: '100%',
        outline: isEditing ? '2px solid #3b82f6' : 'none',
        overflow: 'hidden',
        cursor: isEditing ? 'text' : 'move',
        ...element.style,
      }}
    >
      {content}
    </div>
  );
};

export default TextElement;