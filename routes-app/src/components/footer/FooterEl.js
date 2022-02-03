import styled from 'styled-components'
import { FaGithub, FaMailBulk } from 'react-icons/fa'

export const Footer = styled.footer`
height: 100px;
display: flex;
justify-content: space-between;
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

export const Email = styled(FaMailBulk)`
height: 75px;
width: 75px;
margin-right: 20%;
display: flex;
color: #000000;
`
