import React from "react"
import Banner from "../components/shared/banner"
import SectionTitle from "../components/shared/section-title"
import ArticleList from "../components/shared/article-list"
export default function Home() {
  return (
    <>
      <Banner />
      <SectionTitle>For you</SectionTitle>
      <SectionTitle>Hot Articles</SectionTitle>
      <ArticleList />
      <SectionTitle>In season</SectionTitle>
    </>
  )
}
