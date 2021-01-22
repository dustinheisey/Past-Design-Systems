import { React } from 'theme'
import { Box } from 'layout'
import { Tab, TabList } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

export default ({ title, children }) => (
  <Box>
    <h2>{title}</h2>
    {children}
  </Box>
)
