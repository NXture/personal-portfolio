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
          <a
            href="https://www.credly.com/badges/aa78c626-2c39-4fd3-a3c8-b11750bda000/public_url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              className="certificate"
              placeholder="tracedSVG"
              quality="100"
              src="../../../images/certificate.png"
              alt="certificate"
            />
          </a>
          <a
            href="https://www.credly.com/badges/bdb40801-aeb7-4746-b81c-ceb311bc4126/public_url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StaticImage
              className="certificate"
              placeholder="tracedSVG"
              quality="100"
              src="../../../images/ibm_badge.png"
              alt="badge"
            />
          </a>
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
    max-width: 160px;
    margin-bottom: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`
