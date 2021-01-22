/** @jsx jsx */
import { Box } from 'layout'

import { jsx } from 'theme'
import Org from './organization'

import Eugene from '../../assets/images/logos/eugene/350Eugene.jpg'
import OurChildrensTrust from '../../assets/images/logos/eugene/ourChildrensTrust.jpg'

import Corvallis from '../../assets/images/logos/corvallis/350Corvallis.png'
import sunriseCorvallis from '../../assets/images/logos/corvallis/sunriseCorvallis.jpg'

import PDX from '../../assets/images/logos/portland/350PDX.png'
import PYCC from '../../assets/images/logos/portland/PYCC.svg'
import ColumbiaRiverkeeper from '../../assets/images/logos/portland/columbiaRiverkeeper.jpg'
import CSE from '../../assets/images/logos/portland/CSE.jpg'
import DSA from '../../assets/images/logos/portland/DSA.png'
import JobsWithJustice from '../../assets/images/logos/portland/jobsWithJustice.jpeg'
import ExtinctionRebellion from '../../assets/images/logos/portland/extinctionRebellion.jpg'
import RisingTide from '../../assets/images/logos/portland/risingTide.png'
import ICHRPP from '../../assets/images/logos/portland/ICHRPP.jpg'
import OPAL from '../../assets/images/logos/portland/OPAL.png'
import PacificClimate from '../../assets/images/logos/portland/pacificClimate.jpg'
import PCEF from '../../assets/images/logos/portland/PCEF.png'
import SunrisePDX from '../../assets/images/logos/portland/sunrisePDX.png'
import RogueClimate from '../../assets/images/logos/southern/rogueClimate.png'
import GeosInstitute from '../../assets/images/logos/southern/geos-institute.jpg'
import PHCC from '../../assets/images/logos/portland/phcc.png'
import IgnitingChange from '../../assets/images/logos/portland/ignitingChange.jpg'

import Physicians from '../../assets/images/logos/statewide/physicians.jpg'
import Sierra from '../../assets/images/logos/statewide/sierra.png'

export default () => (
  <Box px={[3, 3, 4]}>
    <h2 sx={{ mt: 3 }}>Portland Organizations</h2>
    <Box
      gap={[3, 2, 3]}
      width={10}
      py={3}
      columnCount={[1, 3]}
      display='grid'
      gridTemplateColumns={['auto', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      alignItems='center'
      justifyItems='center'>
      <Org title='350PDX' link='http://350pdx.org/' src={PDX} />
      <Org
        title='Center for Sustainable Economy
'
        src={CSE}
        link='https://sustainable-economy.org/'
      />
      <Org
        title='Columbia Riverkeeper'
        link='https://www.columbiariverkeeper.org/'
        src={ColumbiaRiverkeeper}
      />
      <Org
        title='Democratic Socialists of America PDX'
        link='https://portlanddsa.org/'
        src={DSA}
      />
      <Org
        title='Extinction Rebellion PDX'
        link='https://www.xrpdx.org/'
        src={ExtinctionRebellion}
      />
      <Org
        title='International Coalition for Human Rights in the Philippines'
        link='https://ichrpus.org'
        src={ICHRPP}
      />
      <Org
        title='Jobs with Justice'
        link='https://www.jwj.org/'
        src={JobsWithJustice}
      />
      <Org
        title='OPAL Environmental Justice Oregon'
        link='http://www.opalpdx.org/'
        src={OPAL}
      />
      <Org
        title='Pacific Climate Warriors'
        link='https://350pacific.org/pacific-climate-warriors/'
        src={PacificClimate}
      />
      <Org
        title='Portland Clean Energy Fund'
        link='https://www.portlandcleanenergyfund.com/'
        src={PCEF}
      />
      <Org
        title='Portland Rising Tide'
        link='https://portlandrisingtide.org/'
        src={RisingTide}
      />
      <Org
        title='Portland Youth Climate Council'
        link='https://pdxclimatecouncil.wixsite.com/youth'
        src={PYCC}
      />
      <Org
        title='Portland Harbor Community Coalition'
        link='http://ourfutureriver.org/'
        src={PHCC}
      />
      <Org
        title='Sunrise Movement PDX'
        link='https://www.sunrisepdx.org/'
        src={SunrisePDX}
      />
      <Org
        title='Youth Igniting Change'
        link='https://youthignitingchange.com'
        src={IgnitingChange}
      />
    </Box>
    <h2 sx={{ mt: 3 }}>Corvallis Organizations</h2>
    <Box
      gap={3}
      width={10}
      py={3}
      columnCount={3}
      display='grid'
      gridTemplateColumns={['auto', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      alignItems='center'
      justifyItems='center'>
      <Org
        title='Sunrise Corvallis'
        link='https://www.facebook.com/sunrisecorvallis/'
        src={sunriseCorvallis}
      />
      <Org
        title='350 Corvallis'
        link='http://350corvallis.org/'
        src={Corvallis}
      />
    </Box>
    <h2 sx={{ mt: 3 }}>Eugene Organizations</h2>
    <Box
      gap={3}
      width={10}
      py={3}
      columnCount={3}
      display='grid'
      gridTemplateColumns={['auto', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      alignItems='center'
      justifyItems='center'>
      <Org
        title='350 Eugene'
        link='https://world.350.org/eugene/'
        src={Eugene}
      />
      <Org
        title="Our Children's Trust"
        link='https://www.ourchildrenstrust.org/'
        src={OurChildrensTrust}
      />
    </Box>
    <h2 sx={{ mt: 3 }}>Southern Oregon Organizations</h2>
    <Box
      gap={3}
      width={10}
      py={3}
      columnCount={3}
      display='grid'
      gridTemplateColumns={['auto', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      alignItems='center'
      justifyItems='center'>
      <Org
        title='Rogue Climate'
        link='https://www.rogueclimate.org/'
        src={RogueClimate}
      />
      <Org
        title='Geo Institute'
        link='https://www.geosinstitute.org'
        src={GeosInstitute}
      />
    </Box>
    <h2 sx={{ mt: 3 }}>Statewide Organizations</h2>
    <Box
      gap={3}
      width={10}
      py={3}
      columnCount={3}
      display='grid'
      gridTemplateColumns={['auto', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      alignItems='center'
      justifyItems='center'>
      <Org
        title='Oregon Sierra Club'
        link='https://www.sierraclub.org/oregon'
        src={Sierra}
      />
      <Org
        title='Oregon Physicians for Social Responsibility'
        link='https://www.oregonpsr.org/'
        src={Physicians}
      />
    </Box>
  </Box>
)
