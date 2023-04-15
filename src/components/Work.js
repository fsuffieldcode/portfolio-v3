import React from 'react'

import Project from './Project'

import {
  TechContainer,
  TechTag,
  LinkContainer,
  ProjectLink,
} from './Project.styles'

import {
  HeaderContainer,
  Header,
  StyledWorkSection,
  StyledFooter,
} from './Work.styles'

const Work = (props) => {
  return (
    <StyledWorkSection>
      <HeaderContainer id="work">
        <Header>And here's some of my work:</Header>
      </HeaderContainer>
      <Project
        name="Tenners"
        source="https://res.cloudinary.com/fsuffieldcode/image/upload/v1584229261/tenners-responsive-mockup.jpg"
        tech={[
          'JavaScript',
          'EJS',
          'Node',
          'Express',
          'Mongoose',
          'Passport.js',
          'Semantic UI',
        ]}
        repo="https://github.com/fsuffieldcode/tenners"
        demo="http://tenners.onrender.com"
        about="
        This web app allows users to create and manage lists of favourite music albums (you can register with a fake email to play around with it). I implemented a login system using Passport.js, providing salting and hashing for passwords. I used Spotify's web API for search and Mongoose/Mongodb as a database.
        "
      />
      <Project
        name="The Irish Times"
        source="https://res.cloudinary.com/fsuffieldcode/image/upload/v1584294805/theirishtimes-responsive-mockup.jpg"
        tech={['JavaScript', 'HTML', 'CSS', 'Flexbox', 'CSS Grid']}
        repo="https://github.com/fsuffieldcode/the-irish-times"
        demo="https://www.theirishtimes.netlify.com"
        about="
        A mobile-first and responsive re-design of the website for broadsheet newspaper 'The Irish Times'. I wanted to practice creating a relatively complicated responsive layout. Coded based on design file found on Behance. 
        "
      />
      <StyledFooter>
        <h3>
          This site was made with{' '}
          <span role="img" aria-label="red heart emoji">
            ❤️
          </span>{' '}
          and:
        </h3>
        <TechContainer>
          <TechTag>React</TechTag>
          <TechTag>Styled Components</TechTag>
          <TechTag>Netlify</TechTag>
        </TechContainer>
        <LinkContainer>
          <ProjectLink href="https://github.com/fsuffieldcode/portfolio">
            View Code
          </ProjectLink>
        </LinkContainer>
      </StyledFooter>
    </StyledWorkSection>
  )
}

export default Work
