/** @jsx jsx */
import { Box } from 'layout'
import { jsx } from 'theme'
import { useState } from 'react'
import { Flex } from 'layout'

import Calendar from './calendar/slider'
import Map from './map/map'

export default () => {
  // Declare a new state variable, which we'll call "count"
  const [place, setPlace] = useState(0)

  return (
    <Box
      display='grid'
      gridTemplateColumns={['auto', 'auto', '.4fr .6fr']}
      p={3}>
      <Box>
        <Flex
          bg='uiDark'
          flexDirection={['column', 'row', 'row']}
          alignItems={['flex-start', 'center', 'center']}
          p={3}
          pb={0}>
          <p
            sm
            action
            map
            sx={{
              color: place === 0 ? 'accent' : '#787878',
              mr: 2,
              cursor: 'pointer'
            }}
            onClick={() => setPlace(0)}>
            STATEWIDE
          </p>
          <p
            sm
            action
            map
            sx={{
              color: place === 1 ? 'accent' : '#787878',
              mr: 2,
              cursor: 'pointer'
            }}
            onClick={() => setPlace(1)}>
            PORTLAND AREA
          </p>
          <p
            sm
            action
            map
            sx={{
              color: place === 6 ? 'accent' : '#787878',
              mr: 2,
              cursor: 'pointer'
            }}
            onClick={() => setPlace(6)}>
            CORVALIS AREA
          </p>
          <p
            sm
            action
            map
            sx={{
              color: place === 4 ? 'accent' : '#787878',
              mr: 2,
              cursor: 'pointer'
            }}
            onClick={() => setPlace(4)}>
            EUGENE AREA
          </p>
          <p
            sm
            action
            map
            sx={{
              color: place === 3 ? 'accent' : '#787878',
              mr: 2,
              cursor: 'pointer'
            }}
            onClick={() => setPlace(3)}>
            NORTHWEST OREGON
          </p>

          <p
            sm
            action
            map
            sx={{
              color: place === 5 ? 'accent' : '#787878',
              mr: 2,
              cursor: 'pointer'
            }}
            onClick={() => setPlace(5)}>
            CENTRAL OREGON
          </p>
          <p
            sm
            action
            map
            sx={{
              color: place === 2 ? 'accent' : '#787878',
              mr: 2,
              cursor: 'pointer'
            }}
            onClick={() => setPlace(2)}>
            SOUTHERN OREGON
          </p>
        </Flex>
        <Calendar place={place} />
      </Box>
      <Map place={place} />
    </Box>
  )
}
