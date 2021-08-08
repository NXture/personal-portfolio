import React from "react"
import { Layout, Seo } from "components/common"
import { Intro, RecentPosts } from "components/landing"
const Home = () => (
  <Layout>
    <Seo />
    <Intro />
    <RecentPosts />
  </Layout>
)

export default Home
