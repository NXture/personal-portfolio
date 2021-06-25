import React from "react"
import { Contact, Projects } from "components/landing"
import { Layout, Seo } from "components/common"

const ProjectsPage = () => {
  return (
    <Layout>
      <Seo />
      <Projects />
      <Contact/>
    </Layout>
  )
}

export default ProjectsPage