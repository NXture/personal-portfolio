import React from "react"
import { Layout, Seo } from "components/common"
import { Intro, Skills} from "components/landing"

const Home = () => (
  <Layout>
    <Seo />
    <Intro />
    <Skills />
  </Layout>
)

export default Home
