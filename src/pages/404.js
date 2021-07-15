import React from "react"
import { Layout, Container, Seo } from "components/common"

const NotFound = () => (
  <Layout>
    <Seo title="404: Not found" location="/404" />
    <Container>
      <h1>
        NOT FOUND{" "}
        <span role="img" aria-labelledby="wrong">
          ⚠️
        </span>
      </h1>
      <p>
        You just hit a route that doesn&#39;t exist... the sadness.
        <span role="img" aria-labelledby="sadness">
          😞
        </span>
      </p>
    </Container>
  </Layout>
)

export default NotFound
