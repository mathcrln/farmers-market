import React from "react"
import { HeaderStyled, Title, LogoIcon, LinkHome } from "./header.styled"
import Navigation from "../navigation"

export default function Header(props) {
  return (
    <HeaderStyled>
      <LinkHome to="/">
        <LogoIcon />
        <Title>Farmer's Market</Title>
      </LinkHome>
      <Navigation />
    </HeaderStyled>
  )
}
