import styled from "styled-components"
import { DEVICES } from "../../../assets/constants/DEVICES"
import React from "react"
import { Link } from "gatsby"

const PreviewBox = styled(linkProps => <Link {...linkProps} />)`
  text-align: center;
  width: 300px;
  margin: 0 1rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text};

  :hover,
  :focus {
    outline: none;
    img {
      filter: drop-shadow(3px 3px 3px ${({ theme }) => theme.primaryColor});
      box-sizing: border-box;
    }
  }
`

const ArticleImage = styled.img`
`
const ArticleTitle = styled.h3`

`
const ArticleSummary = styled.p`
  display: none;

  @media ${DEVICES.tablet} {
    display: block;
  } ;
`

export { PreviewBox, ArticleImage, ArticleSummary, ArticleTitle }
