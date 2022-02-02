import React from 'react';
import { Footer, Social, GitHub, LinkedIn, StackOverflow, FooterContact } from './FooterEl';

function FooterBar() {
  return (
      <>
      <Footer>
        <Social>
        <GitHub />
        <LinkedIn />
        <StackOverflow />
        </Social>
        <FooterContact>
            {/* Contact me */}
        </FooterContact>
      </Footer>
      
      </>
    )
}

export default FooterBar;