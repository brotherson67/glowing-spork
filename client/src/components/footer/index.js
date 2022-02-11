import React from 'react';
import FooterBody from "./FooterBody";
import { Footer, Social, GitHub, Email } from './FooterEl';

function FooterBar() {
  return (
      <>
        {/* <Footer> */}
        <FooterBody>
         <Social>
         
         <GitHub />
         <Email />
        </Social>
        </FooterBody>
        {/* </Footer> */}
      </>
    )
}

export default FooterBar;