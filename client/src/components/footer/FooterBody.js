import React from 'react';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";


function FooterBody() {
    return (


        <Box>
            {/* <h1 style={{ color: "blue", 
                 textAlign: "center", 
                 marginTop: "-50px" }}>
      footer
    </h1> */}
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="about">About Us</FooterLink>

                    </Column>
                    <Column>
                        <Heading>Social Media & Links </Heading>

                        <FooterLink href="https://www.instagram.com/routes_roots/">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://github.com/Plaindemon">
                            <i className="fab fa-github">
                                <span style={{ marginLeft: "10px" }}>
                                Plaindemon- Ben
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://github.com/bridgetvon">
                            <i className="fab fa-github">
                                <span style={{ marginLeft: "10px" }}>
                                Bridgetvon- Bridget
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://github.com/brotherson67">
                            <i className="fab fa-github">
                                <span style={{ marginLeft: "10px" }}>
                                Brotherson67- Mitch
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://github.com/colawrr">
                            <i className="fab fa-github">
                                <span style={{ marginLeft: "10px" }}>
                                Colawrr- Connor
                                </span>
                            </i>
                        </FooterLink>
                        
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="/contact">Send us a message</FooterLink>
                        

                    </Column>
                    
                </Row>
            </Container>
        </Box>

    )
}

export default FooterBody;