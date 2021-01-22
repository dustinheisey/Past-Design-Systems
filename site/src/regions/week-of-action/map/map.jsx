/** @jsx jsx */
import { Component, jsx } from 'theme'
import { Box } from 'layout'
import { Link, Btn } from 'elements'
import Popup from 'reactjs-popup'
import GoogleMapReact from 'google-map-react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Marker = ({ title, date, time, location, url }) => (
  <Link a to={url}>
    <Popup
      trigger={
        <FaMapMarkerAlt
          sx={{
            color: '#E9A41E',
            width: '5vmin',
            height: 'auto',
            ':hover': { color: '1E272E' }
          }}
        />
      }
      on='hover'
      position='top center'>
      <Box p={2}>
        <h4 sx={{ mb: 1 }}>{title}</h4>
        {time && (
          <h5 sx={{ mb: 1 }}>
            {date} @ {time}
          </h5>
        )}
        {!time && <h5 sx={{ mb: 1 }}>{date}</h5>}
        <p sx={{ color: '#383838', mb: 2 }}>{location}</p>
        <Btn a to={url}>
          RSVP
        </Btn>
      </Box>
    </Popup>
  </Link>
)

class SimpleMap extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyD4AC3Vs9iwVaNSP7JidFvnZ-LwsN37JXk'
          }}
          defaultCenter={{
            lat: 43.598213,
            lng: -123.282771
          }}
          defaultZoom={6}>
          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='PDX Climate Strike'
              date='Friday, Sept. 20th'
              location='Portland City Hall'
              url='https://actionnetwork.org/events/pdx-climate-strike-4'
              lat={45.517994}
              lng={-122.678763}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Bridging the Divide'
              date='Sunday, Sept. 22nd'
              location='Hawthorne Bridge'
              url='https://www.facebook.com/events/505471230028851/?ti=icl'
              lat={45.513398}
              lng={-122.670612}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Vigil for the Climate'
              date='Friday, Sept. 20th'
              location='SW Barbur Bld & Bertha Across From Freddies'
              url='https://www.google.com/maps/dir//SW+Barbur+Blvd+%26+SW+Bertha+Blvd,+Portland,+OR+97219/@45.4708897,-122.6904905,17z/data=!4m17!1m7!3m6!1s0x54950b1b257dd991:0xb07f01bc025b5b1!2sSW+Barbur+Blvd+%26+SW+Bertha+Blvd,+Portland,+OR+97219!3b1!8m2!3d45.470886!4d-122.6883018!4m8!1m0!1m5!1m1!1s0x54950b1b257dd991:0xb07f01bc025b5b1!2m2!1d-122.6883018!2d45.470886!3e3'
              lat={45.471119}
              lng={-122.68813}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='ICHRPP: Community forum on environmental justice and just transition'
              date='Sunday, Sept. 22nd'
              time='3:00 pm - 5:00 pm'
              location='OMNI'
              url='https://www.google.com/maps/dir//Omni,+619+SE+6th+Ave,+Portland,+OR+97214/@45.5184983,-122.6687697,15z/data=!4m16!1m6!3m5!1s0x549509b268ad2f47:0xe3ba2419b11a4b26!2sOmni!8m2!3d45.5184761!4d-122.6599828!4m8!1m0!1m5!1m1!1s0x549509b268ad2f47:0xe3ba2419b11a4b26!2m2!1d-122.6599828!2d45.5184761!3e3'
              lat={45.527363}
              lng={-122.693638}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Caring for Children in the Midst of Global Crisis'
              date='Sunday, Sept. 22nd'
              time='2:00 pm - 5:00 pm'
              location='Taborspace'
              url='http://www.radiantbalance.com/caring-for-children-in-the-midst-of-global-crisis/'
              lat={45.518327}
              lng={-122.607486}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Support Testimony Against Zenith Oil and Fossil Fuels at Portland City Hall'
              date='Wednesday, Sept. 18th'
              time='9:30 am'
              location='Portland City Hall Council Chambers'
              url='https://www.facebook.com/events/494583901116510/'
              lat={45.51513}
              lng={-122.679032}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Lunchtime Fun @ Chase Bank'
              date='Wednesday, Sept. 25th'
              time='11:30 am'
              location='Sidewalk of SW 6th & Yamhill'
              url='http://350pdx.nationbuilder.com/lunchtime_fun_chase_bank'
              lat={45.518369}
              lng={-122.678971}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Chase Rush Hour Leafleting'
              date='Monday, Sept. 23rd'
              time='7:00 am'
              location='West End of the Hawthorne Bridge'
              url='http://350pdx.nationbuilder.com/chase_rush_hour_leafleting'
              lat={45.513388}
              lng={-122.670602}
            />
          )}
          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Salem Oregon Climate Strike'
              date='Friday, Sept. 20th'
              time='1:00 pm'
              location='Front Steps of Oregon State Capital'
              url='https://actionnetwork.org/events/salem-oregon-climate-strike-2?rel=nofollow&source=widget'
              lat={44.941102}
              lng={-123.030931}
            />
          )}
          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Hillsboro Climate Strike'
              date='Friday, Sept. 20th'
              time='8:00 am - 7:00 pm'
              location='Downtown Hillsboro'
              url='https://actionnetwork.org/events/washington-county-us-strike-2?rel=nofollow&source=widget'
              lat={45.522141}
              lng={-122.989093}
            />
          )}

          {(this.props.place === 0 || this.props.place === 2) && (
            <Marker
              title='Roseburg Climate Strike'
              date='Friday, Sept. 20th'
              time='12:00 pm - 1:00 pm'
              location='Fred Meyer on Garden Valley Blvd'
              url='https://www.google.com/maps/dir//Fred+Meyer,+929+NW+Garden+Valley+Blvd,+Roseburg,+OR+97471/@43.2279335,-123.3708795,17z/data=!4m16!1m6!3m5!1s0x54c422b7e9be2377:0x14f780b86e95ea41!2sFred+Meyer!8m2!3d43.2279296!4d-123.3686908!4m8!1m0!1m5!1m1!1s0x54c422b7e9be2377:0x14f780b86e95ea41!2m2!1d-123.3686908!2d43.2279296!3e3'
              lat={43.228172}
              lng={-123.368702}
            />
          )}
          {/* {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Forest Grove Climate Strike
            '
              date='Friday, Sept. 20th'
              time='12:15 pm'
              location='Pacific University Campus'
              url='https://actionnetwork.org/events/forest-grove-climate-strike?rel=nofollow&source=widget'
              lat={45.524644}
              lng={-123.110483}
            />
          )} */}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Beaverton Climate Strike'
              date='Friday, Sept. 20th'
              time='8:30 am'
              location='Beaverton City Hall'
              url='https://www.google.com/maps/dir//Mayor+City+of+Beaverton,+12725+SW+Millikan+Way,+Beaverton,+OR+97005/@45.4899094,-122.8089671,17.99z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54950c1eef9d33bd:0x2897b6ea76fa092c!2m2!1d-122.807874!2d45.4900564'
              lat={45.490067}
              lng={-122.80786}
            />
          )}

          {(this.props.place === 0 || this.props.place === 2) && (
            <Marker
              title='Ashland: Climate Walkout'
              date='Friday, Sept. 27th'
              time='10:30 am'
              location='Ashland Plaza'
              url='https://www.facebook.com/events/704851616642023/'
              lat={42.197254}
              lng={-122.715336}
            />
          )}

          {(this.props.place === 0 || this.props.place === 2) && (
            <Marker
              title='South Medford: Climate Walkout'
              date='Friday, Sept. 20th'
              time='10:30 am'
              location='Vogel Plaza'
              url='https://www.facebook.com/events/2968648910027221/'
              lat={42.326507}
              lng={-122.871947}
            />
          )}
          {(this.props.place === 0 || this.props.place === 2) && (
            <Marker
              title='Climate Week Fiesta'
              date='Friday, Sept. 20th'
              time='5:30 pm'
              location='The Commons Medford'
              url='https://www.facebook.com/events/692147861292270/'
              lat={42.328794}
              lng={-122.872958}
            />
          )}

          {(this.props.place === 0 || this.props.place === 3) && (
            <Marker
              title='Global Climate Strike Rally'
              date='Friday, Sept. 20th'
              time='12:00 pm - 1:00 pm'
              location='Big Orange Chair'
              url='https://www.google.com/maps/dir//US-101+%26+Broadway+St,+Seaside,+OR+97138/@45.9930934,-123.922809,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5494a1be553e3991:0x2ac7755d697ffa6f!2m2!1d-123.9206203!2d45.9930934'
              lat={45.993332}
              lng={-123.920642}
            />
          )}

          {(this.props.place === 0 || this.props.place === 3) && (
            <Marker
              title='FREE Screening of the film Paris to Pittsburgh'
              date='Sunday, Sept. 22nd'
              time='3:00 pm'
              location='Columbian Theater'
              url='https://www.google.com/maps/dir//1102+Marine+Dr,+Astoria,+OR+97103/@46.1898472,-123.8337144,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54937b4a2a10d163:0x6c4de78f07cd5bf7!2m2!1d-123.8315257!2d46.1898472'
              lat={46.190077}
              lng={-123.831536}
            />
          )}

          {(this.props.place === 0 || this.props.place === 3) && (
            <Marker
              title='Global Climate Strike Rally'
              date='Friday, Sept. 27th'
              time='12:00 pm - 1:00 pm'
              location='Marine Drive'
              url='https://www.google.com/maps/dir//Marine+Dr,+Astoria,+OR+97103/@46.1891733,-123.8274074,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54937b48c041b1f5:0x9c252fbf03e74c17!2m2!1d-123.8252187!2d46.1891733'
              lat={46.189359}
              lng={-123.825176}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='International Day of Peace and Climate Justice Action Forest Grove'
              date='Friday, Sept. 20th'
              time='11:30 am'
              location='Pacific University'
              url='https://actionnetwork.org/events/forest-grove-climate-strike-sept-20-2019?source=direct_link&'
              lat={45.52094}
              lng={-123.109662}
            />
          )}

          {(this.props.place === 0 || this.props.place === 2) && (
            <Marker
              title='Josephine County: Climate Strike'
              date='Friday, Sept. 20th'
              time='4:30 pm'
              location='Josephine County'
              url='https://www.facebook.com/events/343103773305276/'
              lat={42.443094}
              lng={-123.325548}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Vigil at Zenith'
              date='Tuesday, Sept. 24th - Thursday, Sept. 26th'
              time='7:00 am (day 1) - 7:00 pm (day 3)'
              location='Zenith Energy Facility'
              url='https://350pdx.org/event/vigil-at-zenith/'
              lat={45.56086}
              lng={-122.735331}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Big Timber and the Climate Emergency'
              date='Thursday, Sept. 26th'
              time='7:00 pm'
              location='Patagonia Portland'
              url='https://actionnetwork.org/events/big-timber-and-the-climate-emergency'
              lat={45.522951}
              lng={-122.682493}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Escalating Resistance: Mass Rebellion Training!'
              date='Tuesday, Sept. 24th'
              time='6:30 pm'
              location='The Old Church'
              url='https://www.eventbrite.com/e/escalating-resistance-mass-rebellion-training-tickets-71568351867'
              lat={45.515293}
              lng={-122.685597}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title="L'eau Est La Vie West Coast Tour Stop"
              date='Friday, Sept. 27th'
              time='7:00 pm'
              location='PSU Native American Student & Community Center'
              url='https://www.facebook.com/events/1435406046621633/'
              lat={45.509476}
              lng={-122.68557}
            />
          )}

          {(this.props.place === 0 || this.props.place === 2) && (
            <Marker
              title='Phoenix: Climate Walkout'
              date='Friday, Sept. 20th'
              time='10:30 am'
              location='Phoenix City Hall'
              url='https://www.facebook.com/events/417176025572557/'
              lat={42.273927}
              lng={-122.817399}
            />
          )}

          {(this.props.place === 0 || this.props.place === 2) && (
            <Marker
              title="L'eau Est La Vie West Coast Tour"
              date='Thursday, Sept. 26th'
              time='6:00 pm'
              location='84 4th Street, Ashland OR'
              url='https://www.facebook.com/events/677414612756994/'
              lat={42.195696}
              lng={-122.707992}
            />
          )}

          {(this.props.place === 0 || this.props.place === 2) && (
            <Marker
              title='Unite For Climate Action'
              date='Friday, Sept. 20th'
              time='12:00 pm'
              location='Butler Bandshell, Lithia Park'
              url='https://socan.eco/event/global-climate-strike/'
              lat={42.193161}
              lng={-122.717925}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Chase Bank Action'
              date='Tuesday, Sept. 24th'
              time='4:00 pm'
              location='Wallace Rd. NW & Glen Creek Rd. NW'
              url='https://actionnetwork.org/events/climate-strike-chase-bank-action-sept-24'
              lat={44.950388}
              lng={-123.051638}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Memorial for Endangered Salmon'
              date='Friday, Sept. 27th'
              time='5:00 pm'
              location='Wallace Marine Park'
              url='https://actionnetwork.org/events/climate-strike-memorial-for-endangered-salem-sept-27'
              lat={44.95382}
              lng={-123.044327}
            />
          )}

          {(this.props.place === 0 || this.props.place === 4) && (
            <Marker
              title='Global Climate Strike Week Eugene - Kick-Off Rally, Flipped Council Meeting, and Green New Deal Discussion'
              date='Friday, Sept. 20th'
              time='12:00 pm'
              location='Wayne Morse Free Speech Plaza'
              url='https://world.350.org/eugene/global-climate-strike-team/'
              lat={44.051211}
              lng={-123.091059}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Rex Putnam Climate Strike'
              date='Friday, Sept. 20th'
              time='8:45 am'
              location='Rex Putnam High School'
              url='https://www.google.com/maps/dir//Putnam+High+School,+4950+SE+Roethe+Rd,+Milwaukie,+OR+97267/@45.4004068,-122.6124955,17z/data=!4m16!1m6!3m5!1s0x5495743920a2093f:0x806145dc39eaaf7a!2sPutnam+High+School!8m2!3d45.4004068!4d-122.6103068!4m8!1m0!1m5!1m1!1s0x5495743920a2093f:0x806145dc39eaaf7a!2m2!1d-122.6103068!2d45.4004068!3e3'
              lat={45.400603}
              lng={-122.610275}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title="It's About Time: Act Now on Climate Crisis! Rally and street theatre."
              date='Friday, Sept. 27th'
              time='12:00 pm'
              location='Portland City Hall'
              url='https://www.facebook.com/events/640818946446618/'
              lat={45.514991}
              lng={-122.67913}
            />
          )}

          {(this.props.place === 0 || this.props.place === 5) && (
            <Marker
              title='Central Oregon Strike for Climate'
              date='Friday, Sept. 20th'
              time='4:00 pm'
              location='1033 NW Wall Street, Bend OR 97701'
              url='https://www.facebook.com/ORClimateStrike/'
              lat={44.060436}
              lng={-121.313043}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Boeing Protest Rally - 1'
              date='Tuesday, Sept. 24th'
              time='1:00 - 3:00 pm'
              location='Gresham City Hall'
              url='https://www.google.com/maps/dir//Gresham+City+Hall,+1333+NW+Eastman+Pkwy,+Gresham,+OR+97030/@45.5065834,-122.4380012,17z/data=!4m16!1m6!3m5!1s0x5495988906f3a2e3:0x66eabafd04751365!2sGresham+City+Hall!8m2!3d45.5065834!4d-122.4358125!4m8!1m0!1m5!1m1!1s0x5495988906f3a2e3:0x66eabafd04751365!2m2!1d-122.4358125!2d45.5065834!3e3'
              lat={45.506779}
              lng={-122.43577}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='North Pole Season 2 Premiere'
              date='Saturday, Sept. 21st'
              time='4:00 pm'
              location='8155 NE Oregon St. Portland Oregon 97213'
              url='http://www.opalpdx.org/2019/08/opal-will-screen-the-north-pole-seasons-1-and-2/'
              lat={45.528728}
              lng={-122.579558}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='350PDX Volunteer Orientation'
              date='Tuesday, Sept. 24th'
              time='6:00 pm'
              location='Process Work Institute'
              url='http://350pdx.nationbuilder.com/volunteer_orientation'
              lat={45.527382}
              lng={-122.693574}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='350PDX Volunteer Orientation'
              date='Thursday, Sept. 26th'
              time='6:00 pm'
              location='Process Work Institute'
              url='http://350pdx.nationbuilder.com/350pdx_volunteer_orientation_sept26'
              lat={45.527382}
              lng={-122.693574}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Rally for Peace through Self-Determination and Climate Justice'
              date='Saturday, Sept. 21st'
              time='4:00 pm'
              location='Skidmore Fountain'
              url='https://www.facebook.com/events/472161720300452/?ti=cl'
              lat={45.523116}
              lng={-122.671107}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Salmon Action Night'
              date='Thursday, Sept. 26th'
              time='6:30 pm'
              location='1821 SE Ankeny St, Portland, OR 97214'
              url='https://addup.sierraclub.org/events/action-night-columbia-and-snake-river-salmon'
              lat={45.522641}
              lng={-122.646854}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Climate Strike for Immigrant Justice'
              date='Sunday, Sept. 22nd'
              time='12:00 pm'
              location='Tom McCall Waterfront Park'
              url='https://www.facebook.com/events/505471230028851/'
              lat={45.522896}
              lng={-122.670029}
            />
          )}

          {(this.props.place === 0 || this.props.place === 4) && (
            <Marker
              title='Mass Die-In for Climate at Chase Bank'
              date='Friday, Sept. 27th'
              time='12:00pm - 3:00 pm'
              location='Starting at 405 E 8th Street, Eugene, Oregon'
              url='https://www.facebook.com/events/440675800128394/?active_tab=about'
              lat={44.051943}
              lng={-123.085871}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Mark Gamba for Congress'
              date='Friday, Sept. 20th'
              time='7:00 pm'
              location='Jean’s Farm'
              url="https://www.google.com/maps/dir//Jean's+Farm+--+Learning+Gardens,+3707+SE+Johnson+Creek,+SE+Johnson+Creek+Blvd,+Portland,+OR+97222/@45.4613769,-122.6254691,18z/data=!4m16!1m6!3m5!1s0x54950ab519ca210f:0x2cd33c64a7ea2f60!2sJean's+Farm+--+Learning+Gardens!8m2!3d45.4613732!4d-122.6243748!4m8!1m0!1m5!1m1!1s0x54950ab519ca210f:0x2cd33c64a7ea2f60!2m2!1d-122.6243748!2d45.4613732!3e3"
              lat={45.461492}
              lng={-122.624375}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Boeing Protest Rally - 2'
              date='Friday, Sept. 27th'
              time='3:30 pm - 5:00 pm'
              location='19000 NE Sandy Blvd, Gresham, OR'
              url='https://www.google.com/maps/dir//19000+NE+Sandy+Blvd,+Portland,+OR+97230/@45.5437917,-122.4690289,17z/data=!4m17!1m7!3m6!1s0x5495a2fa4541ca1b:0xe246daa142e82c3e!2s19000+NE+Sandy+Blvd,+Portland,+OR+97230!3b1!8m2!3d45.543788!4d-122.4668402!4m8!1m0!1m5!1m1!1s0x5495a2fa4541ca1b:0xe246daa142e82c3e!2m2!1d-122.4668402!2d45.543788!3e3'
              lat={45.543991}
              lng={-122.466829}
            />
          )}

          {(this.props.place === 0 || this.props.place === 6) && (
            <Marker
              title='Climate March and Rally'
              date='Friday, Sept. 27th'
              time='3:00 pm'
              location='Corvalis'
              url='https://corvallisclimateaction.weebly.com/march--rally.html'
              lat={44.565704}
              lng={-123.257531}
            />
          )}

          {(this.props.place === 0 || this.props.place === 6) && (
            <Marker
              title='Climate Justice Community Discussion'
              date='Saturday, Sept. 21st'
              time='5:30 pm'
              location='Corvalis'
              url='https://www.facebook.com/events/418370012365305/'
              lat={44.564665}
              lng={-123.261561}
            />
          )}

          {(this.props.place === 0 || this.props.place === 6) && (
            <Marker
              title='Youth-led Climate Strike'
              date='Friday, Sept. 20th'
              time='12:15 pm'
              location='Corvalis'
              url='https://www.facebook.com/events/936014366734137/'
              lat={44.564665}
              lng={-123.261561}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='March at State Capitol'
              date='State Capitol'
              time='1:00 pm'
              location='19000 NE Sandy Blvd, Gresham, OR'
              url='https://www.facebook.com/events/349094052661137/?ti=cl'
              lat={44.93864}
              lng={-123.030478}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Portland Permaculture Jamboree'
              date='Saturday, Sept. 21st'
              time='11:00 am'
              location='Zenger Farm'
              url='https://www.facebook.com/events/zenger-farm/portland-permaculture-jamboree/2169783006644997/'
              lat={45.477014}
              lng={-122.542327}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Portland Clean Energy Fund Grant Committee Appointments!'
              date='Wednesday, Sept. 25th'
              time='3:30 pm'
              location='Portland City Hall'
              url='http://350pdx.nationbuilder.com/portland_clean_energy_fund_grant_committee_appointments'
              lat={45.514991}
              lng={-122.67913}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='Matagi Malohi : PCW Talanoa'
              date='Wednesday, Sept. 25th'
              time='6:00 pm - 8:00 pm'
              location='8188 SE Division St, Portland, OR 97206-1068'
              url='https://www.facebook.com/events/2523493027937181/'
              lat={45.504862}
              lng={-122.578742}
            />
          )}

          {(this.props.place === 0 || this.props.place === 2) && (
            <Marker
              title='Climate Strike Klamath '
              date='Friday, Sept. 20th'
              time='11:30 am'
              location='903 Main Street, Klamath Falls, OR 97601'
              url='https://www.google.com/maps/dir//903+Main+St,+Klamath+Falls,+OR+97601/@42.2270242,-121.7825074,17z/data=!4m17!1m7!3m6!1s0x54c8d4efecd8b8b5:0xdb30e5f503476e29!2s903+Main+St,+Klamath+Falls,+OR+97601!3b1!8m2!3d42.2270202!4d-121.7803187!4m8!1m0!1m5!1m1!1s0x54c8d4efecd8b8b5:0xdb30e5f503476e29!2m2!1d-121.7803187!2d42.2270202!3e3'
              lat={42.227187}
              lng={-121.780329}
            />
          )}

          {(this.props.place === 0 || this.props.place === 5) && (
            <Marker
              title='Redmond Climate Strike'
              date='Friday, Sept. 20th'
              time='3:00 pm'
              location='Flag Monument, Highway 97'
              url='https://www.google.com/maps/dir//Redmond,+OR+97756/@44.2728062,-123.4231265,7z/data=!4m17!1m7!3m6!1s0x54b8d4d44e8c51bb:0x9438d260c06b7918!2sRedmond,+OR+97756!3b1!8m2!3d44.2726203!4d-121.1739212!4m8!1m0!1m5!1m1!1s0x54b8d4d44e8c51bb:0x9438d260c06b7918!2m2!1d-121.1739212!2d44.2726203!3e3'
              lat={44.267891}
              lng={-121.178092}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='International Day of Peace'
              date='Saturday, Sept. 21st'
              time='2:00 pm'
              location='Hosteling International'
              url='https://www.google.com/maps/dir//HI+Portland+Hawthorne+Hostel,+3031+SE+Hawthorne+Blvd,+Portland,+OR+97214/@45.5122885,-122.636248,17z/data=!4m19!1m9!3m8!1s0x5495a090565a9f5d:0xf23ee5f8a76a24fc!2sHI+Portland+Hawthorne+Hostel!5m2!4m1!1i2!8m2!3d45.5122848!4d-122.6340593!4m8!1m0!1m5!1m1!1s0x5495a090565a9f5d:0xf23ee5f8a76a24fc!2m2!1d-122.6340593!2d45.5122848!3e3'
              lat={45.51248}
              lng={-122.634081}
            />
          )}

          {(this.props.place === 0 || this.props.place === 6) && (
            <Marker
              title='Energy Retrofit Your Home for Climate'
              date='Saturday, Sept. 21st'
              time='3:00 pm'
              location='Corvallis OR- UU Church'
              url='https://www.google.com/maps/dir//Unitarian+Universalist+Fellowship+of+Corvallis,+2945+NW+Circle+Blvd,+Corvallis,+OR+97330/@44.5867031,-123.2871411,17z/data=!4m16!1m6!3m5!1s0x54c03f65add264a1:0x5195314e9057848d!2sUnitarian+Universalist+Fellowship+of+Corvallis!8m2!3d44.5866993!4d-123.2849524!4m8!1m0!1m5!1m1!1s0x54c03f65add264a1:0x5195314e9057848d!2m2!1d-123.2849524!2d44.5866993!3e3'
              lat={44.586883}
              lng={-123.284942}
            />
          )}

          {(this.props.place === 0 || this.props.place === 6) && (
            <Marker
              title='Climate Science Poster Making Session'
              date='Thursday, Sept. 26th'
              time='7:00 pm'
              location='Autzen Room Valley Library'
              url='https://www.google.com/maps/dir//The+Valley+Library,+201+SW+Waldo+Pl,+Corvallis,+OR+97331/@44.5650778,-123.2782296,17z/data=!4m16!1m6!3m5!1s0x54c040bebec810b9:0xc5afd24fd4c0d3bb!2sThe+Valley+Library!8m2!3d44.565074!4d-123.2760409!4m8!1m0!1m5!1m1!1s0x54c040bebec810b9:0xc5afd24fd4c0d3bb!2m2!1d-123.2760409!2d44.565074!3e3'
              lat={44.565273}
              lng={-123.276052}
            />
          )}

          {(this.props.place === 0 || this.props.place === 6) && (
            <Marker
              title='Current and Future Impacts of Climate Change'
              date='Thursday, Sept. 26th'
              time='6:00 pm'
              location='Autzen Room Valley Library'
              url='https://www.google.com/maps/dir//The+Valley+Library,+201+SW+Waldo+Pl,+Corvallis,+OR+97331/@44.5650778,-123.2782296,17z/data=!4m16!1m6!3m5!1s0x54c040bebec810b9:0xc5afd24fd4c0d3bb!2sThe+Valley+Library!8m2!3d44.565074!4d-123.2760409!4m8!1m0!1m5!1m1!1s0x54c040bebec810b9:0xc5afd24fd4c0d3bb!2m2!1d-123.2760409!2d44.565074!3e3'
              lat={44.565273}
              lng={-123.276052}
            />
          )}

          {(this.props.place === 0 || this.props.place === 6) && (
            <Marker
              title='How Federal Carbon Dividends Can Help Solve the Climate Crisis: Presentation and action'
              date='Tuesday, Sept. 24th'
              time='6:30 - 7:30 pm'
              location='Corvallis-Benton County Public Library Main Meeting Room'
              url='https://www.google.com/maps/dir//Corvallis-Benton+County+Public+Library,+645+NW+Monroe+Ave,+Corvallis,+OR+97330/@44.5656438,-123.2665537,17z/data=!4m16!1m6!3m5!1s0x54c04094d77477a7:0x1617c593fca16a5f!2sCorvallis-Benton+County+Public+Library!8m2!3d44.56564!4d-123.264365!4m8!1m0!1m5!1m1!1s0x54c04094d77477a7:0x1617c593fca16a5f!2m2!1d-123.264365!2d44.56564!3e3'
              lat={44.565778}
              lng={-123.264333}
            />
          )}

          {(this.props.place === 0 || this.props.place === 6) && (
            <Marker
              title='Green New Deal-Panel Discussion: What it is and why we need it'
              date='Monday, Sept. 23rd'
              time='7:00 pm'
              location='Corvallis High School Theater'
              url='https://www.google.com/maps/dir//Corvallis+School+District+Theaters,+1400+NW+Buchanan+Ave,+Corvallis,+OR+97330/@44.5758288,-123.271337,17z/data=!4m16!1m6!3m5!1s0x54c0409a57ef9109:0x5397394e5ebb3b6!2sCorvallis+School+District+Theaters!8m2!3d44.575825!4d-123.269143!4m8!1m0!1m5!1m1!1s0x54c0409a57ef9109:0x5397394e5ebb3b6!2m2!1d-123.269143!2d44.575825!3e3'
              lat={44.576031}
              lng={-123.269143}
            />
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Marker
              title='YOUTH: Clean Energy Jobs Bill 101'
              date='Thursday, Sept. 26th'
              time='4:00 pm'
              location='Oregon Sierra Club'
              url='http://bit.ly/cej4youth101'
              lat={45.522653}
              lng={-122.646916}
            />
          )}

          {(this.props.place === 0 || this.props.place === 6) && (
            <Marker
              title='Climate Action Film Fest'
              date='Friday, Sept. 27th'
              time='4:00 pm'
              location='Corvallis'
              url='https://corvallisclimateaction.weebly.com/week-of-action.html'
              lat={44.564178}
              lng={-123.26551}
            />
          )}

          {(this.props.place === 0 || this.props.place === 6) && (
            <Marker
              title='Divest from Chase Bank Demonstration'
              date='Thursday, Sept. 26th'
              time='4:00 pm'
              location='Corvallis'
              url='https://corvallisclimateaction.weebly.com/week-of-action.html'
              lat={44.564178}
              lng={-123.26551}
            />
          )}

          {(this.props.place === 0 || this.props.place === 6) && (
            <Marker
              title='Climate Action Film Fest'
              date='Wednesday, Sept. 25th'
              time='6:30 pm'
              location='Corvallis'
              url='https://corvallisclimateaction.weebly.com/week-of-action.html'
              lat={44.564178}
              lng={-123.26551}
            />
          )}

          {(this.props.place === 0 || this.props.place === 6) && (
            <Marker
              title='Divest from Chase Bank Demonstration'
              date='Tuesday, Sept. 24th'
              time='6:30 pm'
              location='Corvallis'
              url='https://corvallisclimateaction.weebly.com/week-of-action.html'
              lat={44.564178}
              lng={-123.26551}
            />
          )}

          {(this.props.place === 0 || this.props.place === 6) && (
            <Marker
              title='Climate Action Film Fest'
              date='Tuesday, Sept. 24th'
              time='6:30 pm'
              location='Corvallis'
              url='https://corvallisclimateaction.weebly.com/week-of-action.html'
              lat={44.564178}
              lng={-123.26551}
            />
          )}
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap
