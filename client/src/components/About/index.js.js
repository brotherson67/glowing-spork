import React from 'react';
import { HeroContainer, HeroContent, HeroBg } from './HeroEl';
import Card from '../About/CardFlip';


function AboutUs() {
    
  return (
      <HeroContainer>
          <HeroBg>
          </HeroBg>
          <HeroContent>
            <Card />
          </HeroContent>
      </HeroContainer>
  );
}




export default AboutUs;