import React from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroText, HeroContent } from './HeroEl';
import Video from '../../videos/video1.mp4';
import Typewriter from 'typewriter-effect';




const HeroSection = (props) => {
    console.log(props.img)
  return (
    <>
      <HeroContainer>
          <HeroBg>
              { props.img !== undefined ? 
              <img src={props.img} alt ="hero "/> : 
              <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            } 
          </HeroBg>
          <HeroContent>
              <HeroText>
              <Typewriter
              onInit = { (typewriter) => {
                  typewriter
                  .typeString("Build roots with friends on your favorite kind of routes.")
                  .pauseFor(500)
                  .start();
              }}
              />
                </HeroText>
          </HeroContent>
      </HeroContainer>
      
      </>

  )
};

export default HeroSection;