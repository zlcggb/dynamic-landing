export interface SlideElement {
  id: string;
  type: 'text' | 'image' | 'chart';
  content: string;
  position: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  style?: Record<string, string | number>;
}

export interface Slide {
  id: string;
  elements: SlideElement[];
  background: string;
  notes?: string;
}

export interface Presentation {
  id: string;
  title: string;
  slides: Slide[];
  theme: 'light' | 'dark';
  aspectRatio: '16:9' | '4:3';
}

export interface ChartData {
  type: string;
  data: any;
  options: any;
}