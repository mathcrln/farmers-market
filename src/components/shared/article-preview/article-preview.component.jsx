import React from "react"

import {
  PreviewBox,
  ArticleImage,
  ArticleTitle,
  ArticleSummary,
} from "./article-preview.styled"

export default function ArticlePreview(props) {
  return (
    <PreviewBox to="/article">
      <ArticleImage src="https://source.unsplash.com/fxJTl_gDh28/300x170" />
      <ArticleTitle>Miracle food for Winter! A very very very very long title </ArticleTitle>
      <ArticleSummary>
        Are you cold? We have listed the best recipes to keep warm during this
        winter.
      </ArticleSummary>
    </PreviewBox>
  )
}
