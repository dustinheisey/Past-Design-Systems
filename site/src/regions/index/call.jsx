/** @jsx jsx */
import { jsx } from 'theme'
import { Flex, Box } from 'layout'
import { Btn } from 'elements'
import Sticker from '../../assets/images/sticker.jpg'

export default () => (
  <Box
    display='grid'
    gridTemplateColumns={['auto', '.4fr .6fr', '.6fr .4fr']}
    alignItems='center'
    justifyItems='center'
    p={['inherit', 3, 'inherit']}
    gap={['inherit', 3, 'inherit']}
    m={[0, 0, 3]}>
    <Flex
      alignLeft
      bg='uiDark'
      color='uiLight'
      p={[4, 3, 5]}
      mb={[3, 0, 0]}
      w={['inherit', 10, 'inherit']}>
      <h2 sx={{ fontSize: '72px' }}>Help us Make History</h2>
      <Btn to='/spread-the-word' sx={{ background: 'accent' }} accent mt={2}>
        Spread The Word
      </Btn>
    </Flex>
    <img
      src={Sticker}
      alt='Global Climate Strike Sticker'
      sx={{ width: [8, 10, 9] }}
    />
  </Box>
)
