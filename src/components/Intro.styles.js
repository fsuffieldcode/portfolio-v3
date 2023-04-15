import styled from 'styled-components'

const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--darkgrey);
`

const HelloText = styled.span`
  @media (min-width: 900px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.3rem;
  }
`

const Heading = styled.h1`
  margin: 0.75rem;
  font-size: 4.5rem;
  line-height: 3.5rem;
  font-weight: 900;
  font-style: italic;
  background: -webkit-linear-gradient(var(--lightblue), var(--coral));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 400px) {
    font-size: 5.5rem;
    line-height: 4.5rem;
  }

  @media (min-width: 900px) {
    font-size: 7rem;
    line-height: 6rem;
  }

  @media (min-width: 1200px) {
    font-size: 8rem;
    line-height: 7rem;
  }
`

const StyledSocialContainer = styled.div`
  display: flex;

  a {
    display: block;
  }

  svg {
    width: 2rem;
    margin: 0.25rem;
    &:hover {
      position: relative;
      bottom: -3px;
    }
  }

  @media (min-width: 600px) {
    /* Social Icons */
    svg {
      width: 2.5rem;
    }
  }

  @media (min-width: 900px) {
    /* Social Icons */
    svg {
      width: 3rem;
    }
  }
`

const StyledBio = styled.span`
  width: 70%;
  margin-top: 1.5rem;
  font-size: 1rem;
  color: var(--midgrey);

  b {
    color: var(--wine);
    font-style: italic;
  }

  @media (min-width: 900px) {
    font-size: 1.25rem;
  }
`

export { IntroContainer, Heading, StyledSocialContainer, StyledBio, HelloText }
