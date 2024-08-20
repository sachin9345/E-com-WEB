import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css'; 

const ImageSlider = () => {
    const images = [
        'yellow.jpg',
        'allen.jpg',
        'summer.jpg',
        'aa.jpg'

        
    ];

    
    const allImages = [...images, ...images];

    const [currentIndex, setCurrentIndex] = useState(0);
    const transitionEnabled = useRef(true);

    useEffect(() => {
        const switchImage = () => {
            if (currentIndex >= images.length - 1) {
                
                transitionEnabled.current = false;
                setCurrentIndex(0);
            } else {
                
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }
        };

        const interval = setInterval(switchImage, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);


    useEffect(() => {
        if (!transitionEnabled.current) {
            setTimeout(() => {
                transitionEnabled.current = true;
            }, 0); 
        }
    }, [currentIndex]);

    return (
        <div className="slider-container">
            <div className="slider"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: transitionEnabled.current ? 'transform 1s ease-in-out' : 'none',
                }}
            >
                {allImages.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} />
                ))}
                <p>WEAR THE FUTURE:TRANSFORM THE FUTURE <br></br>INTO THE EXPERIENCE</p>
              
            </div>
            
        </div>
    );
};

export default ImageSlider;
