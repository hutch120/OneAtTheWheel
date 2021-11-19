import React from 'react'
import styled from 'styled-components'
import { PAGES } from '../App'
import { Header } from '../components/Header'

const Wrapper = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
text-align: center;
`

const Background = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-image: url('images/gracie_yacht.jpg');
background-size: cover;
z-index: -2;
`

const ButtonWrapper = styled.div`
padding-top: 20px;
`

const About = styled.div`
padding: 20px;
font-size: 16px;
`

const Button = styled.a`
display: inline-block;
box-sizing: border-box;
cursor: pointer;
font-style: inherit;
font-variant: inherit;
font-stretch: inherit;
font-family: inherit;
text-decoration: none;
margin: 0px;
background: rgb(125, 76, 219);
overflow: visible;
text-transform: none;
border: 2px solid rgb(125, 76, 219);
padding: 4px 22px;
font-size: 18px;
line-height: 24px;
color: rgb(248, 248, 248);
border-radius: 18px;
transition-property: color, background-color, border-color, box-shadow;
transition-duration: 0.1s;
transition-timing-function: ease-in-out;
font-weight: bold;
`

export function Info ({ setPageData }) {
  return (
    <Wrapper>
      <Header setPageData={setPageData} />
      <About>This is a little project I wrote to assist in figuring out the marks for yacht racing on Port Phillip Bay. I've made it public, but I give no warrantee or fitness for any purpose. If you do like it, please let me know on LinkedIn.</About>
      <ButtonWrapper>
        <Button href='https://github.com/hutch120/OneAtTheWheel/blob/main/LICENSE'>MIT Licence</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button href='https://github.com/hutch120/OneAtTheWheel'>Github Source Code</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button href='https://www.linkedin.com/in/simonhutchison1/'>LinkedIn</Button>
      </ButtonWrapper>
      <Background />
    </Wrapper>
  )
}
