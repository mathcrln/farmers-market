import styled from "styled-components"
import { Home, Search, ShoppingBasket, User } from "@styled-icons/fa-solid"
import React from "react"
import { Link } from "gatsby"
import { DEVICES } from "../../../assets/constants/DEVICES"

const NavigationStyled = styled.nav`
  background: ${({ theme }) => theme.primaryColor};
  /* padding: 2rem 1.8rem; */
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  svg {
    color: white;
    width: 1.5rem;
    height: 1.5rem;
  }
  @media ${DEVICES.tablet} {
    position: static;
  } ;
`

const HomeIcon = styled(Home)``
const SearchIcon = styled(Search)``
const ShoppingBasketIcon = styled(ShoppingBasket)``
const UserIcon = styled(User)``

const StyledLink = styled(linkProps => <Link {...linkProps} />)`
  padding: 1.5rem 0.8rem;
  text-decoration: none;
  justify-self: center;
  display: flex;
  align-items: center;

  &.active {
    display: flex;
    align-items: center;
    background: #ff9900;
    border-radius: 20px;

    &:after {
      content: ${props => `${props.name}`};
      color: white;
      font-size: 1.2rem;
      margin-left: 0.7rem;
    }
    margin-right: 0.5rem;
  }
  &:last-of-type {
    border-radius: 20px 0 0 20px;
    margin-right: 0;
  }
  &:first-of-type {
    border-radius: 0 20px 20px 0;
  }

  @media ${DEVICES.tablet} {
    &.active {
      background: none;
      svg {
        color: ${({ theme }) => theme.secondaryColor};
      }
      margin-right: 0;
    }
    &:after {
      content: ${props => `${props.name}`};
      color: white;
      font-size: 1.2rem;
      margin-left: 0.7rem;
    }
  } ;
`

export {
  NavigationStyled,
  HomeIcon,
  SearchIcon,
  ShoppingBasketIcon,
  UserIcon,
  StyledLink,
}
