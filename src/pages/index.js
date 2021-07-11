import React from "react"
import { Layout, Seo } from "components/common"
import { Intro, Skills } from "components/landing"
import TagsList from "components/tags"

const Home = () => (
  <Layout>
    <Seo />
    <Intro />
    <TagsList />
    <Skills />
  </Layout>
)

export default Home
