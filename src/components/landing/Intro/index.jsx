import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Varun Srivathsa and I’m a Student and Freelancer pursuing a career in Data Science!</h4>
          <Button as={AnchorLink} href="#contact">
            Contact Me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a JAMStack engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
