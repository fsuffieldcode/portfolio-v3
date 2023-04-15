import React from 'react'

import {
  IntroContainer,
  Heading,
  StyledSocialContainer,
  StyledBio,
  HelloText
} from './Intro.styles'

import { GitHubIconNoText, LinkedInIcon, EmailIcon } from './Icons'

const Intro = () => {
  return (
    <IntroContainer>
      <HelloText>Hi, I'm</HelloText>
      <Heading>
        Fabian
        <br />
        Suffield
      </Heading>
      <StyledSocialContainer>
        <a href="mailto:hello@fabiansuffield.com">
          <EmailIcon color="#f68084" />
        </a>
        <a href="https://github.com/fsuffieldcode/">
          <GitHubIconNoText color="#f68084" />
        </a>
        <a href="https://www.linkedin.com/in/fabian-suffield-7ba193192/">
          <LinkedInIcon color="#f68084" />
        </a>
      </StyledSocialContainer>
      <StyledBio>
        I code <b>fast</b> and <b>responsive</b> experiences for the web. <br />
        <br />
        My experience leans heavily towards the front-end, but I also enjoy full
        stack development.
        <br />
        <br />
        Here's some of the stuff I use to get that done:
      </StyledBio>
    </IntroContainer>
  )
}

export default Intro
