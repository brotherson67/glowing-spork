import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

import { GitHub, Email, Instagram } from "./FooterEl";
import DonationModal from "../DonationModal";

function FooterBody() {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/aboutus">About Us</FooterLink>
          </Column>
          <Column>
            <Heading>
              Social & github <Instagram id="icon" /> <GitHub id="icon" />{" "}
            </Heading>
            <FooterLink href="https://www.instagram.com/routes_roots/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>
              Contact Us <Email />{" "}
            </Heading>
            <FooterLink href="/contact">Send us a message</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}

export default FooterBody;
