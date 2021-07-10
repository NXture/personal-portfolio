import React, { useContext } from "react"
import { ThemeContext } from "providers/ThemeProvider"
import ToggleTheme from "components/theme/Header/ToggleTheme"
import { Wrapper } from "./styles"
import { Link } from "gatsby"

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <Link to="/about">About</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/tags">Tags</Link>
      <Link to="/projects">Projects</Link>
      <ToggleTheme />
    </Wrapper>
  )
}

export default NavbarLinks
