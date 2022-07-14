import React from "react"
import { Container } from "components/common"
import { Wrapper, Flex, Links, Details } from "./styles"
import social from "./social.json"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <Image>
          <StaticImage
            className="certificate"
            placeholder="tracedSVG"
            quality="100"
            src="../../../images/certificate.png"
            alt="certificate"
          />
        </Image>
        <h2>
          Varun Srivasta | Developer{" "}
          <span aria-label="developer" role="img">
            👨‍💻
          </span>
        </h2>
        <Links>
          {social.map(({ id, name, link, icon }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`follow me on ${name}`}
            >
              <img width="24" src={icon} alt={name} />
            </a>
          ))}
        </Links>
        <p style={{ color: "white", paddingTop: "5%" }}>
          <span style={{ color: "black", backgroundColor: "yellow" }}>
            Attention:
          </span>{" "}
          This site uses <span>cookies</span>. Please hit back button if you're
          not happy about that!
        </p>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with{" "}
          <span aria-label="love" role="img">
            💖
          </span>{" "}
          by Varun Srivatsa
        </span>
      </Details>
    </Flex>
  </Wrapper>
)

const Image = styled.div`
  .certificate {
    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5));
    min-width: 100px;
    max-width: 180px;
    margin-bottom: 4rem;
  }
`
