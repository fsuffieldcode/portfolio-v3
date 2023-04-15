import React, { Component } from 'react'
import styled from 'styled-components'

// Styles

const StyledNav = styled.nav`
  width: 100%;
  min-height: 15vh;
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: var(--darkgrey);
  position: sticky;
  font-size: 1rem;

  ul {
    margin: 0;
    margin-right: 2rem;
    display: flex;
    justify-content: space-around;
    list-style: none;
  }

  li {
    margin-left: 1rem;
  }
`

const NavItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  a {
    text-decoration: none;
    background-color: var(--coral);
    color: white;
    padding: 0.5rem;
    border-radius: 0.25rem;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.2);

    &:hover {
      color: white;
      background-color: var(--lightblue);
      position: relative;
      bottom: -3px;
    }
  }
`

// Code

class Nav extends Component {
  render() {
    return (
      <StyledNav>
        <NavItems>
          <i className="fas fa-code" />
          <ul>
            <li>
              <a href="#work">See My Work</a>
            </li>
          </ul>
        </NavItems>
      </StyledNav>
    )
  }
}



export default Nav
