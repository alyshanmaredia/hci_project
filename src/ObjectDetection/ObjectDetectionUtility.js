export const drawRect = (detections, ctx) =>{
    // Loop through each prediction
    detections.forEach(prediction => {
  
      // Extract boxes and classes
      const [x, y, width, height] = prediction['bbox']; 
      const text = prediction['class']; 
  
      // Set styling
      const color = 'red';
      ctx.strokeStyle = '#' + color
      ctx.font = '36px Arial';
  
      // Draw rectangles and text
      ctx.beginPath();   
      ctx.fillStyle = '#' + color
      ctx.fillText(text, x, y);
      ctx.rect(x, y, width, height); 
      ctx.stroke();
    });
  }