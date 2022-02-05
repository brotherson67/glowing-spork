import React from 'react';
import { Footer, Social, GitHub, Email } from './FooterEl';

function FooterBar() {
  return (
      <>
        <Footer>
         <Social>
         {/* <span style={spanStyle}>Contact Us</span> */}
         <GitHub />
         <Email />
        </Social>
        </Footer>
      </>
    )
}

// const spanStyle = {
//     padding: '10',
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginBottom: '0',
//     marginRight: '30'
// }


export default FooterBar;