import React from 'react';
import FooterBody from "./FooterBody";
import { Footer, Social, GitHub, Email } from './FooterEl';

function FooterBar() {
  return (
      <>
        {/* <Footer> */}
        <FooterBody>
         <GitHub />
         <Email />
        </FooterBody>
        {/* </Footer> */}
      </>
    )
}

export default FooterBar;