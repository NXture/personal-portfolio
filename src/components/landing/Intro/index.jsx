import React, { useContext } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import { Container } from "components/common"
import dev from "assets/illustrations/dev.svg"
import { Wrapper, IntroWrapper, Details, Thumbnail } from "./styles"

export const Intro = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper>
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>
            Hi There!{" "}
            <span role="img" aria-labelledby="greeting">
              👋
            </span>
          </h1>
          <h4>
            I’m Varun Srivathsa, A Student and Freelancer pursuing a career in
            Data Science.
          </h4>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a JAMStack engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  )
}
