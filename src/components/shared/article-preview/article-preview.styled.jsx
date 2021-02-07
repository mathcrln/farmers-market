import styled from "styled-components"
import { DEVICES } from "../../../assets/constants/DEVICES"

const PreviewBox = styled.div`
  text-align: center;
  width: 300px;
  margin: 0 1rem;
`

const ArticleImage = styled.img``
const ArticleTitle = styled.h3``
const ArticleSummary = styled.p`
  display: none;

  @media ${DEVICES.tablet} {
    display: block;
  } ;
`

export { PreviewBox, ArticleImage, ArticleSummary, ArticleTitle }
