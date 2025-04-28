import { Presentation } from '../types';
import { defaultSlides } from './defaultSlides';

export const generateDefaultPresentation = (): Presentation => {
  return {
    id: `presentation-${Date.now()}`,
    title: '智能空中机动：无人机的动态降落与多传感器融合技术',
    slides: defaultSlides,
    theme: 'light',
    aspectRatio: '16:9',
  };
};