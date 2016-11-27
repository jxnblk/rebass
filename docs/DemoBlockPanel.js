
import React from 'react'
import { Container, Grid } from 'gridsys'
import { Flex, Box } from 'reflexbox'
import {
  Section,
  Block,
  Heading,
  Text,
  Button,
  Panel,
  PanelHeader
} from '../src'

const BlockPanel = ({ toggle }) => (
  <Container>
    <Grid span={3}>
      <Block
        borderLeft
        px={3}
        color='primary'>
        <Heading
          level={3}
          alt
          children='Alt Heading' />
        <Heading
          level={3}
          size={1}
          big>
          Block
        </Heading>
        <Text>
          A large solid piece of hard material, especially rock, stone, or wood, typically with flat surfaces on each side
        </Text>
      </Block>
    </Grid>
    <Grid span={3}>
      <Panel m={0} theme='primary'>
        <PanelHeader>
          Panel
        </PanelHeader>
        <Text>
          A flat or curved component, typically rectangular, that forms or is set into the surface of a door, wall, or ceiling
        </Text>
        <Button
          big
          my={2}
          onClick={toggle('modalOpen')}
          children='Open Overlay' />
      </Panel>
    </Grid>
  </Container>
)

export default BlockPanel

