import styled from "styled-components"
import { Carrot } from "@styled-icons/fa-solid"
import React from "react"
import { Link } from "gatsby"
import { DEVICES } from "../../../assets/constants/DEVICES"

const HeaderStyled = styled.header`
  background: ${({ theme }) => theme.primaryColor};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${DEVICES.tablet} {
    justify-content: space-around;
  }
`
const Title = styled.h1`
  font-weight: 400;
`
const LogoIcon = styled(Carrot)`
  width: 3rem;
  margin-right: 1rem;
`

const LinkHome = styled(linkProps => <Link {...linkProps} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: white;
`
export { HeaderStyled, Title, LogoIcon, LinkHome }
