import React from "react"
import { Layout, Seo } from "components/common"
import { Intro, RecentPosts, Stack } from "components/landing"

const Home = () => (
  <Layout>
    <Seo />
    <Intro />
    <RecentPosts />
    <Stack />
  </Layout>
)

export default Home
