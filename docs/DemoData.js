
import React from 'react'
import { Container, Grid } from 'gridsys'
import { Flex, Box } from 'reflexbox'
import {
  Block,
  Divider,
  Donut,
  Section,
  SectionHeader,
  Heading,
  Slider,
  Space,
  Stat,
} from '../src'

const rad = (a) => Math.PI * a /180

const ry = (r, a) => r * Math.cos(rad(a))
const rx = (r, a) => r * Math.sin(rad(a))

class DataDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      angle: 60,
      radius: 192,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    const num = parseInt(e.target.value)
    this.setState({ [e.target.name]: num })
  }

  render () {
    const { repo, version } = this.props
    const { radius, angle } = this.state

    const x = rx(radius, angle)
    const y = ry(radius, angle)
    const maxRadius = 320

    return (
      <Container>
        <Grid span={8}>
          <Section>
            <SectionHeader heading='Stats' />
            <Flex
              wrap
              justify='space-between'
              align='stretch'>
              <Flex
                column
                align='center'
                style={{
                  width: 320,
                  minHeight: 384,
                }}>
                <Space auto />
                <Donut
                  color='info'
                  size={radius}
                  strokeWidth={16}
                  children={`${radius}px`}
                  value={radius / maxRadius} />
                <Space auto />
                <Slider
                  color='info'
                  fill
                  style={{ width: '100%' }}
                  name='radius'
                  label='Radius'
                  value={radius}
                  min={128}
                  max={maxRadius}
                  onChange={this.handleChange} />
              </Flex>
              <Flex column>
                <Space auto />
                <Donut
                  color='green'
                  size={192}
                  strokeWidth={16}
                  children={`${angle}°`}
                  value={angle / 360} />
                <Space auto />
                <Slider
                  color='green'
                  fill
                  style={{ width: '100%' }}
                  name='angle'
                  label='Angle'
                  value={angle}
                  max={360}
                  onChange={this.handleChange} />
              </Flex>
              <Box sm={3}>
                <Block
                  style={{ textAlign: 'right' }}
                  py={2}
                  pl={2}
                  color='red'
                  borderColor='red'
                  borderLeft>
                  <Heading level={4}
                    size={2}
                    children='Coordinates' />
                  <div>
                    <Stat
                      m={2}
                      topLabel
                      unit='px'
                      value={Math.round(x)} />
                  </div>
                  <div>
                    <Stat
                      m={2}
                      topLabel
                      unit='px'
                      value={Math.round(y)} />
                  </div>
                </Block>
              </Box>
            </Flex>
            <Divider />
            <Flex
              wrap
              justify='space-between'
              gutter={2}
              align='center'>
              <Stat
                m={2}
                label='Stars'
                color='orange'
                value={repo.stargazers_count || '...'} />
              <Stat
                m={2}
                label='Forks'
                value={repo.forks_count || '...'} />
              <Stat
                m={2}
                label='Watchers'
                value={repo.watchers_count || '...'} />
              <Stat
                m={2}
                label='Version'
                value={version} />
            </Flex>
          </Section>
        </Grid>
      </Container>
    )
  }
}

export default DataDemo

