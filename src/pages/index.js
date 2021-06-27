import React from "react"
import { Layout, Seo } from "components/common"
import { Intro, Skills, Contact } from "components/landing"

const Home = () => (
  <Layout>
    <Seo />
    <Intro />
    <Skills />
    <Contact />
  </Layout>
)

export default Home
