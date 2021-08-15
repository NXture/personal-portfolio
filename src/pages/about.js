import React from "react"
import { Layout, Container, Seo } from "components/common"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const About = () => {
  return (
    <Layout>
      <Seo />
      <Container>
        <div style={{ margin: "2% 0% 4% 4%" }}>
          <h1>About Me</h1>
          <Section
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Image>
              <StaticImage
                className="profile"
                placeholder="tracedSVG"
                quality="100"
                src="../images/main_profile.jpeg"
                alt="varun srivasta"
              />
            </Image>
            <div>
              <h2>
                <span role="img" aria-label="greetings">
                  👋
                </span>
                Hi there, thanks for visiting!
              </h2>
              <p>
                I'm Varun, a student and freelancer pursuing a career in data
                science. Currently, I'm studying Bachelor of Computer
                Application - Specialization in Data Science at Jain University,
                Bangalore.
              </p>
              <p>
                This site is my corner of the internet which I am using to
                experiment, share and document things I learned.
              </p>

              <p>
                Feel free to email me at varunsrivatsa27@gmail.com or use the
                contact form below.
                <span role="img" aria-labelledby="below">
                  👇
                </span>
              </p>
              <h3>
                "Feedback is really appreciated"
                <span role="img" aria-labelledby="smily">
                  😊
                </span>
              </h3>
            </div>
          </Section>
        </div>
        <hr style={{ backgroundColor: "GrayText" }} />
        <div>
          <p style={{ color: "tomato" }}>
            Sorry! Their was an issue with the contact form, well be fixed &
            added soon again.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default About

const Image = styled.div`
  .profile {
    margin: 0px 20px 0px 0px;
    border-radius: 50%;
    min-width: 250px;
    max-width: 250px;
  }
`
const Section = styled.div`
  margin-top: 5%;

  @media (max-width: 960px) {
    flex-wrap: wrap;
    .profile {
      margin-bottom: 7%;
    }
  }
`
