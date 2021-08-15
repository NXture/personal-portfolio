import React from "react"
import { Container } from "components/common"
import { Wrapper, Flex, Links, Details } from "./styles"
import social from "./social.json"

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Varun Srivasta</h2>
        <p>
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
    </Flex>
  </Wrapper>
)
