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
                    <h3>“Skiing is the best way in the world to waste time.” --</h3>
                    <p>Glen Plake</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={DogRunImg}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>“Of all the paths you take in life, make sure a few of them are dirt.” --</h3>
                    <p>John Muir</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BikeImg}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>“It never gets easier, you just go faster” --</h3>
                    <p>Greg LeMond</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselEl;