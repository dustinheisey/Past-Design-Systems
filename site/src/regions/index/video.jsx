/** @jsx jsx */
import { jsx } from 'theme'
import { Box } from 'layout'

const styles = {
  border: 0,
  height: '100%',
  width: '100%',
  position: 'absolute',
  left: 0,
  top: 0
}

export default () => (
  <Box overflow='hidden' pt='56.25%' position='relative' mb={3}>
    <iframe
      src='https://www.youtube.com/embed/vxcU26OzolE'
      frameBorder='0'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Climate Strike Oregon'
      style={styles}
    />
  </Box>
)
