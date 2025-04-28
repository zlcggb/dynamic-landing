import { create } from 'zustand';
import { Presentation, Slide, SlideElement } from '../types';
import { generateDefaultPresentation } from '../utils/defaultPresentation';

interface PresentationState {
  presentation: Presentation;
  currentSlideIndex: number;
  isEditing: boolean;
  setPresentation: (presentation: Presentation) => void;
  setCurrentSlideIndex: (index: number) => void;
  setIsEditing: (isEditing: boolean) => void;
  addSlide: () => void;
  removeSlide: (index: number) => void;
  updateSlide: (index: number, slide: Slide) => void;
  updateSlideElement: (slideIndex: number, elementId: string, element: Partial<SlideElement>) => void;
  addElement: (slideIndex: number, element: SlideElement) => void;
  removeElement: (slideIndex: number, elementId: string) => void;
  moveSlide: (fromIndex: number, toIndex: number) => void;
}

export const usePresentationStore = create<PresentationState>((set) => ({
  presentation: generateDefaultPresentation(),
  currentSlideIndex: 0,
  isEditing: true,
  
  setPresentation: (presentation) => set({ presentation }),
  
  setCurrentSlideIndex: (index) => set({ currentSlideIndex: index }),
  
  setIsEditing: (isEditing) => set({ isEditing }),
  
  addSlide: () => set((state) => {
    const newSlide: Slide = {
      id: `slide-${Date.now()}`,
      elements: [],
      background: '#ffffff',
    };
    
    return {
      presentation: {
        ...state.presentation,
        slides: [...state.presentation.slides, newSlide],
      },
      currentSlideIndex: state.presentation.slides.length,
    };
  }),
  
  removeSlide: (index) => set((state) => {
    const newSlides = [...state.presentation.slides];
    newSlides.splice(index, 1);
    
    return {
      presentation: {
        ...state.presentation,
        slides: newSlides,
      },
      currentSlideIndex: Math.min(state.currentSlideIndex, newSlides.length - 1),
    };
  }),
  
  updateSlide: (index, slide) => set((state) => {
    const newSlides = [...state.presentation.slides];
    newSlides[index] = slide;
    
    return {
      presentation: {
        ...state.presentation,
        slides: newSlides,
      },
    };
  }),
  
  updateSlideElement: (slideIndex, elementId, elementUpdates) => set((state) => {
    const newSlides = [...state.presentation.slides];
    const slide = newSlides[slideIndex];
    const elementIndex = slide.elements.findIndex((el) => el.id === elementId);
    
    if (elementIndex !== -1) {
      slide.elements[elementIndex] = {
        ...slide.elements[elementIndex],
        ...elementUpdates,
      };
    }
    
    return {
      presentation: {
        ...state.presentation,
        slides: newSlides,
      },
    };
  }),
  
  addElement: (slideIndex, element) => set((state) => {
    const newSlides = [...state.presentation.slides];
    newSlides[slideIndex].elements.push(element);
    
    return {
      presentation: {
        ...state.presentation,
        slides: newSlides,
      },
    };
  }),
  
  removeElement: (slideIndex, elementId) => set((state) => {
    const newSlides = [...state.presentation.slides];
    const slide = newSlides[slideIndex];
    slide.elements = slide.elements.filter((el) => el.id !== elementId);
    
    return {
      presentation: {
        ...state.presentation,
        slides: newSlides,
      },
    };
  }),
  
  moveSlide: (fromIndex, toIndex) => set((state) => {
    const newSlides = [...state.presentation.slides];
    const [removed] = newSlides.splice(fromIndex, 1);
    newSlides.splice(toIndex, 0, removed);
    
    return {
      presentation: {
        ...state.presentation,
        slides: newSlides,
      },
      currentSlideIndex: fromIndex === state.currentSlideIndex ? toIndex : state.currentSlideIndex,
    };
  }),
}));