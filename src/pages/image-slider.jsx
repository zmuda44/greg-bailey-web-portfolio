// const image1 = '../../public/images/sample image.png'
// const image2 = '../../public/images/sample2.png'
// const image3 = '../../public/images/sample3.png'

import ImageSlider from '../components/imageSlider'

import image1 from '../../public/images/sample image.png'
import image2 from '../../public/images/sample2.png'
import image3 from '../../public/images/sample3.png'

const images = [image1, image2, image3]


function Slider({}) {
  return (
<section id='portfolio'>
      <div className="container">
        <h1 className="section-title">Welcome to my portfolio</h1>  
        <div style ={{ 
          maxWidth: "1200px", 
          width: "100%", 
          // aspectRation: "10 / 6",
          margin: "0 auto",
        }}>     
            
              <ImageSlider images={images} />

        </div>
      </div>  
    </section>
  );
}

export default Slider;

