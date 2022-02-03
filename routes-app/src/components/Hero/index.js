import React from 'react';
import { HeroContainer, HeroBg, VideoBg } from './HeroEl';
import Video from '../../videos/video1.mp4';

const HeroSection = () => {
  return (
      <HeroContainer>
          <HeroBg>
              <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
          </HeroBg>
      </HeroContainer>
  )
};

export default HeroSection;