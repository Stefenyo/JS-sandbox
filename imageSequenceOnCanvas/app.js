const html = document.documentElement;
const canvas = document.getElementById('test');
const context = canvas.getContext('2d');

const frameCount = 90;
const currentFrame = index => {
    return `images/iphone x${index.toString().padStart(2, '0')}.jpg`
};

const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

// Create, load and draw the image
const img = new Image()
img.src = currentFrame(0); // we'll make this dynamic in the next step, for now we'll just load image 1 of our sequence
  // Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height=window.innerHeight;
img.onload=function(){
    context.drawImage(img, 0, 0);
}
    
const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollFraction * 1000)
    );
    
    requestAnimationFrame(() => updateImage(frameIndex + 1));
  });


  
  preloadImages()