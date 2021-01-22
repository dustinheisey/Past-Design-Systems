/** @jsx jsx */
import { jsx } from 'theme'
import { Box } from 'layout'
import {
  FaDelicious,
  FaPrint,
  FaBandcamp
} from 'react-icons/fa'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import Section from './section'

const tabStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#fff',
  padding: '4vh',
  margin: '0 2vmin'
}

export default () => (
  <Tabs sx={{ width: 9, margin: 'auto' }}>
    <TabList
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Tab style={tabStyles}>
        <FaDelicious size='7vh' sx={{ mb: 1 }} />
        <h3>template</h3>
      </Tab>
      <Tab style={tabStyles}>
        <FaPrint size='7vh' sx={{ mb: 1 }} />
        <h3>print</h3>
      </Tab>
      <Tab style={tabStyles}>
        <FaBandcamp size='7vh' sx={{ mb: 1 }} />
        <h3>brand</h3>
      </Tab>
    </TabList>
    <TabPanel>
      <Box p={3} bg='uiLight'>
        <Section title='facebook quote meme'></Section>
        <Section title='instagram templates'></Section>
        <Section title='share templates'></Section>
      </Box>
    </TabPanel>
    <TabPanel>
      <Box p={3} bg='uiLight'>
        <Section title='strike closed signs'></Section>
        <Section title='stickers'></Section>
      </Box>
    </TabPanel>
    <TabPanel>
      <Box p={3} bg='uiLight'>
        <Section title='config'></Section>
        <Section title='frames'></Section>
        <Section title='logo'></Section>
      </Box>
    </TabPanel>
  </Tabs>
)
