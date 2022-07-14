import React, { useContext } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import { Container } from "components/common"
import dev from "assets/illustrations/dev.svg"
import { Wrapper, IntroWrapper, Details, Thumbnail, Links } from "./styles"
import find from "./find.json"

export const Intro = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper>
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I'm Varun Srivatsa. </h4>
          <h4>
            A Data Enthusiast & Freelancer pursuing a career in Data Science.
          </h4>
          <h4>I'm passionate about working on</h4>
          <span style={{ position: "absolute" }}>
            <span className="topics"></span>
            <Links>
              {" "}
              <div style={{ display: "flex", backgroundColor: "seagreen" }}>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bolder",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      paddingLeft: "10px",
                      color: "white",
                    }}
                  >
                    Find Me on:
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "5px 10px",
                    zIndex: "1",
                  }}
                >
                  {find.map(({ id, name, link, icon }) => (
                    <a
                      key={id}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`follow me on ${name}`}
                    >
                      <img width="26" src={icon} alt={name} />
                    </a>
                  ))}
                </div>
              </div>
            </Links>
          </span>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Varun" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  )
}
