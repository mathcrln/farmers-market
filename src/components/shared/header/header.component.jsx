import React from "react"
import { HeaderStyled, Title, LogoIcon } from "./header.styled"

export default function Header(props) {
  return (
    <HeaderStyled>
      <LogoIcon />
      <Title>Farmer's Market</Title>
    </HeaderStyled>
  )
}
