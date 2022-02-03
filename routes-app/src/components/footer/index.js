import React from 'react';
import { Footer, Social, GitHub, Email } from './FooterEl';

function FooterBar() {
  return (
      <>
        <Footer>
         <Social>
         <GitHub />
         <Email />
         Contact Us
        </Social>
        </Footer>
      </>
    )
}

export default FooterBar;