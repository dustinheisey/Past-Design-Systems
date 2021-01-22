/** @jsx jsx */
import { jsx } from 'theme'
import { Flex, Box } from 'layout'
import { Btn } from 'elements'
import Strike from '../../assets/images/strike.png'

export default () => (
  <Box
    display='grid'
    gridTemplateColumns={['auto', 'auto', '.4fr .6fr']}
    alignItems='center'
    justifyItems='center'>
    <img src={Strike} alt='Global Climate Strike' sx={{ width: [8, 8, 9] }} />
    <Flex alignLeft bg='accent' color='uiDark' p={[3, 4, 4]} m={3}>
      <h1>Climate Strike Oregon</h1>
      <p>
        Earlier this year, Greta Thunberg and 46 other youth activists issued a
        call to everyone around the globe to join them in a massive climate
        strike on September 20th. The Climate Strike will kick-off a week of
        mass, escalated actions between Sept 20-28.
      </p>
      <p>
        School strikers are calling on everyone ― young people, parents,
        workers, and all concerned people ― to join a massive climate strike on
        September 20th to demand an end to the age of fossil fuels.
      </p>
      <p>
        Our house is on fire — let’s act like it. We demand climate justice for
        everyone.
      </p>
      <p>
        This week is our chance to show the politicians and fossil fuel
        billionaires that the real power lies with the people. This week is your
        chance to join the climate justice movement, and put a stop to business
        as usual.
      </p>
      <p>
        In every state and every city people are stepping out their normal
        routines for a day or a week by taking action locally, whether that
        means sitting in at city halls, shutting down fossil fuel
        infrastructure, or marching to the governor’s office. It’s going to take
        all of us to change everything and there’s no better time to join us.
      </p>
      <Btn to='/join-the-movement' sx={{ background: 'accent' }} mt={2}>
        Join The Movement
      </Btn>
    </Flex>
  </Box>
)
