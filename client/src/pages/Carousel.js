import React from 'react';
import { Carousel } from 'react-bootstrap';
import  SkiImg  from "../assets/images/pexels-melvin-wahlin-2433353.jpg";
import DogRunImg from "../assets/images/pexels-rachel-claire-4992604.jpg";
import BikeImg from "../assets/images/pexels-danny-bor-9994208.jpg";

function CarouselEl() {
    return (
        <Carousel>
            <Carousel.Item>
                {/* images can be changed from default later to view Carousel of feed */}
                <img
                    className="d-block w-100"
                    src={SkiImg}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={DogRunImg}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BikeImg}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselEl;