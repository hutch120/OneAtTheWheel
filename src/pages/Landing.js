import React from 'react'
import styled from 'styled-components'
import { Header, HeaderBuffer } from '../components/Header'
import { updateRoute, ROUTES } from './Routes'

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

function onClickShowACourse ({ setRoute }) {
  updateRoute({ key: ROUTES.viewcourse, value: '123', setRoute })
}

function onClickCreateACourse ({ setRoute }) {
  updateRoute({ key: ROUTES.createcourse, value: '', setRoute })
}

export function Landing ({ setRoute }) {
  return (
    <Wrapper>
      <Header setRoute={setRoute} />
      <HeaderBuffer />
      <ButtonWrapper>
        <Button onClick={() => onClickShowACourse({ setRoute })}>View course</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button onClick={() => onClickCreateACourse({ setRoute })}>Create course</Button>
      </ButtonWrapper>
      <Background />
    </Wrapper>
  )
}
