import React, { useState } from 'react'
import { ThemeProvider } from 'theme-ui'
import { Helmet } from 'react-helmet'
import { Box, Flex } from 'rebass'
import { Label, Select } from '@rebass/forms'
import * as themeui from '@theme-ui/presets'
import merge from 'lodash.merge'
import rebass from '@rebass/preset'
import material from '@rebass/preset-material'

const presets = {
  rebass,
  material,
  ...themeui,
}

const themes = [
  ...Object.keys(presets)
]

export default props => {
  const [ theme, setTheme ] = useState('preset')

  const demoTheme = merge({}, rebass, presets[theme])

  return (
    <div>
      {demoTheme.googleFonts && (
        <Helmet>
          <link rel='stylesheet' href={demoTheme.googleFonts} />
        </Helmet>
      )}
      <Flex mb={4}>
        <Box>
          <Label htmlFor='theme' mb="1">
            Theme:
            {' '}
          </Label>
          <Select
            id='theme'
            name='theme'
            sx={{
              width: 'auto'
            }}
            px="3"
            defaultValue={theme}
            onChange={e => {
              setTheme(e.target.value)
            }}
          >
            {themes.map(name => (
              <option key={name}>{name}</option>
            ))}
          </Select>
        </Box>
      </Flex>
      <ThemeProvider theme={demoTheme}>
        {props.children}
      </ThemeProvider>
    </div>
  )
}
