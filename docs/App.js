
import React from 'react'
import {
  BrowserRouter,
  ServerRouter,
  createServerRenderContext,
  Match,
  Miss,
  Link
} from 'react-router'
import {
  themes,
  ThemeProvider
} from '../src'
import withParams from './withParams'
import Nav from './Nav'
import Home from './Home'
import ComponentIndex from './ComponentIndex'
import ComponentDetail from './ComponentDetail'
import Demo from './Demo'
import StyleGuideView from './StyleGuideView'
import NotFound from './NotFound'
import ComponentList from './ComponentList'
import Footer from './Footer'
import basename from './basename'
import ThemesIndex from './ThemesIndex'

const isClient = typeof document !== 'undefined'
const isDev = process.env.NODE_ENV !== 'production'

class App extends React.Component {
  state = {
    theme: 'basic'
  }

  changeTheme = (theme) => {
    this.setState({ theme })
    this.props.push({ theme })
  }

  getChildContext () {
    const { theme } = this.state
    return {
      gridsys: {
        columnCount: 8,
        // debug: true
      }
    }
  }

  componentDidMount () {
    const { theme } = this.props.params
    if (theme) {
      this.setState({ theme })
    }
  }

  render () {
    const Router = isClient
      ? BrowserRouter
      : ServerRouter

    const context = createServerRenderContext()
    const routerProps = isClient
      ? {
        basename
      }
      : {
        location: '/',
        basename,
        context
      }

    const config = themes[this.state.theme]

    const sx = {
      root: {
        fontFamily: config.fontFamily,
        color: config.color,
        backgroundColor: config.backgroundColor
      }
    }

    return (
      <div id='app'
        style={sx.root}>
        <ThemeProvider theme={config}>
          <Router {...routerProps}>
            <div>
              <Nav
                theme={this.state.theme}
                changeTheme={this.changeTheme} />
              <Match
                {...this.props}
                pattern='/'
                exactly
                component={Home} />
              <Match
                exactly
                pattern='/components'
                component={ComponentIndex} />
              <Match
                pattern='/components/:name'
                component={ComponentDetail} />
              <Match
                pattern='/demo'
                component={Demo} />
              <Match
                pattern='/themes'
                render={(matchProps) => (
                  <ThemesIndex
                    changeTheme={this.changeTheme}
                  />
                )} />
              <Match
                pattern='/styleguide'
                component={StyleGuideView} />
              <Miss component={NotFound} />
              <ComponentList />
              <Footer />
            </div>
          </Router>
        </ThemeProvider>
      </div>
    )
  }
}

App.childContextTypes = {
  gridsys: React.PropTypes.object
}

export default withParams(App)

