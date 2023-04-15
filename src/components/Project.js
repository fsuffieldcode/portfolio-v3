import React, { Component } from 'react'

import {
  ProjectContainer,
  ProjectImage,
  TechContainer,
  TechTag,
  LinkContainer,
  ProjectLink,
  About
} from './Project.styles'

class Project extends Component {
  render() {
    const tech = this.props.tech

    return (
      <ProjectContainer>
        <ProjectImage src={this.props.source} />
        <h3>{this.props.name}</h3>
        <TechContainer>
          {tech.map(function(item) {
            return <TechTag>{item}</TechTag>
          })}
        </TechContainer>
        <LinkContainer>
          <ProjectLink href={this.props.repo} loading="lazy">
            View Code
          </ProjectLink>
          <ProjectLink href={this.props.demo} loading="lazy">
            Live Demo
          </ProjectLink>
        </LinkContainer>
        <About>{this.props.about}</About>
      </ProjectContainer>
    )
  }
}

export default Project
