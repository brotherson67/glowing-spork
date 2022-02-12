import styled from 'styled-components'
import { FaGithub, FaMailBulk, FaInstagram } from 'react-icons/fa'

export const Footer = styled.footer`
height: 40px;
display: flex;
justify-content: space-between;
z-index: 10;
position: absolute;
width: 100%;
`

export const GitHub = styled(FaGithub)`
height: 25px;
width: 25px;
margin-right: 3%;
display: flex;
justify-content: space-between;
flex-direction: row;
`

export const Email = styled(FaMailBulk)`
height: 25px;
width: 25px;
margin-right: 3%;
display: flex;
`
export const Instagram = styled(FaInstagram)`
height: 25px;
width: 25px;
margin-right: 3%;
display: flex;
justify-content: space-between;

`

