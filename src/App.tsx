import React, { useState } from 'react';
import * as Slides from './components/slides';

const slideComponents = [
  Slides.Slide1,
  Slides.Slide2,
  Slides.Slide3,
  Slides.Slide4,
  Slides.Slide5,
  Slides.Slide6,
  Slides.Slide7,
  Slides.Slide8,
  Slides.Slide9,
  Slides.Slide10,
  Slides.Slide11,
  Slides.Slide12,
  Slides.Slide13,
  Slides.Slide14,
  Slides.Slide15,
  Slides.Slide16,
  Slides.Slide17,
];

function App() {
  const [current, setCurrent] = useState(0);
  const CurrentSlide = slideComponents[current];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm p-4 border-b">
        <h1 className="text-xl font-bold text-blue-800">PPT 预览</h1>
      </header>
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div style={{ minHeight: 900*0.7, minWidth: 1600*0.7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CurrentSlide />
        </div>
        <div className="mt-4 flex gap-4">
          <button
            className="px-4 py-2 rounded bg-blue-500 text-white font-semibold disabled:bg-gray-300"
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
          >上一页</button>
          <span className="text-gray-700 font-medium">{current + 1} / {slideComponents.length}</span>
          <button
            className="px-4 py-2 rounded bg-blue-500 text-white font-semibold disabled:bg-gray-300"
            onClick={() => setCurrent((c) => Math.min(slideComponents.length - 1, c + 1))}
            disabled={current === slideComponents.length - 1}
          >下一页</button>
        </div>
      </div>
      <footer className="bg-white shadow-inner p-2 text-center text-gray-500 text-sm">
        Designed by zlc
      </footer>
    </div>
  );
}

export default App;