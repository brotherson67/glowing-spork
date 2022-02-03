import styled from 'styled-components'
import { FaGithub, FaMailBulk } from 'react-icons/fa'

export const Footer = styled.footer`
height: 40px;
display: flex;
justify-content: space-between;
z-index: 10;
position: absolute;
width: 100%;
`
export const Social = styled.div`
display: flex;
justify-content: space-between;
padding: 2%;
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
