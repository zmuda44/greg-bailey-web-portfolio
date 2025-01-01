import { useState, useEffect, useRef } from 'react';


function ImageSlider({ images }) {

  console.log(images)
  
  const [imageIndex, setImageIndex] = useState(0)

  function showPrevImage () {
    setImageIndex(index => {
      if (index === 0) return images.length -1
     
      return index - 1
    })
  }

  function showNextImage() {
    setImageIndex(index => {
      if (index === images.length-1) return 0
      return index + 1
    })
  } 

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
        {images.map(image => (          
          <img key={image} src={image} 
          className="img-slider-img"
          style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

      <button onClick={showPrevImage} className="img-slider-btn" style={{ left: 0 }}>b</button>
      <button onClick={showNextImage} className="img-slider-btn" style={{ right: 0 }}>f</button>
    </div>
  )
}


export default ImageSlider