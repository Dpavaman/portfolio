import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Carousel.css'
import slide1 from '../../Assets/carousel-1.jpg';
import slide2 from '../../Assets/carousel-2.jpg';
import slide3 from '../../Assets/carousel-3.jpg';
import Scroll from '../Scroll/Scroll';

const MyCarousel = () => {
    return (
        <div id='home'>
            <Carousel controls={false} indicators interval={5000} pauseonhover={false} >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Scroll />
        </div>

    )
}

export default MyCarousel