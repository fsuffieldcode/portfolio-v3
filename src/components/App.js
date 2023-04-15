import styled from 'styled-components'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { GlobalStyle } from '../GlobalStyle'

import NavBar from './Nav'
import Intro from './Intro'
import Stack from './Stack'
import Work from './Work'

// Styles

const Main = styled.main`
`

const MainContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

// Code

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Main id="home">
        <MainContainer>
          <NavBar />
          <Intro />
          <Stack />
          <Work />
        </MainContainer>
      </Main>
    </div>
  )
}

export default App
