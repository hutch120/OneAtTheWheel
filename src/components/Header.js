import React from 'react'
import styled from 'styled-components'
import { updateRoute, ROUTES } from '../pages/Routes'

const Wrapper = styled.div`
font-size: 18px;
line-height: 24px;
background-color: rgb(255, 255, 255);
color: rgb(68, 68, 68);
box-sizing: border-box;
text-size-adjust: 100%;
`

const HeaderDiv = styled.div`
display: flex;
box-sizing: border-box;
max-width: 100%;
-webkit-box-align: center;
align-items: center;
background-color: rgb(218, 218, 218);
color: rgb(68, 68, 68);
min-width: 0px;
min-height: 0px;
flex-direction: row;
height: 50px;
flex: 0 0 auto;
-webkit-box-pack: justify;
justify-content: space-between;
padding-left: 10px;
padding-right: 10px;
`

const LogoHome = styled.img`
width: 25px;
`

const LogoHelp = styled.img`
width: 25px;
`

const LogoWheel = styled.img`
margin-right: 10px;
width: 25px;
`

const Title = styled.span`
color: #0080ff;
display: inline-flex;
box-sizing: border-box;
max-width: 100%;
-webkit-box-align: center;
align-items: center;
min-width: 0px;
min-height: 0px;
flex-direction: row;
`

const HomeButton = styled.a`
box-sizing: border-box;
font-size: inherit;
line-height: inherit;
color: rgb(125, 76, 219);
font-weight: 600;
text-decoration: none;
cursor: pointer;
`
const Stretch = styled.div`
flex: 0 0 auto;
align-self: stretch;
width: 12px;
`

const HelpButton = styled.div`
cursor: pointer;
float: right;
`

function onClickHome ({ setRoute }) {
  updateRoute({ key: '', value: '', setRoute })
}

function onClickInfo ({ setRoute }) {
  updateRoute({ key: ROUTES.info, value: '', setRoute })
}

export function Header ({ setRoute }) {
  return (
    <Wrapper>
      <HeaderDiv>
        <HomeButton onClick={() => onClickHome({ setRoute })}><Title><LogoHome src='images/home.svg' /><Stretch /><LogoWheel src='images/ship-wheel.svg' />One At The Wheel</Title></HomeButton>
        <Stretch />
        <HelpButton onClick={() => onClickInfo({ setRoute })}><LogoHelp src='images/help.svg' /></HelpButton>

      </HeaderDiv>
    </Wrapper>
  )
}
