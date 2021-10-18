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
            placeholder="tracedSVG"
            quality="100"
            width={35}
            height={35}
            src="./logo.svg"
            alt="logo"
          />
          <div style={{ paddingLeft:"3px", alignSelf: "center" }}>Varun Srivatsa</div>
        </div>
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  )
}

export default Navbar
