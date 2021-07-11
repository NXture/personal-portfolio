import React from "react"
import { Layout, Seo } from "components/common"
import { Intro, Skills, RecentPosts } from "components/landing"
const Home = () => (
  <Layout>
    <Seo />
    <Intro />
    <RecentPosts />
    <Skills />
  </Layout>
)

export default Home
