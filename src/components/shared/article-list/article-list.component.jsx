import React from "react"
import ArticlePreview from "../article-preview"
import { ListOfArticles } from "./article-list.styled"

export default function ArticleList(props) {
  return (
    <ListOfArticles>
      <ArticlePreview />
      <ArticlePreview />
      <ArticlePreview />
      <ArticlePreview />
    </ListOfArticles>
  )
}
