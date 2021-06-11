import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';
import { Link } from "gatsby"

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink href="#about">About</AnchorLink>
      <Link to="/projects">Projects</Link>
      <Link to= "/blogs">Blogs</Link>
      <AnchorLink href="#contact">Contact</AnchorLink>
      
      <ToggleTheme />
    </Wrapper>
  )

};

export default NavbarLinks;
