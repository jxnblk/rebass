/* eslint no-unused-vars: 0 */
import React from 'react'
import { render } from 'react-dom'
import preset from '@rebass/preset'
import { ThemeProvider } from '@emotion/react'
// OR import { ThemeProvider } from 'styled-components'
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Link,
  Image,
  Card,
} from 'rebass'
// OR use 'rebass/styled-components'

const theme = {
  ...preset,
}

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <Box variant='styles.root'>
        <Heading as='h1' mb={4}>
          Rebass Sandbox
        </Heading>
        <Button variant='primary' mr={3}>
          Beep
        </Button>
        <Button variant='outline'>
          Boop
        </Button>
      </Box>
    </ThemeProvider>
  )
}

render(<App />, root) // eslint-disable-line no-undef
