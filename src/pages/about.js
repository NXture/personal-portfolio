import React, { useContext } from "react"
import { Layout, Container, Seo } from "components/common"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { ThemeContext } from "providers/ThemeProvider"

const About = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <Layout>
      <Seo />
      <Container>
        <div style={{ marginBottom: "4%" }}>
          <h1>About Me</h1>
          <Section>
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
                Feedback is really appreciated
                <span role="img" aria-labelledby="smily">
                  😊
                </span>
              </h3>
            </div>
          </Section>
        </div>
        {/* <hr style={{ backgroundColor: "GrayText" }} /> */}

        <Form theme={theme}>
          <div theme={theme}>
            <h3>
              Let's get in touch{" "}
              <span role="img" aria-labelledby="envelop">
                📮
              </span>
            </h3>
            <form
              name="contact"
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <p class="hidden">
                <label>
                  Don’t fill this out if you’re human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <p>
                <label>
                  <input
                    size="25"
                    placeholder="Your Name"
                    type="text"
                    name="name"
                  />
                </label>
              </p>
              <p>
                <label>
                  <input
                    size="25"
                    placeholder="Your Email"
                    type="email"
                    name="email"
                  />
                </label>
              </p>
              <p>
                <label>
                  <textarea
                    placeholder="How can I help you?"
                    name="message"
                    rows="5"
                    cols="27"
                  ></textarea>
                </label>
              </p>
              <p>
                <button type="submit">Submit</button>
              </p>
            </form>
          </div>
        </Form>
      </Container>
    </Layout>
  )
}

export default About

const Image = styled.div`
  .profile {
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
    margin: 0px 20px 0px 0px;
    border-radius: 50%;
    min-width: 250px;
    max-width: 250px;
  }
`
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;

  @media (max-width: 960px) {
    flex-wrap: wrap;
    justify-content: center;

    .profile {
      margin-bottom: 7%;
    }
  }
`
const Form = styled.div`
  display: flex;
  justify-content: center;

  div {
    background: ${({ theme }) => (theme === "light" ? "#fff" : "#181717")};
    margin-bottom: 5%;
    margin-top: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 40%;
    padding: 2% 2%;
    border-radius: 5%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;

    button {
      color: white;
      border: none;
      background-color: #ff0066;
      padding: 2% 4%;

      :hover {
        cursor: pointer;
        background-color: blue;
      }
    }

    @media (max-width: 960px) {
      width: 50%;
      margin-bottom: 10%;
    }

    @media (max-width: 610px) {
      width: 80%;
    }
  }
`
