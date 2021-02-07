import React from "react"
import { BannerStyled, LogoIcon } from "./banner.styled"

export default function Banner(props) {
  return (
    <BannerStyled>
      <LogoIcon />
      <p>
        <b>UPCOMING:</b> Prepare for winter efficiently
      </p>
    </BannerStyled>
  )
}
