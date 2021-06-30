
# @rebass/preset-material

Material Design theme preset for use with [Rebass][]

```sh
npm i @rebass/preset-material
```

## Usage

For general usage with [Emotion][], pass the theme preset to Emotion's `ThemeProvider` component at the root of your application.

```jsx
import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '@rebass/preset-material'

export default props =>
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
```

For use with [Theme UI][], import the `ThemeProvider` from `theme-ui`.

```jsx
import { ThemeProvider } from 'theme-ui'
```

Or, if you're using `gatsby-plugin-theme-ui`, export the theme from `src/gatsby-plugin-theme-ui/index.js`.

```js
// src/gatsby-plugin-theme-ui/index.js
import preset from '@rebass/preset-material'

export default {
  ...preset
}
```

[MIT License](LICENSE.md)

[rebass]: https://rebassjs.org
[emotion]: https://emotion.sh
[theme ui]: https://theme-ui.com
