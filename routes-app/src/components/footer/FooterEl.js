import styled from 'styled-components'
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa'

export const Footer = styled.footer`
height: 100px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc(( 100vw - 1000px) /2);
z-index: 10;
position: absolute;
left: 0;
bottom: 0;
`
export const Social = styled.div`
display: flex;
justify-content: space-between;
padding: 10%;
`
export const GitHub = styled(FaGithub)`
height: 75px;
width: 75px;
margin-right: 20%;
display: flex;
color: #000000;
justify-content: space-between;
`

export const LinkedIn = styled(FaLinkedin)`
height: 75px;
width: 75px;
margin-right: 20%;
display: flex;
color: #000000;
`
export const StackOverflow = styled(FaStackOverflow)`
height: 75px;
width: 75px;
margin-right: 20%;
display: flex;
color: #000000;
`

export const FooterContact = styled.div`
height: 100px;
display: flex;
`