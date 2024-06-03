import React, { useEffect, useState } from 'react';
import '../App.css';
import '../css/mystyles.css';
// import '../css/recipes.css';
import IMG1 from '../img/image1.jpg';
import IMG2 from '../img/image2.jpg';
import IMG3 from '../img/image3.jpg';
import IMG4 from '../img/image4.jpg';
import IMG5 from '../img/image5.jpg';

const Slideshow = () => {
    const images = [IMG1, IMG2, IMG3, IMG4, IMG5];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="Slideshow">
            <div className="slide">
                <img
                    src={images[currentImage]}
                    alt="Slideshow"
                    style={{ width: '800px', height: '570px'}}
                />
            </div>
        </div>
    );
};

export default Slideshow;
