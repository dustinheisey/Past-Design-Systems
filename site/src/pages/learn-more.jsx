/** @jsx jsx */
import { Box, Flex, Grid } from 'layout'
import { Link, Btn } from 'elements'
import { jsx } from 'theme'
import Layout from '../regions/layout'
import Map from '../assets/images/map.jpg'
import Postcards from '../assets/images/ClimateWeekPostcards.pdf'

export default () => (
  <Layout
    title='Learn More - Climate Strike Oregon'
    description='Climate Strike Oregon is fighting to address a large number of issues. Learn more about them here.'>
    <Box p={4} m={'auto'} bg={'uiDark'} color='uiLight'>
      <h1>Learn More</h1>
    </Box>
    <Box display='grid' gridTemplateColumns='auto'>
      <Box>
        <Box p={4} bg={'accent'}>
          <h2>Portland Strike</h2>
        </Box>

        <Box p={[3, 4, 4]} pb={0}>
          <img src={Map} alt='Festival Map' />
        </Box>
        <Box>
          <Box p={4} bg='accent' my={4} mb={3}>
            <h2>What are we fighting for?</h2>
            <h3>Youth demands to City of Portland</h3>
          </Box>
          <Grid
            gridTemplateColumns={['auto', 'repeat(3, 1fr)', 'repeat(3, 1fr)']}
            px={3}
            pt={1}
            pb={3}
            gap={3}>
            <Flex
              bg='uiDark'
              alignItems='flex-start'
              color='uiLight'
              p={[4, 2, 4]}
              pt={4}>
              <h3
                sx={{
                  textAlign: 'left',
                  fontSize: ['26px', '26px', '36px']
                }}>
                Establish a Climate Test.
              </h3>

              {/* <li>Declare a Climate Emergency! But, the right way</li>
                <li>
                  Actually include youth and front-line communities in creating
                  and consulting on the Climate Emergency Resolution, don’t
                  simply mention front-line communities without truly engaging
                  them in a JUST and EQUITABLE way.
                </li> */}
              <p>
                Every decision made by the city of Portland and its departments
                must take into account the health of the planet and choose what
                will most benefit the earth.
              </p>
              {/* <li>
                  DO YOUR JOB IN YOUR CITY- Work with the community, fund all
                  justice community members (Orgs, Youth, Frontline Communities)
                  at the table. Include ALL, from immigrant to houseless to
                  climate justice to international solidarity to land
                  sovereignty orgs. The Climate Emergency affects all. More
                  Democracy, not less. e. Fund and extend all engagement beyond
                  2020.
                </li> */}
            </Flex>

            <Flex
              bg='uiDark'
              alignItems='flex-start'
              color='uiLight'
              p={[4, 2, 4]}
              py={4}>
              <h3
                sx={{
                  textAlign: 'left',
                  fontSize: ['26px', '26px', '36px']
                }}>
                We need a bolder, stronger Climate Emergency
              </h3>

              <p>
                Formally declare a climate emergency with meaningful youth and
                frontline community involvement.
              </p>
              {/* <li>NO MORE DELAYS</li>
                <li>Provide an update on 100% Renewable Energy</li> */}
            </Flex>
            <Flex
              bg='uiDark'
              alignItems='flex-start'
              color='uiLight'
              p={[4, 2, 4]}
              py={4}>
              <h3 sx={{ fontSize: ['26px', '26px', '36px'] }}>
                Fund YouthPass
              </h3>
              <p>
                We demand the city to work in collaboration and engage youth to
                fight for fare affordability for youth under 18 years old on a
                non-school year basis and that it goes beyond free and reduced
                lunch.
              </p>
            </Flex>

            <Flex
              bg='uiDark'
              alignItems='flex-start'
              color='uiLight'
              p={[4, 2, 4]}
              py={4}>
              <h3 sx={{ fontSize: ['26px', '26px', '36px'] }}>Stop Zenith</h3>
              <p>
                Deny any and all permits for this disastrous tar sands oil
                terminal.
              </p>
            </Flex>
            <Flex
              bg='uiDark'
              alignItems='flex-start'
              color='uiLight'
              p={[4, 2, 4]}
              py={4}
              gridColumn={['inherit', 'span 2', 'span 2']}>
              <h3 sx={{ fontSize: ['26px', '26px', '36px'] }}>
                Unless these demands are met, Stay home Mayor Wheeler!
              </h3>
              <p>
                Don’t go to Copenhagen for the C40 Mayor Summit in October as a
                'climate champion mayor' if these truly bold actions aren't
                taken.
              </p>
            </Flex>
          </Grid>
          <Flex
            row
            justifyContent='space-between'
            color='uiLight'
            bg='uiDark'
            p={4}>
            <Flex alignLeft>
              <h2>Take Action!</h2>
              <h4 sx={{ ml: 1 }}>volunteer for the strike and donate!</h4>
            </Flex>
            <Btn to='/get-involved' accent px={3} py={2} mt={[2, 0, 0]}>
              GET INVOLVED
            </Btn>
          </Flex>
        </Box>

        <Box p={4} bg={'accent'}>
          <h2>Oregon Green New Deal</h2>
        </Box>

        <Box p={4}>
          <p sx={{ width: '100%', maxWidth: 10 }}>
            How can and should the transformative and exciting Green New Deal be
            implemented in Oregon? The Oregon Just Transition Alliance* has an
            exciting vision:
            <span sx={{ fontWeight: 'bold' }}>
              &nbsp;The Oregon Green New Deal!
            </span>
          </p>

          <p sx={{ maxWidth: 10 }}>
            “We’ve got 12 years to take meaningful climate actions to mitigate
            the effects of climate change and protect vulnerable communities. A
            just transition to a renewable future means:
          </p>

          <ul>
            <li>Phase Out Fossil Fuel Infrastructure</li>
            <li>Strong Regulation for Healthy, Breathable Air</li>
            <li>Clean, Community-Controlled, 100% Renewable Energy</li>
            <li>Regenerative, Sustainable Farms and Forests</li>
            <li>Transportation Justice</li>
            <li>Protect Communities Already Experiencing a Changing Climate</li>
            <li>Fund the Just Transition”</li>
          </ul>

          <p sx={{ maxWidth: 10 }}>
            Read more about each of the 7 pillars of this bold vision, and see
            who endorses it already by visiting:&nbsp;
            <Link a to='https://orjta.org/campaigns/ognd/' color='accent'>
              orjta.org/campaigns/ognd/
            </Link>
          </p>
          <p sx={{ color: '#787878', maxWidth: 10 }}>
            *The Oregon Just Transition Alliance is a movement of communities
            facing environmental racism, climate change, and economic
            exploitation – the frontlines of injustice and the frontlines of
            change. We bring together organizations committed to base-building
            in frontline communities. We gather to create ownership over our
            collective future and move Oregon toward an economy that is rooted
            in our shared values, the{' '}
            <Link
              a
              color='accent'
              to='http://www.orjta.org/about/principles-of-a-just-transition/'>
              principles of a Just Transition.
            </Link>
          </p>
        </Box>
      </Box>

      <Box>
        <Box p={4} bg={'accent'}>
          <h2>Stop Jordan Cove!</h2>
        </Box>

        <Box
          display='grid'
          gridTemplateColumns={['auto', 'auto', '.6fr .4fr']}
          gap={4}
          p={4}>
          <Box>
            <p sx={{ maxWidth: 10 }}>
              For 15 years, Oregonians have been fighting different forms of a
              proposal to build a massive fracked gas pipeline and export
              terminal in Southern Oregon.{' '}
            </p>

            <p sx={{ maxWidth: 10 }}>
              This 229 mile pipeline and fracked gas export project would
              trample the rights of landowners through use of eminent domain,
              disturb tribal territories and burial grounds, threaten 400
              waterways, put existing jobs in fishing, tourism, and other
              sectors at risk, drive up energy prices, and create a major new
              source of climate pollution.
            </p>

            <p sx={{ mb: 3, maxWidth: 10 }}>
              The campaign to stop the proposed Pacific Connector fracked gas
              Pipeline and Jordan Cove LNG export Terminal in southern Oregon is
              comprised of landowners, businesses, climate and conservation
              groups, native tribes, and concerned residents working together to
              protect our home from fossil fuel exports and create clean energy
              jobs instead.
            </p>
          </Box>
          <Box>
            <h3 sx={{ mb: 3, textTransform: 'uppercase' }}>
              Take Action Right Now
            </h3>
            <Flex alignLeft>
              <Btn
                to='https://actionnetwork.org/petitions/protect-the-oregon-coast-stop-jordan-cove?clear_id=true'
                mb={2}
                py={3}
                px={3}
                fontSize='125%'
                textAlign='center'
                textTransform='uppercase'
                a>
                Submit a comment to the State of Oregon!
              </Btn>
              <Link to='https://www.nolngexports.org/' mt={1} color='accent' a>
                Learn more from the statewide coalition working to stop this
                project.
              </Link>
              <Link a mt={1} color='accent' to={Postcards} download>
                Download Climate Week Postcards
              </Link>
            </Flex>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box p={4} bg={'accent'}>
          <h2>Stop Zenith!</h2>
        </Box>

        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: ['auto', 'auto', '.6fr .4fr'],
            gridGap: 4,
            p: [0, 4]
          }}>
          <Flex
            p={[3, 4, 4]}
            alignItems={['flex-start', 'flex-start', 'center']}
            bg='uiDark'
            color='uiLight'>
            <em sx={{ maxWidth: 10, textAlign: ['start', 'start', 'center'] }}>
              Zenith must be stopped. No tar sands here or anywhere.
            </em>

            <p sx={{ mt: 2, maxWidth: 10 }}>
              Get involved! Show up to cheer on local activists as they present
              thousands and thousands of Stop Zenith petition signatures to the
              Mayor and City Commissioners!
            </p>

            <h3
              sx={{
                mt: [3, 2, 2],
                mb: [2, 1, 1],
                fontSize: ['26px', '26px', 'inherit'],
                textAlign: ['start', 'start', 'center']
              }}>
              Stop Zenith Oil -- Petition Delivery to City Hall!
            </h3>
            <p>Wednesday, September 18th. 9:30 AM</p>
            <p>
              Portland City Hall.{' '}
              <Link color='accent' hoverAccent a to=''>
                (1221 SW 4th Ave)
              </Link>
            </p>
            <p sx={{ color: 'red' }}>Please wear RED.</p>
            <Link
              a
              color='accent'
              hoverAccent
              mb={2}
              to='https://www.facebook.com/events/494583901116510/?event_time_id=494583907783176'>
              Facebook event here.
            </Link>
            <p>
              Learn more and get involved:{' '}
              <Link
                a
                color='accent'
                hoverAccent
                to='https://stoptarsandspdx.weebly.com/'>
                https://stoptarsandspdx.weebly.com/
              </Link>
            </p>
          </Flex>
          <Box px={[4, 0, 0]}>
            <p sx={{ maxWidth: 10 }}>
              Tar sands crude oil is known as the most polluting form of energy
              on the entire planet. Right now, the Houston-based company Zenith
              Energy is expanding an oil terminal in Northwest Portland in order
              to increase the import and processing of Canadian tar sands crude
              oil. We’re seeing quadruple the amount of oil “bomb” trains
              traveling through the Portland-Metro region, delivering this tar
              sands crude oil and endangering our communities.
            </p>
            <p sx={{ maxWidth: 10 }}>
              The extraction of tar sands is exceptionally filthy process.
              Devastating an area in northern Alberta the size of the state of
              Florida, the Alberta tar sands extraction has been called the
              largest and most destructive industrial project in human history,
              producing a multitude of disastrous effects including the
              poisoning of the region's water, land and air.
            </p>
            <p sx={{ maxWidth: 10 }}>
              Transporting oil by rail amplifies the potential of calamitous
              explosions such as the one that occurred near Lac-Mégantic, Quebec
              in 2013, resulting in the loss of 47 lives. Closer to home in
              June, 2016 a train carrying Bakken Crude derailed and caught fire
              near Mosier, Oregon releasing toxic fumes, flames and smoke,
              threatening the community of Mosier and the precious Columbia
              River and Gorge.
            </p>
          </Box>
        </div>
      </Box>
    </Box>
  </Layout>
)
