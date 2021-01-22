/** @jsx jsx */
import { Box } from 'layout'
import { jsx } from 'theme'

export default () => (
  <Box display='grid' gridTemplateColumns={['auto', 'auto']}>
    {/* <img
      src={Img}
      sx={{
        gridRow: ['1', '1', '1/-1'],
        height: 10,
        width: 10,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    /> */}
    <Box p={4} bg='uiDark' color='uiLight'>
      <h1
        sx={{
          fontSize: ['58px', '67.5px', '67.5px'],
          wordBreak: 'break-word'
        }}>
        Join The Movement
      </h1>
      <p>
        There are many organizations doing great work to address the climate
        crisis in our communities. To stay involved in the long term, join these
        organizations and get to work!
      </p>
      <p>
        (These are organizations who have been a part of planning the Strike +
        Week of Action across Oregon. All groups listed alphabetically.)
      </p>
    </Box>
    {/* <Box px={[4, 3, 5]} py={4} bg='accent'>
      <h2 sx={{ fontSize: '60px' }}>
        medium length heading 2
      </h2>
      <p>
        loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
        loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem{' '}
      </p>
    </Box> */}
  </Box>
)
