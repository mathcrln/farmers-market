import React from "react"

import {
  NavigationStyled,
  HomeIcon,
  SearchIcon,
  ShoppingBasketIcon,
  UserIcon,
  StyledLink,
} from "./navigation.styled"

export default function Navigation(props) {
  return (
    <NavigationStyled>
      <StyledLink to="/" name="'Home'" activeClassName="active">
        <HomeIcon />
      </StyledLink>
      <StyledLink to="/search" name="'Search'" activeClassName="active">
        <SearchIcon />
      </StyledLink>
      <StyledLink to="/shopping" name="'Shopping'" activeClassName="active">
        <ShoppingBasketIcon />
      </StyledLink>
      <StyledLink to="/account" name="'Profile'" activeClassName="active">
        <UserIcon />
      </StyledLink>
    </NavigationStyled>
  )
}
