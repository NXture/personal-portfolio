import React from "react"
import { Layout, Container, Seo } from "components/common"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <Seo />
      <Container>
        <div style={{ margin: "0% 5%" }}>
          <h1>About Me</h1>
          <h3>
            <span role="img" aria-label="greetings">
              👋
            </span>
            Hi there, thanks for visiting!
          </h3>
          <p>
            I'm Varun, a student and freelancer pursuing a career in data
            science. Currently, I'm studying Bachelor of Computer Application -
            Specialization in Data Science at Jain University, Bangalore.
          </p>
          <p>
            This site is my corner of the internet which I am using to
            experiment, share and document things I learned.
          </p>
          <h3>
            "Feedback is really appreciated"
            <span role="img" aria-labelledby="smily">
              😊
            </span>
          </h3>
          <p>
            Feel free to email me at varun.srivathsa@gmail.com, or DM on{" "}
            <Link>Twitter</Link>.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default About
