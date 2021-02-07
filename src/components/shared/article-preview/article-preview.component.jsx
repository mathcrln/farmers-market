import React from "react"

import {
  PreviewBox,
  ArticleImage,
  ArticleTitle,
  ArticleSummary,
} from "./article-preview.styled"

export default function ArticlePreview(props) {
  return (
    <PreviewBox>
      <ArticleImage src="https://source.unsplash.com/fxJTl_gDh28/300x170" />
      <ArticleTitle>Miracle food for Winter! </ArticleTitle>
      <ArticleSummary>
        Are you cold? We have listed the best recipes to keep warm during this
        winter.
      </ArticleSummary>
    </PreviewBox>
  )
}
