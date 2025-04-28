import pptxgen from 'pptxgenjs';
import { Presentation, Slide, SlideElement } from '../types';

export const exportToPptx = async (presentation: Presentation): Promise<void> => {
  try {
    // Create a new PowerPoint presentation
    const pptx = new pptxgen();
    
    // Set presentation properties
    pptx.layout = '16x9';
    pptx.title = presentation.title;
    
    // Process each slide
    for (const slide of presentation.slides) {
      const pptxSlide = pptx.addSlide();
      
      // Set slide background
      pptxSlide.background = { color: slide.background };
      
      // Process slide elements
      for (const element of slide.elements) {
        await addElementToPptxSlide(pptxSlide, element);
      }
    }
    
    // Save the presentation file
    pptx.writeFile({ fileName: `${presentation.title || 'Presentation'}.pptx` });
    return Promise.resolve();
  } catch (error) {
    console.error('Error exporting to PPTX:', error);
    return Promise.reject(error);
  }
};

const addElementToPptxSlide = async (pptxSlide: any, element: SlideElement): Promise<void> => {
  // Calculate position and size (convert from pixels to inches)
  // PPTXGenJS uses inches for positioning, so convert from pixels
  // Assuming 96 DPI
  const dpi = 96;
  const x = element.position.x / dpi;
  const y = element.position.y / dpi;
  const w = element.position.width / dpi;
  const h = element.position.height / dpi;
  
  switch (element.type) {
    case 'text':
      // Add text element
      pptxSlide.addText(element.content, {
        x,
        y,
        w,
        h,
        fontSize: element.style?.fontSize ? Number(element.style.fontSize) / 2 : 12, // Convert to points
        bold: element.style?.fontWeight === 'bold',
        italic: element.style?.fontStyle === 'italic',
        color: element.style?.color as string,
        align: element.style?.textAlign as 'left' | 'center' | 'right',
        valign: 'top'
      });
      break;
      
    case 'image':
      // Add image element
      try {
        // For external images, we need to fetch them first
        const response = await fetch(element.content);
        const blob = await response.blob();
        const arrayBuffer = await blob.arrayBuffer();
        
        pptxSlide.addImage({
          data: `data:image/jpeg;base64,${Buffer.from(arrayBuffer).toString('base64')}`,
          x,
          y,
          w,
          h
        });
      } catch (error) {
        console.error('Error adding image:', error);
      }
      break;
      
    case 'chart':
      try {
        // For charts, we need to convert VChart spec to PPTXGenJS chart format
        const chartData = JSON.parse(element.content);
        
        // This is a simplified approach - in a real app you'd need a more sophisticated
        // conversion from VChart specs to PPTXGenJS chart format
        if (chartData.type === 'bar') {
          const data = chartData.data.values.map((item: any) => {
            return { name: item.category, value: item.value };
          });
          
          pptxSlide.addChart(pptx.ChartType.bar, data, {
            x,
            y,
            w,
            h,
            title: chartData.title?.text,
            showTitle: !!chartData.title,
            showLegend: false,
            chartColors: ['#5B9BD5', '#ED7D31', '#A5A5A5', '#FFC000', '#4472C4']
          });
        }
      } catch (error) {
        console.error('Error adding chart:', error);
      }
      break;
  }
};