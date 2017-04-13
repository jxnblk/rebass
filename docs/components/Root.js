
import PropTypes from 'prop-types'
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  config,
  Block,
  Button,
  Container,
  Divider,
  Footer,
  Heading,
  NavItem,
  PageHeader,
  Panel,
  PanelHeader,
  Pre,
  Section,
  SectionHeader,
  Space,
  Text,
  Toolbar
} from '../../src'

import Header from './Header'
import Features from './Features'
import ComponentDoc from './ComponentDoc'
import Related from './Related'

const css = `
html { -webkit-text-size-adjust: 100% }
.NavItem:hover,
.Button:hover {
  box-shadow: inset 0 0 0 9999px rgba(0, 128, 255, .125);
}
.Button:disabled { opacity: .5 }
`

class Root extends React.Component {

  constructor () {
    super()
  }

  static childContextTypes = {
    rebass: PropTypes.object
  }

  getChildContext () {
    return {
      rebass: {
        colors: {
          ...config.colors,
          gray2: '#666',
          darken: 'rgba(0, 0, 0, .9375)',
          d1: 'rgba(0, 0, 0, .125)'
        },
        Divider: {
          borderColor: 'inherit'
        },
        PageHeader: {
          borderColor: 'inherit'
        },
        SectionHeader: {
          borderColor: 'inherit'
        }
      }
    }
  }

  render () {
    const {
      components,
      base,
      examples,
      description,
      version,
      ga
    } = this.props

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>Rebass</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link href='https://unpkg.com/basscss-basic@1.0.0/index.css' rel='stylesheet' />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
          <Header {...this.props} />
          <Container>
            <nav>
              <Flex wrap gutter={1}>
                {components.map(c => (
                  <NavItem key={c.name} href={`#${c.name}`} children={c.name} />
                ))}
              </Flex>
            </nav>
            <main>
              <Features />
              {components.map((c, i) => <ComponentDoc key={i} {...c} />)}
              <ComponentDoc {...base} />
              <Related />
            </main>
            <Block borderLeft p={3} mb={4}>
              <Flex wrap align='center'>
                <div>
                  <Heading size={1} children='Get Started' />
                  <Pre children='npm i rebass' />
                </div>
                <Space auto />
                <Button href='https://github.com/jxnblk/rebass'
                  children='GitHub' />
                <Space auto />
              </Flex>
            </Block>
            <Text small>
              Documentation generated with <a href='https://github.com/jxnblk/static-react'>static-react</a>, <a href='https://github.com/reactjs/react-docgen'>react-docgen</a>, and <a href='https://github.com/jxnblk/react-component-permutations'>react-component-permutations</a>.
            </Text>
            <Footer>
              <NavItem px={0} href='https://github.com/jxnblk/rebass' children='GitHub' />
              <Space auto />
              <NavItem px={0} href='http://jxnblk.com' children='Made by Jxnblk' />
            </Footer>
          </Container>
          <script dangerouslySetInnerHTML={{ __html: ga }} />
        </body>
      </html>
    )
  }
}

export default Root

