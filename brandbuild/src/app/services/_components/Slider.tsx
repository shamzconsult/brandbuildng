import React from 'react'

function Slider() {
    const images = [
        "./assets/images/Brandbuildng 1.jpg",
        "./assets/images/Brandbuildng 4.jpg",
        "./assets/images/Brandbuildng 5.jpg",
        "./assets/images/Brandbuildng 6.jpg",
        "./assets/images/Brandbuildng 7.jpg",
        "./assets/images/Brandbuildng 8.jpg",
    ];

  return (
    <div className='flex w-full mt-20'>
        <div className='slider-container'>
            <div className="slider-track">
                {images.map((image, index) => (
                    <div key={index} className='slide'>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
                {images.map((image, index) => (
                    <div key={`${index}-clone`} className="slide">
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>

        <div className=''>
            
        </div>
    </div>
  )
}

export default Slider