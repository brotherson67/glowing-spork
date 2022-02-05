import React from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroText, HeroContent } from './HeroEl';
import Video from '../../videos/video1.mp4';

const HeroSection = () => {
  return (
      <HeroContainer>
          <HeroBg>
              <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
          </HeroBg>
          <HeroContent>
              <HeroText>Build roots with friends on your favorite kind of routes.</HeroText>
          </HeroContent>
      </HeroContainer>
  )
};

export default HeroSection;