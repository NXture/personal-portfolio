import React, { useContext } from "react"
import { Link } from "gatsby"
import { ThemeContext } from "providers/ThemeProvider"
import { Container } from "components/common"
import NavbarLinks from "../NavbarLinks"
import { Wrapper, Brand } from "./styles"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper as={Container}>
      <Brand as={Link} to="/" theme={theme}>
        <div style={{ display: "flex" }}>
          <StaticImage
            quality="100"
            width={40}
            height={40}
            src="./logo.svg"
            alt="logo"
          />
          <div style={{ alignSelf: "center" }}>Varun Srivatsa</div>
        </div>
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  )
}

export default Navbar
