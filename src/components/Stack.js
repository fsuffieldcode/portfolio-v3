import React from 'react'

import { StackContainer, StackCard, StackIcon } from './Stack.styles'

import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  ReactIcon,
  GitIcon,
  GitHubIcon,
  NpmIcon,
  YarnIcon,
  StyledComponentsIcon,
  NodeIcon,
  ExpressIcon,
  MongoIcon,
  PhotoshopIcon,
  HerokuIcon,
  NetlifyIcon,
  FigmaIcon,
  BootstrapIcon
} from './Icons'

const Stack = () => {
  return (
    <div>
      <StackContainer>
        <div>
          <h3>front end</h3>
          <StackCard>
            <StackIcon>
              <ReactIcon />
            </StackIcon>
            <StackIcon>
              <StyledComponentsIcon />
            </StackIcon>
            <StackIcon>
              <JsIcon />
            </StackIcon>
            <StackIcon>
              <BootstrapIcon />
            </StackIcon>
            <StackIcon>
              <HtmlIcon />
            </StackIcon>
            <StackIcon>
              <CssIcon />
            </StackIcon>
          </StackCard>
        </div>
        <div>
          <h3>back end</h3>
          <StackCard>
            <StackIcon>
              <NodeIcon />
            </StackIcon>
            <StackIcon>
              <ExpressIcon />
            </StackIcon>
            <StackIcon>
              <MongoIcon />
            </StackIcon>
          </StackCard>
        </div>
        <div>
          <h3>tools</h3>
          <StackCard>
            <StackIcon>
              <GitIcon />
            </StackIcon>
            <StackIcon>
              <GitHubIcon />
            </StackIcon>
            <StackIcon>
              <NpmIcon />
            </StackIcon>
            <StackIcon>
              <YarnIcon />
            </StackIcon>
            <StackIcon>
              <HerokuIcon />
            </StackIcon>
            <StackIcon>
              <NetlifyIcon />
            </StackIcon>
            <StackIcon>
              <FigmaIcon />
            </StackIcon>
            <StackIcon>
              <PhotoshopIcon />
            </StackIcon>
          </StackCard>
        </div>
      </StackContainer>
    </div>
  )
}

export default Stack
