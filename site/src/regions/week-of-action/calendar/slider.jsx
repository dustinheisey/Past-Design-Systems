/** @jsx jsx */
/* eslint-disable no-unused-vars */
import { React, Component, jsx } from 'theme'
import { Flex } from 'layout'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Day from './day'
import Action from './action'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      accessibility: true,
      autoplay: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      autoplaySpeed: 15000,
      draggable: true,
      swipe: true,
      initialSlide: 1
    }
    return (
      <Flex
        alignItems={['flex-start', 'center', 'center']}
        p={['6vh', 3, 4]}
        pt={3}
        bg='uiDark'
        color='uiLight'
        textAlign='center'>
        <h2 sx={{ textAlign: ['start', 'center', 'center'] }}>
          week of action
        </h2>
        <p sx={{ textAlign: ['start', 'center', 'center'] }}>
          The week kicks off with the massive Sept 20th Global Climate Strike,
          followed by a week of actions, trainings, events, orientations, art
          builds, and more.
        </p>
        <Slider
          {...settings}
          sx={{
            width: 10,
            '.slick-dots li button::before': {
              fontSize: '8px',
              color: 'white'
            },
            '.slick-dots li button': {
              padding: '0'
            },
            '.slick-dots li': {
              margin: '0',
              mb: [3, 0, 0]
            },
            '.slick-arrow::before': {
              fontSize: ['20px', '20px', '30px']
            },
            '.slick-prev::before': {
              fontSize: ['20px', '20px', '30px']
            },
            '.slick-next::before': {
              fontSize: ['20px', '20px', '30px']
            }
          }}>
          {(this.props.place === 0 || this.props.place === 1) && (
            <Day day='Wednesday' date='Sept. 18th'>
              <Action
                date='Wednesday, Sept. 18th'
                time='9:15 am - 10:00 am'
                city='Portland'
                title='Support Testimony Against Zenith Oil and Fossil Fuels'
                location='Portland City Hall Council Chambers (Portland City Hall, 1221 SW 4th Ave #110, Portland, OR 97204)'
                locationUrl='https://www.google.com/maps/dir//Portland+City+Hall,+1221+SW+4th+Ave+%23110,+Portland,+OR+97204/@45.5146657,-122.6785488,18z/data=!4m16!1m6!3m5!1s0x54950a103dbd47c1:0x54c5860248677f4b!2sPortland+City+Hall!8m2!3d45.5150101!4d-122.6790919!4m8!1m0!1m5!1m1!1s0x54950a103dbd47c1:0x54c5860248677f4b!2m2!1d-122.6790919!2d45.5150101!3e3'
                description="Join us in anticipation of the Climate Strike for a morning at City Hall to support the coalition opposing the Zenith oil train terminal and fossil fuels in Oregon!  We'll hear from organizers of 350PDX, Center for Sustainable Economy, and Climate JobsPDX. Then, the StopZenith Collaborative members will deliver to City Council thousands of petitions signatures they've collected against the Zenith's tar sands facility. 
                  Come dressed in red and ready to pack the hall!"
                primary='https://www.facebook.com/events/494583901116510/'
              />
            </Day>
          )}

          <Day day='Friday' date='Sept. 20th'>
            {(this.props.place === 0 || this.props.place === 1) && (
              <>
                <Action
                  date='Friday, Sept. 20th'
                  title='Climate Strike'
                  city='Portland'
                  time='10:30 am - 5:00 pm'
                  location='Portland City Hall (1221 SW 4th Ave #110, Portland)'
                  locationUrl='https://www.google.com/maps/dir//Portland+City+Hall,+1221+SW+4th+Ave+%23110,+Portland,+OR+97204/@45.5148105,-122.6812974,17z/data=!4m17!1m7!3m6!1s0x5495a75d14649dbd:0x2f48a123e32b953d!2sPortland+City+Hall,+1221+SW+4th+Ave+%23110,+Portland,+OR+97204!3b1!8m2!3d45.5148105!4d-122.6791087!4m8!1m0!1m5!1m1!1s0x5495a75d14649dbd:0x2f48a123e32b953d!2m2!1d-122.6791087!2d45.5148105!3e3'
                  description='Youth and adults will join forces and strike for climate justice! Rally at PDX City Hall -> March across Hawthorne Bridge -> Climate Festival outside OMSI. This is your chance to join a global movement and put a stop to business as usual.'
                  primary='https://actionnetwork.org/events/pdx-climate-strike-4'
                  secondary='/get-involved'
                  secondaryTxt='GET INVOLVED'
                  secondaryLink
                />

                <Action
                  date='Friday, Sept. 20th'
                  time='8:00 am - 7:00 pm'
                  city='Hillsboro'
                  title='Climate Strike'
                  location='Downtown Hillsboro (150 E Main Street, Hillsboro, OR 97123)'
                  locationUrl='https://www.google.com/maps/dir//150+E+Main+St,+Hillsboro,+OR+97123/@45.5220316,-122.9912605,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54951abca60db59d:0x3ab28378f5da384c!2m2!1d-122.9890718!2d45.5220316'
                  primary='https://actionnetwork.org/events/washington-county-us-strike-2?rel=nofollow&source=widget'
                />

                <Action
                  date='Friday, Sept. 20th'
                  time='1:00 pm'
                  city='Salem'
                  title='Climate Strike'
                  location='Front Steps of Oregon State Capital (Court St NE, Salem, OR 97301)'
                  locationUrl='https://www.google.com/maps/dir//900+Court+St+NE,+Salem,+OR+97301/@44.9385713,-123.1009735,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54bfff139700711d:0xd9c3f97599824204!2m2!1d-123.0309337!2d44.9385927'
                  primary='https://actionnetwork.org/events/salem-oregon-climate-strike-2?rel=nofollow&source=widget'
                />

                <Action
                  date='Friday, Sept. 20th'
                  time='8:00 am - 9:00 am'
                  city='Portland'
                  title='Vigil for the Climate'
                  location='Across From Freddies (SW Barbur Bld & Bertha)'
                  locationUrl='https://www.google.com/maps/dir//SW+Barbur+Blvd+%26+SW+Bertha+Blvd,+Portland,+OR+97219/@45.4708897,-122.6904905,17z/data=!4m17!1m7!3m6!1s0x54950b1b257dd991:0xb07f01bc025b5b1!2sSW+Barbur+Blvd+%26+SW+Bertha+Blvd,+Portland,+OR+97219!3b1!8m2!3d45.470886!4d-122.6883018!4m8!1m0!1m5!1m1!1s0x54950b1b257dd991:0xb07f01bc025b5b1!2m2!1d-122.6883018!2d45.470886!3e3'
                  description='Vigil to heal the Earth. Join us from 8-9 a.m. and then head down to the Rally in front of City Hall!'
                />

                <Action
                  date='Friday, Sept. 20th'
                  time='8:30 am'
                  city='Beaverton'
                  title='Climate Strike'
                  location='Beaverton City Hall (12725 SW Millikan Way, Beaverton, OR 97005)'
                  locationUrl='https://www.google.com/maps/dir//Mayor+City+of+Beaverton,+12725+SW+Millikan+Way,+Beaverton,+OR+97005/@45.4899094,-122.8089671,17.99z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54950c1eef9d33bd:0x2897b6ea76fa092c!2m2!1d-122.807874!2d45.4900564'
                  description='We will be striking in front of Beaverton City Hall to show our leaders that people care about the dangers of climate change not only in Portland, but in the surrounding cities as well. We want to let Beaverton City Officials know that climate change is a serious threat that needs to be addressed immediately with swift and sweeping action. We will strike in front of City Hall starting from about 8:30AM until around 10AM. After 10AM, we will be commuting downtown to join the Portland strike.'
                />

                <Action
                  date='Friday, Sept. 20th'
                  time='11:30 am - 3:00 pm'
                  city='Forest Grove'
                  title='International Day of Peace and Climate Justice Action'
                  location='Pacific University: South lawn of library building (Pacific University, 2043 College Way, Forest Grove, OR 97116)'
                  locationUrl='https://www.google.com/maps/dir//Pacific+University,+2043+College+Way,+Forest+Grove,+OR+97116/@45.5209065,-123.1118295,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5495197c4b19206b:0xeb1ec3a9ce4b0da4!2m2!1d-123.1096408!2d45.5209028'
                  primary='https://actionnetwork.org/events/forest-grove-climate-strike-sept-20-2019?source=direct_link&'
                  description='Forest Grove is going to host a Climate Strike event on September 20 in support of all of the international youth climate activists striking on "Fridays for the Future." We are organizing with 350.org Washington County to Strike for Climate Action, in partnership with youth activists worldwide. We will join together community activists and students from Pacific University in a multi-stage action on campus and in downtown Forest Grove.

                  The climate crisis is all around us: intensifying storms, hurricanes, heatwaves and wildfires, slow-burning disasters like drought and famine, and so much more. And the costs are paid for in the lives and livelihoods of those least responsible for causing the problem. September 20, 2019, the two year anniversary of Hurricane Maria, kicks-off a week of action like never before with people everywhere coming together to demand trans-formative action at a scale consistent with the climate crisis.

                  11:30am – Noon - Pacific International Day of Peace Event
                  
                  Peace pledge banner signing.  The FG Community is invited to participate.
                  
                  Noonish - 1 - Pacific Students and FG Community Joint Climate/Climate Justice event
                  
                  Speakers will include Chuck Currie, Narce Rodriguez and Metro Councillor Juan Carlos Gonzales. Students and community members are invited to offer remarks and personal stories until about 1pm-ish, possibilities for music and drama to be incorporated are still being jointly explored
                  
                  1pm-ish - Begin joint students and community members march around Forest Grove and all participants may stay with that activity in community as long
                  
                  AM and PM drive time – Community invited to show up with signs if/as they wish'
                />

                <Action
                  date='Friday, Sept. 20th'
                  time='8:45 am'
                  city='Milwaukie'
                  title='Rex Putnam Climate Strike'
                  location='Rex Putnam High School (4950 SE Roethe Rd, Milwaukie, OR 97267)'
                  locationUrl='https://www.google.com/maps/dir//4950+SE+Roethe+Rd,+Milwaukie,+OR+97267/@45.4004105,-122.6124955,17z/data=!4m17!1m7!3m6!1s0x549574392d99e61f:0x83d7687184958078!2s4950+SE+Roethe+Rd,+Milwaukie,+OR+97267!3b1!8m2!3d45.4004068!4d-122.6103068!4m8!1m0!1m5!1m1!1s0x549574392d99e61f:0x83d7687184958078!2m2!1d-122.6103068!2d45.4004068!3e3'
                  description="We will walk out of our classrooms on September 20th at 8:45 am to demand action on the climate! If you are interested in going into portland to join the big event, you must get an excused absence from your parent, bring Transit fare ($2.50 for full day, 1:25 for 2.5 hours) and a Bike (you can ride the bus if you don't have/don't know how to ride a bike)."
                />

                <Action
                  date='Friday, Sept. 20th'
                  time='7:00 pm'
                  city='Portland'
                  title='Mark Gamba for Congress'
                  location='Jean’s Farm (3707 SE Johnson Creek Blvd. Portland, 97222)'
                  locationUrl="https://www.google.com/maps/dir//Jean's+Farm+--+Learning+Gardens,+3707+SE+Johnson+Creek,+SE+Johnson+Creek+Blvd,+Portland,+OR+97222/@45.4613769,-122.6254691,18z/data=!4m16!1m6!3m5!1s0x54950ab519ca210f:0x2cd33c64a7ea2f60!2sJean's+Farm+--+Learning+Gardens!8m2!3d45.4613732!4d-122.6243748!4m8!1m0!1m5!1m1!1s0x54950ab519ca210f:0x2cd33c64a7ea2f60!2m2!1d-122.6243748!2d45.4613732!3e3"
                  description='This gathering at an urban sustainability educational farm in SE Portland features progressive Milwaukie Mayor Mark Gamba who needs YOUR support for his Congressional campaign to unseat democrat Kurt Schrader in Oregon’s 5th Congressional district. Mayor Gamba championed the creation and design of Milwaukie’s climate action plan, now one of the most aggressive climate action plans for comparable-sized cities in Oregon. As part of your commitment to the environment, please support the election of representatives that are committed to the changes we know are necessary to ensure a healthy future for all.

                  Please note: there is no parking on-site. Foot traffic only please. Park on 36th Ave. and walk (or bike) to 3707 SE Johnson Creek Blvd. Portland, 97222. Please call ahead to arrange alter-abled access.'
                />

                <Action
                  date='Friday, Sept. 20th'
                  time='1:00 pm'
                  city='Salem'
                  title='March on State Capitol'
                  location='Oregon State Capitol (900 Court St NE, Salem, OR 97301)'
                  locationUrl='https://www.google.com/maps/dir//Oregon+State+Capitol,+900+Court+St+NE,+Salem,+OR+97301/@44.9384763,-123.0326667,17z/data=!4m16!1m6!3m5!1s0x54bfff13c6b8efe9:0x2843d6a43baea049!2sOregon+State+Capitol!8m2!3d44.9384725!4d-123.030478!4m8!1m0!1m5!1m1!1s0x54bfff13c6b8efe9:0x2843d6a43baea049!2m2!1d-123.030478!2d44.9384725!3e3'
                  primary='https://www.facebook.com/events/349094052661137/?ti=cl'
                  description='Youth and their supporters to march on our state capitol. Event 1-4 See link above of Facebook event.'
                />
              </>
            )}

            {(this.props.place === 0 || this.props.place === 2) && (
              <>
                <Action
                  date='Friday, Sept. 20th'
                  time='10:30 am - 12:30 pm'
                  city='Medford'
                  title='Climate Walkout'
                  location='Vogel Plaza (15 S Central Ave, Medford, Oregon 97501)'
                  locationUrl='https://www.google.com/maps/dir//15+S+Central+Ave,+Medford,+OR+97501/@42.3263289,-122.8741147,17z/data=!4m17!1m7!3m6!1s0x54cf7a3b2d21a443:0x9fd1f7d58b932f2f!2s15+S+Central+Ave,+Medford,+OR+97501!3b1!8m2!3d42.326325!4d-122.871926!4m8!1m0!1m5!1m1!1s0x54cf7a3b2d21a443:0x9fd1f7d58b932f2f!2m2!1d-122.871926!2d42.326325!3e3'
                  primary='https://www.facebook.com/events/2968648910027221/'
                  description='On September 20, young people and adults will protest all across the US and world to demand that transformative action be taken to address the climate crisis. We will make this one of the largest mobilizations around climate yet. Join youth walking out at South Medford High School. We will meet at the front doors and march down to vogel plaza. There will be a youth led rally where we will demand Gov. Kate Brown take action on climate and support an Oregon Green New Deal. Action needs to be taken immediately to ensure that further damage to our climate doesn’t take place. Find out more about the Oregon Green New Deal here: https://www.rogueclimate.org/ognd
              **this event is organized by youth for youth**'
                />

                <Action
                  date='Friday, Sept. 20th'
                  title='Climate Walkout'
                  time='10:30 am - 12:30 pm'
                  city='Ashland'
                  location='Ashland Plaza (Downtown Plaza, N Main St, Ashland, OR 97520)'
                  locationUrl='https://www.google.com/maps/dir//Downtown+Plaza,+N+Main+St,+Ashland,+OR+97520/@42.1973086,-122.7152752,19.58z/data=!4m16!1m6!3m5!1s0x54cf7354670d0e6d:0x487a82ff8eb3f51b!2sDowntown+Plaza!8m2!3d42.1972415!4d-122.7153238!4m8!1m0!1m5!1m1!1s0x54cf7354670d0e6d:0x487a82ff8eb3f51b!2m2!1d-122.7153237!2d42.1972417!3e3'
                  description='Youth around the world inspired by Greta Thunberg are walking out of school on Friday, September 20 to demand action on climate change. Join youth from the Ashland School District for our local walkout alongside the thousands of walkouts across the world. Our generation will see the most extreme impacts of the climate crisis. Youth in Ashland are demanding that Governor Kate Brown take action by leading the way forward on an Oregon Green New Deal that transition our communities to renewable energy and off fossil fuels. Students will meet outside of Ashland High School at 10:30AM and march to the plaza together. Adults who want to support the youth gather at the Plaza at 10:30AM to welcome the youth. Oregon needs a Green New Deal! For more information, visit https://www.rogueclimate.org/ognd
              **This event is organized by youth for youth**
              '
                  primary='https://www.facebook.com/events/704851616642023/'
                />

                <Action
                  date='Friday, Sept. 20th'
                  time='5:30 pm - 8:00 pm'
                  city='Medford'
                  title='Climate Week Fiesta'
                  location='The Commons Medford (N Bartlett St at 5th, Medford, Oregon 97501)'
                  locationUrl='https://www.google.com/maps/dir//E+5th+St+%26+N+Bartlett+St,+Medford,+OR+97501/@42.3286393,-122.8751359,17z/data=!4m17!1m7!3m6!1s0x54cf7a3a9888c147:0xf91f31bd58145d80!2sE+5th+St+%26+N+Bartlett+St,+Medford,+OR+97501!3b1!8m2!3d42.3286354!4d-122.8729472!4m8!1m0!1m5!1m1!1s0x54cf7a3a9888c147:0xf91f31bd58145d80!2m2!1d-122.8729472!2d42.3286354!3e3'
                  primary='https://www.facebook.com/events/692147861292270/'
                  description='This “Fiesta” is in solidarity with the thousands of youth and adults who will strike all across the US and world to demand transformative action be taken to address the climate crisis. Come for music, speakers, tamales, and opportunities to take action and learn more about the movement for climate justice in Southern Oregon. This “Fiesta” makes participating in this week of action more accessible, as different groups of people may face different consequences for walking out than others.'
                />

                <Action
                  date='Friday, Sept. 20th'
                  time='4:30 pm - 6:00 pm'
                  city='Josephine County'
                  title='Climate Strike'
                  location='Josephine County (500 NW 6th Street, Grants Pass)'
                  locationUrl='https://www.google.com/maps/dir//500+NW+6th+St,+Grants+Pass,+OR+97526/@42.4428998,-123.3277151,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54c57a239e82503f:0x868b0b8e5f1cbb50!2m2!1d-123.3255264!2d42.4428959'
                  primary='https://www.facebook.com/events/343103773305276/'
                  description='Inspired by youth like Greta Thurnburg, a Swedish student who has been organizing “School Strikes for the Climate” and communities on the frontlines of the climate crisis, students, workers, and more will be walking out of their schools and work to demand action on climate and a faster transition to renewable energy. Everyone is invited to join Josephine County residents at 4:30pm on Friday, September 20 for a rally on the steps of the Josephine County Courthouse. Can you make it?  

                  Across Oregon, communities are demanding  an end to Jordan Cove LNG and an Oregon Green New Deal that will create jobs in renewable energy and other sectors, reduce air pollution, lower energy costs, promote sustainable farms and forests, provide more equitable and cleaner transportation systems, protect communities impacted by climate change, fund a just transition to a sustainable economy, and more.'
                />

                <Action
                  date='Friday, Sept. 20th'
                  time='10:30 am - 12 pm'
                  city='Phoenix'
                  title='Climate Walkout'
                  location='Phoenix City Hall (West 2nd Street, Phoenix, OR)'
                  locationUrl='https://www.google.com/maps/dir//W+2nd+St,+Phoenix,+OR+97535/@42.2737641,-122.8196095,17z/data=!4m17!1m7!3m6!1s0x54cf712ca029ad8f:0x10b0d0f9682903fb!2sW+2nd+St,+Phoenix,+OR+97535!3b1!8m2!3d42.2737602!4d-122.8174208!4m8!1m0!1m5!1m1!1s0x54cf712ca029ad8f:0x10b0d0f9682903fb!2m2!1d-122.8174208!2d42.2737602!3e3'
                  primary='https://www.facebook.com/events/417176025572557/'
                  description='On September 20, young people and adults will protest all across the US and world to demand that transformative action be taken to address the climate crisis. We will make this one of the largest mobilizations around climate yet. 

                  Join youth walking out at Phoenix High School. We will meet at the front doors and march down to Phoenix City Hall. There will be a youth led rally where we will demand Gov. Kate Brown take action on climate and support an Oregon Green New Deal. Action needs to be taken immediately to ensure that further damage to our climate doesn’t take place. 
                  
                  Find out more about the Oregon Green New Deal here: https://www.rogueclimate.org/ognd
                  
                  **this event is organized by youth for youth**'
                />

                <Action
                  date='Friday, Sept. 20th'
                  time='12:00 pm'
                  city='Ashland'
                  title='Unite For Climate Action'
                  location='Butler Bandshell (Lithia Park, Ashland, OR 97520)'
                  locationUrl='https://www.google.com/maps/dir//Butler+Bandshell,+Ashland,+OR+97520/@42.1918311,-122.7191635,17z/data=!4m16!1m6!3m5!1s0x54cf0b5548a5f7f3:0x4a9743c0c714585f!2sButler+Bandshell!8m2!3d42.1929383!4d-122.7179246!4m8!1m0!1m5!1m1!1s0x54cf0b5548a5f7f3:0x4a9743c0c714585f!2m2!1d-122.7179246!2d42.1929383!3e3'
                  primary='https://socan.eco/event/global-climate-strike/'
                  secondary='https://docs.google.com/forms/d/e/1FAIpQLSflpRUkT8HKVGDWXcDaAfgZCxxf-AFVTvd1nr59ufllW6Qr8w/viewform'
                  description='Join us for a community picnic and a day of joy and creativity to demonstrate that we share the concerns of our local students and are with them in this transformative effort to address climate change. Under the creative direction of Barret O’Brien, enjoy a program of music, uplifting presentations, poetry, group art, spiritual centering for climate healing, and information on opportunities for taking personal and community action. Join with us to celebrate our beautiful planet and be inspired and energized to continue to build a sustainable future. Food trucks will also be available, or BYO picnic with your own plates, cups, and utensils. Our goal is a zero-waste event.

                  Calling all Southern Oregon climate change movers and shakers: All hands on deck! To volunteer, be a partnering organization, host a table, or help spread the word, or for more information, please contact Lorrie Kaplan, co-facilitator, Lorriekaplan@gmail.com or Kathy Conway of SOCAN at kathy@socan.info.  Musicians, spoken word artists, acrobats, clowns, singers, and performers of all ilks desiring to be part contact Barret O’Brien at artistscollective@live.com.'
                />

                <Action
                  date='Friday, Sept. 20th'
                  time='12:00 pm - 1:00 pm'
                  city='Roseburg'
                  title='Climate Strike'
                  location='Fred Meyer on Garden Valley Blvd (929 NW Garden Valley Blvd, Roseburg, OR 97471)'
                  locationUrl='https://www.google.com/maps/dir//Fred+Meyer,+929+NW+Garden+Valley+Blvd,+Roseburg,+OR+97471/@43.2279335,-123.3708795,17z/data=!4m16!1m6!3m5!1s0x54c422b7e9be2377:0x14f780b86e95ea41!2sFred+Meyer!8m2!3d43.2279296!4d-123.3686908!4m8!1m0!1m5!1m1!1s0x54c422b7e9be2377:0x14f780b86e95ea41!2m2!1d-123.3686908!2d43.2279296!3e3'
                  description='On September 20th, the League of Women Voters of Umpqua Valley and the Douglas County Global Warming Coalition are joining the Climate Strikes Coalition and 350.org partners from around the world to activate thousands of people around the country who want real solutions to the climate crisis.

                  Hundreds of Climate Strike events are being planned across the country. People of all ages will come together in the streets all over the world on September 20th as part of a Global Climate Strike. And Roseburg citizens will be among them.
                  
                  Join us on Friday, Sep. 20 at Noon to 1PM in front of Fred Meyer on Garden Valley Blvd. Bring your signs! Take photos! Be a participant. Be able to tell your children that you did something about this planetary emergency.'
                />

                <Action
                  date='Friday, Sept. 20th'
                  time='11:30 am'
                  city='Klamath'
                  title='Climate Strike'
                  location='903 Main Street, Klamath Falls, OR 97601'
                  locationUrl='https://www.google.com/maps/dir//903+Main+St,+Klamath+Falls,+OR+97601/@42.2343004,-124.0221184,7z/data=!4m17!1m7!3m6!1s0x54c8d4efecd8b8b5:0xdb30e5f503476e29!2s903+Main+St,+Klamath+Falls,+OR+97601!3b1!8m2!3d42.2270202!4d-121.7803187!4m8!1m0!1m5!1m1!1s0x54c8d4efecd8b8b5:0xdb30e5f503476e29!2m2!1d-121.7803187!2d42.2270202!3e3'
                  description='This is part of a HUGE, GLOBAL strike against inaction on climate change, led by children and youth.  For more info, contact oh_otter@charter.net. Bring a sign expressing your thoughts on climate change--or on the proposed Pacific Connector pipeline and Jordan Cove export terminal, a project that would emit over 36.8 million metric tons of carbon dioxide equivalent (CO2e) per year.'
                />
              </>
            )}
            {(this.props.place === 0 || this.props.place === 3) && (
              <Action
                date='Friday, Sept. 20th'
                time='12:00 pm - 1:00 pm'
                title='Global Climate Strike Rally'
                city='Seaside'
                location='Big Orange Chair (HWY 101 and Broadway, Seaside OR)'
                locationUrl='https://www.google.com/maps/dir//US-101+%26+Broadway+St,+Seaside,+OR+97138/@45.9930934,-123.922809,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5494a1be553e3991:0x2ac7755d697ffa6f!2m2!1d-123.9206203!2d45.9930934'
              />
            )}
            {(this.props.place === 0 || this.props.place === 4) && (
              <Action
                date='Friday, Sept. 20th'
                time='12:00 pm'
                title='Global Climate Strike Week - Kick-Off Rally, Flipped Council Meeting, and Green New Deal Discussion'
                city='Eugene'
                location='Wayne Morse Free Speech Plaza (799 Oak St, Eugene, OR 97401)'
                locationUrl='https://www.google.com/maps/dir//Wayne+Morse+Free+Speech+Plaza,+799+Oak+St,+Eugene,+OR+97401/@44.0510145,-123.0932265,17z/data=!4m16!1m6!3m5!1s0x54c11e1481a9c3c3:0x25b0de972002dbe0!2sWayne+Morse+Free+Speech+Plaza!8m2!3d44.0510107!4d-123.0910378!4m8!1m0!1m5!1m1!1s0x54c11e1481a9c3c3:0x25b0de972002dbe0!2m2!1d-123.0910378!2d44.0510107!3e3'
                primary='https://world.350.org/eugene/global-climate-strike-team/'
                secondary='https://docs.google.com/forms/d/e/1FAIpQLSewT6rBYdggamT1TFru2iA5V_nnn7zLFn8JhRNk7t1un3zErg/viewform'
                description=" Youth leaders worldwide are calling on everyone to join them in the streets on Friday, September 20 to demand leaders confront and address the climate crisis. It's their future and we're running out of time to act. Let's answer their call to unite and create massive game-changing public pressure. We're taking a big, bold stand in our community and we need YOU. Will you join us? Global Climate Strike Week starts Friday, September 20, with a kick-off rally, followed by a flipped council meeting, and a Green New Deal Discussion in Harris Hall. Global Climate Strike Week events continue through Friday, September 27. Visit our website for details: 350eugene.org"
              />
            )}
            {(this.props.place === 0 || this.props.place === 5) && (
              <>
                <Action
                  date='Friday, Sept. 20th'
                  time='4:00 pm'
                  title='Strike for Climate'
                  city='Central Oregon'
                  location='1033 NW Wall Street, Bend OR 97701'
                  locationUrl='https://www.google.com/maps/dir//1033+NW+Wall+St,+Bend,+OR+97701/@44.06022,-121.3152636,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54b8c89da8349b8d:0x736897780c06faff!2m2!1d-121.3130749!2d44.06022'
                  primary='https://www.facebook.com/ORClimateStrike/'
                  description='Join The Oregon Youth Climate Strike in collaboration with The Vocal Seniority and 350 Deschutes to protest in coordination with strikes across the globe to demand action against climate change, now!

                Youth, adults, and all in-between are invited to come take action to ensure a future for the next generations.
                
                We have 11 years to prevent irreversible damage to the planet (https://www.un.org/press/en/2019/ga12131.doc.htm), and our government seems to be doing nothing about this threat. We need more than bureaucracy. We need action in the form of exercising our free speech on the streets. All over the world, people of various governments, societies, and locations will be joining together to declare in one clear voice that to save the planet, we need to change. Join this global movement on September 20th.'
                />

                <Action
                  date='Friday, Sept. 20th'
                  time='3:00 pm'
                  title='Climate Strike'
                  city='Redmond'
                  location='Flag Monument, Highway 97'
                  locationUrl='https://www.google.com/maps/dir//Redmond,+OR+97756/@44.2728062,-123.4231265,7z/data=!4m17!1m7!3m6!1s0x54b8d4d44e8c51bb:0x9438d260c06b7918!2sRedmond,+OR+97756!3b1!8m2!3d44.2726203!4d-121.1739212!4m8!1m0!1m5!1m1!1s0x54b8d4d44e8c51bb:0x9438d260c06b7918!2m2!1d-121.1739212!2d44.2726203!3e3'
                  description='Show your concern a livable planet in the future. Join us with a sign and a smile at 3 PM on Friday, Sept. 20, at the Flag Monument on the west side of Highway 97, near Fred Meyers.'
                />
              </>
            )}
            {(this.props.place === 0 || this.props.place === 6) && (
              <Action
                date='Friday, Sept. 20th'
                time='12:15 pm'
                title='Youth-led Climate Strike'
                city='Corvalis'
                location='Corvalis'
                locationUrl='https://www.google.com/maps/dir//Corvallis,+OR/@44.5630283,-123.3185559,13z/data=!4m17!1m7!3m6!1s0x54c0409daa14d77d:0xd70d808f22bdc0be!2sCorvallis,+OR!3b1!8m2!3d44.5645659!4d-123.2620435!4m8!1m0!1m5!1m1!1s0x54c0409daa14d77d:0xd70d808f22bdc0be!2m2!1d-123.2620435!2d44.5645659!3e3'
                primary='https://www.facebook.com/events/936014366734137/'
                description='People all over the globe will join Greta Thunberg and Friday’s for the Future by walking out of their schools, workplaces and homes to join the climate kids marching in the streets. Students are demanding climate justice and emergency-scale action in response to the climate crisis, and they and we are asking you --all of us -- to respond to their call for adults and all people to stand up with them. Join the Corvallis youth as they take action and create hope for their future.  Amplify their voices by joining them for all or any part of the Strike and March: 
                12:15 pm: Arrive at Corvallis High School, Buchanan Street with your sign or use one of ours.  
                12:45 pm: Move to 16th St. sidewalk by football field to hear what the students have to say.
                  1:15 pm: March up 16th through 11th Streets, meet on Monroe and continue to City Hall.  
                  2:00 pm: Students will stage a “Do or Die-In” at City Hall, give speeches, and hopefully speak with City Mayor & Councilors.    
                  2:45 pm: Disperse.
            No generation can do this on their own! Let’s display our unity and commitment together for a better, kinder, more sustainable future.'
              />
            )}
          </Day>

          {this.props.place !== 2 &&
            this.props.place !== 3 &&
            this.props.place !== 4 &&
            this.props.place !== 5 && (
              <Day day='Saturday' date='Sept. 21st'>
                {(this.props.place === 0 || this.props.place === 1) && (
                  <>
                    <Action
                      date='Saturday, Sept. 21st'
                      title='North Pole Season 2 Premiere'
                      city='Portland'
                      time='4:00 pm - 6:00 pm'
                      location='8155 NE Oregon St. Portland Oregon 97213'
                      locationUrl='https://www.google.com/maps/dir//8155+NE+Oregon+St,+Portland,+OR+97213/@45.5285848,-122.5817677,17z/data=!4m17!1m7!3m6!1s0x5495a111c1192a95:0x8f809a1f8406f82f!2s8155+NE+Oregon+St,+Portland,+OR+97213!3b1!8m2!3d45.5285848!4d-122.579579!4m8!1m0!1m5!1m1!1s0x5495a111c1192a95:0x8f809a1f8406f82f!2m2!1d-122.579579!2d45.5285848!3e3'
                      description='OPAL is proud to  host the screening of The North Pole, Season 2 produced by Movement Generation and Rosario Dawson a badass actress, singer and political activist!  It’s a comedy show that holds the complexities of climate change, gentrification, wildfires, immigration, and more! We’d like to gather our community around this important, relevant, and hella fun show!

                  Please Note: This is an event for people of color to engage the topic of climate justice. People of color are invited to this space to understand and process environmental racism and its impact on our communities.'
                      primary='http://www.opalpdx.org/2019/08/opal-will-screen-the-north-pole-seasons-1-and-2/'
                    />

                    <Action
                      date='Saturday, Sept. 21st'
                      title='Rally for Peace through Self-Determination and Climate Justice'
                      city='Portland'
                      time='5:00 pm'
                      location='Skidmore Fountain (W Burnside St & Ankeny, Portland)'
                      locationUrl='https://www.google.com/maps/dir//Skidmore+Fountain,+W+Burnside+St+%26+Ankeny,+Portland,+OR+97204/@45.5229531,-122.692866,15z/data=!4m16!1m6!3m5!1s0x54950a076d266f77:0x5b599b51cc6038f9!2sSkidmore+Fountain!8m2!3d45.5224081!4d-122.6710948!4m8!1m0!1m5!1m1!1s0x54950a076d266f77:0x5b599b51cc6038f9!2m2!1d-122.6710948!2d45.5224081!3e3'
                      description='September 21st is the International Day of Peace, and as we know, there cannot be peace without struggle. 

                In collaboration between many local chapters of revolutionary grassroots organizations, we will rally together to celebrate and strengthen our solidarity between our movements against fascism and imperialism around the globe, and raise awareness of each of our causes. The theme of this action will have a focus on the threat of climate change through the lens of anti-capitalism and US-led military aggression. Fascism is quickly heightening here in the US and around the world, and we refuse to be complacent! 
                
                Please join us for a day of camaraderie and militant love for one another in our shared struggle against the beast that is US imperialism. 
                
                We will meet at Skidmore Fountain at 5 PM, share in chants, speak about our movements, and most importantly, listen to one another and amplify our voices together. 
                
                We are in need of local orgs to participate in this action and take up tasks to make this happen! 
                
                Please reach out if you would like to be a part of this, we need as many organizers on board as possible! '
                      primary='https://www.facebook.com/events/472161720300452/?ti=cl'
                    />

                    {/* <Action
                      date='Saturday, Sept. 21st'
                      title='Portland Permaculture Jamboree'
                      city='Portland'
                      time='11:00 am'
                      location='Zenger Farm (11741 SE Foster Rd, Portland, Oregon 97266)'
                      primary='https://www.facebook.com/events/zenger-farm/portland-permaculture-jamboree/2169783006644997/'
                      locationUrl='https://www.google.com/maps/dir//Friends+of+Zenger+Farm,+11741+SE+Foster+Rd,+Portland,+OR+97266/@45.4772886,-122.5445266,17z/data=!4m16!1m6!3m5!1s0x54959f82efc90e9d:0x78690b604b3a43a9!2sFriends+of+Zenger+Farm!8m2!3d45.4768474!4d-122.5423287!4m8!1m0!1m5!1m1!1s0x54959f82efc90e9d:0x78690b604b3a43a9!2m2!1d-122.5423285!2d45.4768473!3e3'
                      description='Want to build resiliency for yourself and your community in the face of climate change? Then come join the Veterans Ecological Trades Collective for a day of fun and learning! Together we will explore easy at-home permaculture (sustainable agriculture) techniques, meet local resources, play games, win prizes and eat tasty snacks. This is a great way to learn about sustainable gardening while getting a taste for wildcrafted goods and learning from experts in the field. Join us this Saturday for our Permaculture Jamboree!'
                    /> */}

                    <Action
                      date='Saturday, Sept. 21st'
                      title='International Day of Peace'
                      city='Portland'
                      time='2:00 pm'
                      location='Hosteling International (3031 SE Hawthorne Blvd., Portland, OR 97214)'
                      primary='https://www.facebook.com/events/2649537561737547/'
                      locationUrl='https://www.google.com/maps/dir//HI+Portland+Hawthorne+Hostel,+3031+SE+Hawthorne+Blvd,+Portland,+OR+97214/@45.5122885,-122.636248,17z/data=!4m19!1m9!3m8!1s0x5495a090565a9f5d:0xf23ee5f8a76a24fc!2sHI+Portland+Hawthorne+Hostel!5m2!4m1!1i2!8m2!3d45.5122848!4d-122.6340593!4m8!1m0!1m5!1m1!1s0x5495a090565a9f5d:0xf23ee5f8a76a24fc!2m2!1d-122.6340593!2d45.5122848!3e3'
                      description="Hosteling International USA, United Nations Association Portland, the Jubitz Family Foundation's War Prevention Initiative, the Rotarian Action Group for Peace, and the Greater Portland Sustainability Education Network (GPSEN) are co-hosting this year's 

                      International Day of Peace
                      Saturday, September 21
                      2:00 - 6:00
                      Hosteling International Portland Hawthorne 
                      3031 SE Hawthorne Blvd, Portland, Oregon 97214 
                      
                      This year's International Day of Peace educational and cultural event will focus on the UN's international theme: Climate Action for Peace, including a:
                      
                      ** Facilitated panel discussion identifying linkages between climate change and global peace and security issues
                      ** Music and procession with a peace dove designed by Jane Goodall
                      ** Peace pole dedication by the CEO of Hosteling International
                      ** Rangoli art and language lesson
                      ** Reception featuring local food and wine
                      ** Small-group discussions, tabling by local organizations, and networking opportunities
                      
                      We are excited about the opportunity to collaborate on this important topic and hope that you will join us.
                      
                      This event is free, but please RSVP on our Facebook Event page, so we can get an accurate count for our reception."
                    />
                  </>
                )}
                {(this.props.place == 0 || this.props.place == 6) && (
                  <>
                    <Action
                      date='Saturday, Sept. 21st'
                      title='Climate Justice Community Discussion'
                      city='Corvalis'
                      time='5:30 pm'
                      location='Corvalis'
                      locationUrl='https://www.google.com/maps/dir//Corvallis,+OR/@44.5630283,-123.3185559,13z/data=!4m17!1m7!3m6!1s0x54c0409daa14d77d:0xd70d808f22bdc0be!2sCorvallis,+OR!3b1!8m2!3d44.5645659!4d-123.2620435!4m8!1m0!1m5!1m1!1s0x54c0409daa14d77d:0xd70d808f22bdc0be!2m2!1d-123.2620435!2d44.5645659!3e3'
                      description="What is climate justice? How does looming climate catastrophe intersect with social justice? Whether you already know the answers or not, join us for a community discussion led by local organizers with a focus on this topic. If you're involved in any sort of environmental activism or if you're just interested in learning more, we hope to see you there!

                Sponsored by: Coalition of Graduate Employees Environmental Justice Caucus"
                      primary='https://www.facebook.com/events/418370012365305/'
                    />

                    <Action
                      date='Saturday, Sept. 21st'
                      title='Energy Retrofit Your Home for Climate'
                      city='Corvalis'
                      time='3:00 pm'
                      location='UU Church'
                      locationUrl='https://www.google.com/maps/dir//Unitarian+Universalist+Fellowship+of+Corvallis,+2945+NW+Circle+Blvd,+Corvallis,+OR+97330/@44.5867031,-123.2871411,17z/data=!4m16!1m6!3m5!1s0x54c03f65add264a1:0x5195314e9057848d!2sUnitarian+Universalist+Fellowship+of+Corvallis!8m2!3d44.5866993!4d-123.2849524!4m8!1m0!1m5!1m1!1s0x54c03f65add264a1:0x5195314e9057848d!2m2!1d-123.2849524!2d44.5866993!3e3'
                      description='Learn why we need to retrofit our homes to mitigate as well as to adapt to climate change.  We cover how to retrofit including: Rooftop Solar PV, heat pumps for heating, cooling and water heating, to other energy efficient appliances, insulation, window upgrades, air sealing.  Passive House standards are introduced, which reduce the need for heating and cooling to such a low level a house can be heated with a hair drier.  No joke!  Information about resources to help you pay for the work are included.'
                    />
                  </>
                )}
              </Day>
            )}

          {this.props.place !== 2 &&
            this.props.place !== 4 &&
            this.props.place !== 5 &&
            this.props.place !== 6 && (
              <Day day='Sunday' date='Sept. 22nd'>
                {(this.props.place === 0 || this.props.place === 1) && (
                  <>
                    <Action
                      date='Sunday, Sept. 22nd'
                      time='3:00 pm - 5:00 pm'
                      city='Portland'
                      title='International Coalition for Human Rights in the Philippines: Community forum on environmental justice and just transition'
                      location='OMNI (619 SE 6th Ave, Portland, OR 97214)'
                      locationUrl='https://www.google.com/maps/dir//Omni,+619+SE+6th+Ave,+Portland,+OR+97214/@45.5184983,-122.6687697,15z/data=!4m16!1m6!3m5!1s0x549509b268ad2f47:0xe3ba2419b11a4b26!2sOmni!8m2!3d45.5184761!4d-122.6599828!4m8!1m0!1m5!1m1!1s0x549509b268ad2f47:0xe3ba2419b11a4b26!2m2!1d-122.6599828!2d45.5184761!3e3'
                      description='Join ICHRP PNW for panel on climate justice and just transition in a global context with a focus on the Philippines. We will be joined by an organizer from Kalikasan, a network of youth, women, indigenous people, and peasants fighting for environmental justice and national liberation in the Philippines.'
                    />

                    <Action
                      date='Sunday, Sept. 22nd'
                      title='Caring for Children in the Midst of Global Crisis'
                      time='2:00 pm - 5:00 pm'
                      city='Portland'
                      location='Taborspace (5441 SE Belmont St, Portland)'
                      locationUrl='https://www.google.com/maps/dir//5441+SE+Belmont+St,+Portland,+OR+97215/@45.5167944,-122.6094179,17z/data=!4m17!1m7!3m6!1s0x5495a0fa9e4c75dd:0x404bf16b13baef09!2s5441+SE+Belmont+St,+Portland,+OR+97215!3b1!8m2!3d45.5167944!4d-122.6072292!4m8!1m0!1m5!1m1!1s0x5495a0fa9e4c75dd:0x404bf16b13baef09!2m2!1d-122.6072292!2d45.5167944!3e3'
                      description='Using The Work That Reconnects practices developed by Joanna Macy, we will gather with other parents, teachers and caretakers to deeply feel, process and reflect upon the outrageous endeavor of raising children in this time of environmental and social collapse. This form of group work allows us to transmute and release our pain, fear and grief so we can show up for our children with the presence and courage that they really need from us.
              '
                      primary=' http://www.radiantbalance.com/caring-for-children-in-the-midst-of-global-crisis/'
                    />
                    {/* 
                    <Action
                      date='Sunday, Sept. 22nd'
                      time='12:00 pm'
                      title='Bridging the Divide'
                      city='Portland'
                      location='Hawthorne Bridge, Portland'
                      locationUrl='https://www.google.com/maps/dir//Hawthorne+Bridge,+Portland,+OR+97214/@45.5131181,-122.6707156,17z/data=!4m16!1m6!3m5!1s0x54950adf41e0f22f:0xa8b1ab0d9f03246!2sHawthorne+Bridge!8m2!3d45.5132077!4d-122.6708595!4m8!1m0!1m5!1m1!1s0x54950adf41e0f22f:0xa8b1ab0d9f03246!2m2!1d-122.6708591!2d45.5132077!3e3'
                      description='We will be marching for Climate and Immigrant Justice, Converging to together to make a bold and impactful statement on the Hawthorne bridge! Rally to follow with indigenous performers and speakers.'
                      primary='https://www.facebook.com/events/505471230028851/?ti=icl'
                    /> */}
                  </>
                )}
                {(this.props.place === 0 || this.props.place === 3) && (
                  <Action
                    date='Sunday, Sept. 22nd'
                    time='3:00 pm'
                    city='Astoria'
                    title='FREE Screening of the film Paris to Pittsburgh'
                    location='Columbian Theater (1102 Marine Dr, Astoria)'
                    locationUrl='https://www.google.com/maps/dir//1102+Marine+Dr,+Astoria,+OR+97103/@46.1898472,-123.8337144,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54937b4a2a10d163:0x6c4de78f07cd5bf7!2m2!1d-123.8315257!2d46.1898472'
                    description="Paris To Pittsburgh spotlights the cities, states, businesses and citizens taking climate action and explores the very real social and economic impacts of climate change from America' s heartland to the nation's coastlines."
                  />
                )}
              </Day>
            )}

          {this.props.place !== 2 &&
            this.props.place !== 3 &&
            this.props.place !== 4 &&
            this.props.place !== 5 && (
              <Day day='Monday' date='Sept. 23rd'>
                {(this.props.place === 0 || this.props.place === 1) && (
                  <Action
                    date='Monday, Sept. 23rd'
                    time='7:00 am - 9:00 am'
                    city='Portland'
                    title='Chase Rush Hour Leafleting'
                    location='West End of the Hawthorne Bridge (Hawthorne Bridge, Portland, OR 97214)'
                    primary='http://350pdx.nationbuilder.com/chase_rush_hour_leafleting'
                    locationUrl='https://www.google.com/maps/dir//Hawthorne+Bridge,+Portland,+OR+97214/@45.5132114,-122.6730478,17z/data=!4m16!1m6!3m5!1s0x54950adf41e0f22f:0xa8b1ab0d9f03246!2sHawthorne+Bridge!8m2!3d45.5132077!4d-122.6708591!4m8!1m0!1m5!1m1!1s0x54950adf41e0f22f:0xa8b1ab0d9f03246!2m2!1d-122.6708591!2d45.5132077!3e3'
                    description="We'll have banners, signs, flyers and fun letting drivers and bikers know about Chase Bank's #1 status in the world in enabling fossil fuel infrastructure building and expansion. 
                  There is a traffic signal at the end of the bridge so lots of drivers have to stop and have plenty of time for us to give them a flyer while they wait. The bridge is also heavily used by cyclists. There are wide sidewalks and even an island which accommodates our 18 foot banner. We've done this at this location before and felt quite safe."
                  />
                )}

                {(this.props.place === 0 || this.props.place === 6) && (
                  <Action
                    date='Monday, Sept. 23rd'
                    time='7:00 pm'
                    city='Corvalis'
                    title='Green New Deal-Panel Discussion: What it is and why we need it'
                    location='Corvallis High School Theater, Corvallis, OR'
                    locationUrl='https://www.google.com/maps/dir//Corvallis+School+District+Theaters,+1400+NW+Buchanan+Ave,+Corvallis,+OR+97330/@44.5758288,-123.271337,17z/data=!4m16!1m6!3m5!1s0x54c0409a57ef9109:0x5397394e5ebb3b6!2sCorvallis+School+District+Theaters!8m2!3d44.575825!4d-123.269143!4m8!1m0!1m5!1m1!1s0x54c0409a57ef9109:0x5397394e5ebb3b6!2m2!1d-123.269143!2d44.575825!3e3'
                    description='While the Green New Deal has received more media attention than any other plan
                    to address the climate crisis, most coverage fails to explain what it actually is and
                    why it is the only proposal that addresses the scale and urgency of the emergency
                    that we’re in. Join us for an educational presentation and panel discussion on why
                    the Green New Deal is so ambitious and how we can make it a reality.'
                  />
                )}
              </Day>
            )}

          {this.props.place !== 2 &&
            this.props.place !== 3 &&
            this.props.place !== 4 &&
            this.props.place !== 5 && (
              <Day day='Tuesday' date='Sept. 24th'>
                {(this.props.place === 0 || this.props.place === 1) && (
                  <>
                    <Action
                      date='Tuesday, Sept. 24th'
                      time='6:30 pm'
                      city='Portland'
                      title='Escalating Resistance: Mass Rebellion Training!'
                      location='The Old Church (1422 SW 11th Ave, Portland, OR 97201)'
                      locationUrl='https://www.google.com/maps/dir//1422+SW+11th+Ave,+Portland,+OR+97201/@45.5151167,-122.6877856,17z/data=!4m17!1m7!3m6!1s0x54950a1a10613669:0x57cacd83e9e2f45e!2s1422+SW+11th+Ave,+Portland,+OR+97201!3b1!8m2!3d45.515113!4d-122.6855969!4m8!1m0!1m5!1m1!1s0x54950a1a10613669:0x57cacd83e9e2f45e!2m2!1d-122.6855969!2d45.515113!3e3'
                      description='Join with activists from labor, racial, and climate justice in an evening of training provided by legendary activist Lisa Fithian.
              About this Event
              Lisa Fithian is an anti-racist organizer who has worked for justice since the 1970s. Using creative, strategic, nonviolent direct action and civil disobedience, she has won many battles and trained tens of thousands of people while participating in a range of movements and mobilizations, including Occupy Wall Street, anti-WTO and corporate globalization protests all over the world, the climate justice movement, and more.
              
              As part of her tour to support the release of her new book, "Shut It Down: Stories from a Fierce, Loving Resistance," Lisa will be offering training to hone our strategies and tactics to impact power holders and create social disruption at increasingly larger scales. This organizing requires attention to how we build collective power that heals and liberates us from our socialization in the dominant culture of colonialism and superiority that privileges white, male, Christian and rich people.
              
              In addition to this exploration of power and healing we will look at: power mapping of people, economic centers, and geographies to increase impact within strategic terrains, creating calendars of engagement, organizing our people, developing solidarity response networks and how artful "props" can bolster our uprisings.
              
              One of the goals of this training is to build a foundation for an alliance of movements with thousands of people for a coordinated mass disruption nationwide that goes beyond what we have done before.
              
              We cannot just tear it all down, without replacing systems of oppression with systems of liberation. This is our challenge. Organizing courageous, joyful and bold rebellions rooted in solidarity with a beautiful, loving insistence that another world is possible and we are creating her every day.
              
              Let’s do this, friends!'
                    />

                    <Action
                      date='Tuesday, Sept. 24th'
                      time='Start - 7:00 am'
                      city='Portland'
                      title='Vigil at Zenith (Day 1)'
                      location='Sidewalk Near the Zenith Energy Facility (5501 NW Front Avenue)'
                      locationUrl='https://www.google.com/maps/dir//5501+NW+Front+Ave,+Portland,+OR+97210/@45.5606764,-122.7375302,17z/data=!4m17!1m7!3m6!1s0x5495083acb38ae29:0x24cf917151af58eb!2s5501+NW+Front+Ave,+Portland,+OR+97210!3b1!8m2!3d45.5606727!4d-122.7353415!4m8!1m0!1m5!1m1!1s0x5495083acb38ae29:0x24cf917151af58eb!2m2!1d-122.7353415!2d45.5606727!3e3'
                      primary='https://350pdx.org/event/vigil-at-zenith/'
                      primaryTxt='LEARN MORE'
                      description='Crude Oil from the Tar Sands in Canada is coming by rail through our neighborhoods, and being exported on our rivers. This puts us all at risk, as well as causing untold harm to native lands, boreal forests and our precious climate. We will be keeping watch legally and peacefully outside the Zenith facility from Tuesday, September 24th 7:00 am to Thursday, September 26th 7:00 pm (60 hours continuous), to express our concern, our love for the planet, our grief, and our optimism that things can change. We will be tracking train movements and construction at the site, and putting pressure on government officials and the Zenith facility to cease the tar sands shipments. Press, public officials and faith leaders are invited to join.'
                    />

                    <Action
                      date='Tuesday, Sept. 24th'
                      time='4:00 pm'
                      city='Salem'
                      title='Chase Bank Action'
                      location='Wallace Rd. NW & Glen Creek Rd. NW'
                      locationUrl='https://www.google.com/maps/dir//Glen+Creek+Rd+NW+%26+Wallace+Rd+NW,+Salem,+OR+97304/@45.2080407,-123.6010543,8z/data=!4m17!1m7!3m6!1s0x54bfffa1e202f739:0x7195b47f370933bb!2sGlen+Creek+Rd+NW+%26+Wallace+Rd+NW,+Salem,+OR+97304!3b1!8m2!3d44.950175!4d-123.0516597!4m8!1m0!1m5!1m1!1s0x54bfffa1e202f739:0x7195b47f370933bb!2m2!1d-123.0516597!2d44.950175!3e3'
                      primary='https://actionnetwork.org/events/climate-strike-chase-bank-action-sept-24'
                      description='Demand that JPMorgan Chase end its investments in fossil fuel companies and projects, including Jordan Cove/LNG terminal and pipeline in Oregon. Chase is the worst financial backer of fossil fuel companies and projects and is responsible for oil and gas pipelines through numerous indigenous territories without their consent. This action is part of a nationwide multi-year campaign to get Chase to stop funding fossil fuels. We will deliver a message to the bank manager to be conveyed to corporate officials and we will encourage bank customers to move accounts to credit unions and community-oriented banks.

                Led by 350 Salem OR in collaboration with DSA Ecosocialist Working Group'
                    />

                    <Action
                      date='Tuesday, Sept. 24th'
                      time='1:00 - 3:00 pm'
                      city='Gresham'
                      title='Boeing Protest Rally - 1'
                      location='Gresham City Hall (1333 NW Eastman Pkwy, Gresham, OR 97030)'
                      locationUrl='https://www.google.com/maps/dir//Gresham+City+Hall,+1333+NW+Eastman+Pkwy,+Gresham,+OR+97030/@45.5065834,-122.4380012,17z/data=!4m16!1m6!3m5!1s0x5495988906f3a2e3:0x66eabafd04751365!2sGresham+City+Hall!8m2!3d45.5065834!4d-122.4358125!4m8!1m0!1m5!1m1!1s0x5495988906f3a2e3:0x66eabafd04751365!2m2!1d-122.4358125!2d45.5065834!3e3'
                      description='As part of the Global Climate Strike week of action, there will be two events: first at the Gresham City Hall on Tuesday Sept 24, and the second at the entrance to the Boeing Commercial Airplanes Facility on Friday September 27.  The purpose of the rallies is to call attention to the role Boeing played in killing the Clean Energy Jobs bill, HB 2020.  According to multiple credible reports, Boeing pressured Senator Laurie Monnes Anderson, who had publically stated her support for the bill, to both delay action on the bill and following the walkout of the Senate Republicans to withdraw her support for the bill.  
                The Boeing Corporation claims to be committed to environmental innovation and performance in its products, services and operations.  They have stated their commitment to meeting climate change and other challenges head-on by working closely with government agencies, customers, stakeholders and research facilities worldwide to develop solutions that help protect the environment. Their actions related to the Clean Energy Jobs bill are inconsistent with these claims.
                The event is designed to call public attention to Boeing’s recent actions, which were both contrary to their stated policy and detrimental to the health and wellbeing of the environment, community and state of Oregon.  The event will be organized by multiple groups and will be a peaceful gathering of concerned citizens and elected officials to:
                1.	Registering our deep disappointment in Boeing’s actions regarding HB2020,
                2.	Urge Boeing and Senator Monnes Anderson to support a future climate bills here in the Oregon, and
                3.	Highlight the urgency of the looming climate crisis – and the need for immediate action to both mitigate the impending impacts and avoid triggering an irreversible, run-away climate event.'
                    />

                    <Action
                      date='Tuesday, Sept. 24th'
                      time='6:00 pm - 8:00 pm'
                      city='Portland'
                      title='350PDX Volunteer Orientation'
                      location='Process Work Institute (2049 NW Hoyt St #1 Portland, OR 97209)'
                      locationUrl='https://www.google.com/maps/dir//Process+Work+Institute,+2049+NW+Hoyt+St+%231,+Portland,+OR+97209/@45.5272062,-122.6957185,17z/data=!4m16!1m6!3m5!1s0x549509f756b1b7e3:0x987f661f95c6023f!2sProcess+Work+Institute!8m2!3d45.5272062!4d-122.6935298!4m8!1m0!1m5!1m1!1s0x549509f756b1b7e3:0x987f661f95c6023f!2m2!1d-122.6935298!2d45.5272062!3e3'
                      primary='http://350pdx.nationbuilder.com/volunteer_orientation'
                      description='Come and learn about climate justice, how people power is changing the world, how you can get involved, and make new friends in the process.

                For those completely new to the climate justice movement, or those wanting a refresher. Looking forward to meeting you!
                
                Please RSVP so we know how many people to expect. Thanks!'
                    />
                  </>
                )}
                {(this.props.place === 0 || this.props.place === 6) && (
                  <>
                    <Action
                      date='Tuesday, Sept. 24th'
                      time='6:30 pm - 7:30 pm'
                      city='Corvalis'
                      title='How Federal Carbon Dividends Can Help Solve the Climate Crisis: Presentation and action'
                      location='Corvallis-Benton County Public Library Main Meeting Room (645 NW Monroe Ave, Corvallis, OR 97330)'
                      locationUrl='https://www.google.com/maps/dir//Corvallis-Benton+County+Public+Library,+645+NW+Monroe+Ave,+Corvallis,+OR+97330/@44.5656438,-123.2665537,17z/data=!4m16!1m6!3m5!1s0x54c04094d77477a7:0x1617c593fca16a5f!2sCorvallis-Benton+County+Public+Library!8m2!3d44.56564!4d-123.264365!4m8!1m0!1m5!1m1!1s0x54c04094d77477a7:0x1617c593fca16a5f!2m2!1d-123.264365!2d44.56564!3e3'
                      description='Along with personal and community action, enacting federal climate solutions will be critical to solving the climate crisis. This event will explore the benefits of and prospects for passage of a federal carbon fee and dividend law, and then provide opportunities to learn more and take action, presented by members of the Corvallis Chapter of Citizens’ Climate Lobby. This will be a fun, educational, solution-oriented event.

                    Sponsored by: Corvallis Citizens’ Climate Lobby'
                    />

                    <Action
                      date='Tuesday, Sept. 24th'
                      time='4:00 pm'
                      city='Corvalis'
                      title='Divest from Chase Bank Demonstration'
                      location='Corvallis'
                      locationUrl='https://www.google.com/maps/dir//Corvallis,+OR/@44.5630283,-123.3185559,13z/data=!4m17!1m7!3m6!1s0x54c0409daa14d77d:0xd70d808f22bdc0be!2sCorvallis,+OR!3b1!8m2!3d44.5645659!4d-123.2620435!4m8!1m0!1m5!1m1!1s0x54c0409daa14d77d:0xd70d808f22bdc0be!2m2!1d-123.2620435!2d44.5645659!3e3'
                      primary='https://corvallisclimateaction.weebly.com/week-of-action.html'
                      description='Legally demonstrate outside Chase Bank branch on public sidewalk at corner of Buchanan and Kings Blvd. "Move your money to local banks and credit unions." "Chase Bank: #1 World Funder of Climate Destruction."'
                    />

                    <Action
                      date='Tuesday, Sept. 24th'
                      time='6:30 pm'
                      city='Corvalis'
                      title='Climate Action Film Fest'
                      location='Corvallis'
                      locationUrl='https://www.google.com/maps/dir//Corvallis,+OR/@44.5630283,-123.3185559,13z/data=!4m17!1m7!3m6!1s0x54c0409daa14d77d:0xd70d808f22bdc0be!2sCorvallis,+OR!3b1!8m2!3d44.5645659!4d-123.2620435!4m8!1m0!1m5!1m1!1s0x54c0409daa14d77d:0xd70d808f22bdc0be!2m2!1d-123.2620435!2d44.5645659!3e3'
                      primary='https://corvallisclimateaction.weebly.com/week-of-action.html'
                      description='Double Feature: Do the Math (2014, 45 mins.) and Paris to Pittsburgh (2019, 78 mins.) at First Congregational Church, 4515 SW West Hills Road, Corvallis'
                    />
                  </>
                )}
              </Day>
            )}

          {this.props.place !== 2 &&
            this.props.place !== 3 &&
            this.props.place !== 4 &&
            this.props.place !== 5 && (
              <Day day='Wednesday' date='Sept. 25th'>
                {(this.props.place === 0 || this.props.place === 1) && (
                  <>
                    <Action
                      date='Wednesday, Sept. 25th'
                      time='11:30 am - 1:00 pm'
                      city='Portland'
                      title='Lunchtime Fun @ Chase Bank'
                      location='Sidewalk (SW 6th & Yamhill Northbound, Portland, OR 97204)'
                      primary='http://350pdx.nationbuilder.com/lunchtime_fun_chase_bank'
                      locationUrl='https://www.google.com/maps/dir//SW+6th+%26+Yamhill+Northbound,+Portland,+OR+97204/@45.5182003,-122.6812132,17z/data=!4m16!1m6!3m5!1s0x54950a0510d9dba5:0xaa60d56f8249cf8f!2sSW+6th+%26+Yamhill+Northbound!8m2!3d45.5181966!4d-122.6790245!4m8!1m0!1m5!1m1!1s0x54950a0510d9dba5:0xaa60d56f8249cf8f!2m2!1d-122.6790245!2d45.5181966!3e3'
                      description="We'll be greeting the many people coming to this Chase Bank branch to use the ATM or go into the branch, as well as the many passersby going to lunch and waiting for the MAX across Yamhill. 
                  We'll pass out flyers exposing the #1 role of JPMorgan Chase Bank in financing and enabling fossil fuel infrastructure development and expansion and ask them to Move Their Money! 
                  We'll have many roles besides giving out flyers: singing, holding signs and art, making us look BIG, so please join us for what promises to be a fun hour and a half."
                    />

                    <Action
                      date='Wednesday, Sept. 25th'
                      city='Portland'
                      time='Ongoing'
                      title='Vigil at Zenith (Day 2)'
                      location='Sidewalk Near the Zenith Energy Facility (5501 NW Front Avenue)'
                      locationUrl='https://www.google.com/maps/dir//5501+NW+Front+Ave,+Portland,+OR+97210/@45.5606764,-122.7375302,17z/data=!4m17!1m7!3m6!1s0x5495083acb38ae29:0x24cf917151af58eb!2s5501+NW+Front+Ave,+Portland,+OR+97210!3b1!8m2!3d45.5606727!4d-122.7353415!4m8!1m0!1m5!1m1!1s0x5495083acb38ae29:0x24cf917151af58eb!2m2!1d-122.7353415!2d45.5606727!3e3'
                      primary='https://350pdx.org/event/vigil-at-zenith/'
                      primaryTxt='LEARN MORE'
                      description='Crude Oil from the Tar Sands in Canada is coming by rail through our neighborhoods, and being exported on our rivers. This puts us all at risk, as well as causing untold harm to native lands, boreal forests and our precious climate. We will be keeping watch legally and peacefully outside the Zenith facility from Tuesday, September 24th 7:00 am to Thursday, September 26th 7:00 pm (60 hours continuous), to express our concern, our love for the planet, our grief, and our optimism that things can change. We will be tracking train movements and construction at the site, and putting pressure on government officials and the Zenith facility to cease the tar sands shipments. Press, public officials and faith leaders are invited to join.'
                    />

                    <Action
                      date='Wednesday, Sept. 25th'
                      city='Portland'
                      time='3:30 pm'
                      title='Portland Clean Energy Fund Grant Committee Appointments!'
                      location='Portland City Hall (1221 SW 4th Ave, Portland, OR)'
                      locationUrl='https://www.google.com/maps/dir//Portland+City+Hall,+1221+SW+4th+Ave+%23110,+Portland,+OR+97204/@45.5146657,-122.6785488,18z/data=!4m16!1m6!3m5!1s0x54950a103dbd47c1:0x54c5860248677f4b!2sPortland+City+Hall!8m2!3d45.5150101!4d-122.6790919!4m8!1m0!1m5!1m1!1s0x54950a103dbd47c1:0x54c5860248677f4b!2m2!1d-122.6790919!2d45.5150101!3e3'
                      primary='http://350pdx.nationbuilder.com/portland_clean_energy_fund_grant_committee_appointments'
                      description="The Portland City Council will be appointing the first five members of the Portland Clean Energy Fund Grant Committee! Each of the five City Commissioner will appoint one member of the very first grant committee that will be tasked with overseeing PCEF, releasing requests for proposals, reviewing applications, and making funding recommendations.

                We need YOU to show up to remind City Council that over 65% of Portland voters approved the community-led Portland Clean Energy Fund. We need to make it clear to them that Portland stands behind the City of Portland in strongly implementing this measure for climate justice and corporate accountability. Not only that we support the Portland Clean Energy Fund - but that we are paying attention and we expect city councilors to implement the Portland Clean Energy Fund faithfully to the will of the people!
                
                This is our most important public action since the election, and critical to successful implementation! 
                
                * Wear green to show your support for green jobs and clean energy! *
                
                What: Portland City Council Hearing to Appoint the first 5 Portland Clean Energy Fund Grant Committee Members
                
                Where: Portland City Hall, 1221 SW 4th Ave, Portland, OR
                
                When: 3:30 pm on Wednesday, September 25th, 2019
                
                Have you missed us? 
                
                The City of Portland and Portland Clean Energy Fund (PCEF) community coalition have been hard at work together to implement the Portland Clean Energy Fund following its landslide, historic victory in November 2018. This is a very important and exciting milestone! 
                
                Would you like to be involved in the future?
                
                Email Anissa at anissa@350pdx.org to stay in touch for tabling, outreach engagements, the Speaker's Bureau, and other great volunteering opportunities!
                
                WHEN
                September 25, 2019 at 3:30pm - 4:30pm
                WHERE
                Portland City Hall, 1221 SW 4th Ave, Portland, OR"
                    />

                    <Action
                      date='Wednesday, Sept. 25th'
                      city='Portland'
                      time='6:00 pm - 8:00 - pm'
                      title='Matagi Malohi : PCW Talanoa'
                      location='8188 SE Division St, Portland, OR 97206-1068'
                      locationUrl='https://www.google.com/maps/dir//8188+SE+Division+St,+Portland,+OR+97206/@45.5046999,-122.5809419,17z/data=!4m17!1m7!3m6!1s0x5495a04da68458eb:0x78390afc6f9e4da4!2s8188+SE+Division+St,+Portland,+OR+97206!3b1!8m2!3d45.5046962!4d-122.5787532!4m8!1m0!1m5!1m1!1s0x5495a04da68458eb:0x78390afc6f9e4da4!2m2!1d-122.5787532!2d45.5046962!3e3'
                      primary='https://www.facebook.com/events/2523493027937181/'
                      description='The evening will feature four of our Pacific Climate Warriors from throughout the pacific and will be joining our young Pacific Climate Warriors of the Portland chapter and many of our guests in talanoa. We will be sharing about their experience of their September Climate moment and their experiences in climate movement. This is an opportunity for our climate warriors to continue to bridge our realities of our islanders on the frontlines with our youth living in diaspora.

                “Talanoa is a generic term referring to a conversation, chat, sharing of ideas and talking with someone. It is a term that is shared by Tongans, Samoans, and Fijians. Talanoa can be formal, as between chiefs and his or her people, and it can be informal, as between friends in a kava circle. Talanoa is also used for different purposes; to teach a skill, to share ideas, to preach, to resolve problems, to build and maintain relationships, and to gather information.” – The Kakala Research Framework, Seu‘ula Johansson Fua.'
                    />
                  </>
                )}

                {(this.props.place === 0 || this.props.place === 6) && (
                  <Action
                    date='Wednesday, Sept. 25th'
                    time='6:30 pm'
                    city='Corvalis'
                    title='Climate Action Film Fest'
                    location='Corvallis'
                    locationUrl='https://www.google.com/maps/dir//Corvallis,+OR/@44.5630283,-123.3185559,13z/data=!4m17!1m7!3m6!1s0x54c0409daa14d77d:0xd70d808f22bdc0be!2sCorvallis,+OR!3b1!8m2!3d44.5645659!4d-123.2620435!4m8!1m0!1m5!1m1!1s0x54c0409daa14d77d:0xd70d808f22bdc0be!2m2!1d-123.2620435!2d44.5645659!3e3'
                    primary='https://corvallisclimateaction.weebly.com/week-of-action.html'
                    description='Double Feature: Do the Math -- The Movie (2014, 45 mins.) and Paris to Pittsburgh (2019, 78 mins.) at First Congregational Church, 4515 SW West Hills Road, Corvallis'
                  />
                )}
              </Day>
            )}

          {this.props.place !== 3 &&
            this.props.place !== 4 &&
            this.props.place !== 5 && (
              <Day day='Thursday' date='Sept. 26th'>
                {(this.props.place === 0 || this.props.place === 1) && (
                  <>
                    <Action
                      date='Thursday, Sept. 26th'
                      time='7:00 pm'
                      city='Portland'
                      title='Big Timber and the Climate Emergency'
                      location='Patagonia Portland (1106 W Burnside St, Portland, OR 97209)'
                      locationUrl='https://www.google.com/maps/dir//1106+W+Burnside+St,+Portland,+OR+97209/@45.5227668,-122.6846926,17z/data=!4m17!1m7!3m6!1s0x54950a03a92cdf45:0x45c40df2dfcdb165!2s1106+W+Burnside+St,+Portland,+OR+97209!3b1!8m2!3d45.5227631!4d-122.6825039!4m8!1m0!1m5!1m1!1s0x54950a03a92cdf45:0x45c40df2dfcdb165!2m2!1d-122.6825039!2d45.5227631!3e3'
                      primary='https://actionnetwork.org/events/big-timber-and-the-climate-emergency'
                      description="Clearcutting and other industrial logging practices are the leading source of greenhouse gas emissions in Oregon. Industrial timber further amplifies the risks associated with climate change by making the land more susceptible to wildfires, water shortages, harmful algae blooms, floods and landslides. Tragically, Oregonians finance these practices through tax breaks and subsidies that total over $600 million per year.

                  Join Center for Sustainable Economy's president and senior economist, Dr. John Talberth, as he reviews the climate impacts of industrial logging practices and policy options for transforming these practices into climate smart alternatives.
                  
                  Complimentary beverages from HopWorks and Union Wine, along with kombucha and snacks will be available!"
                    />

                    <Action
                      date='Thursday, Sept. 26th'
                      time='End - 7:00 pm'
                      city='Portland'
                      title='Vigil at Zenith (Day 3)'
                      location='Sidewalk Near the Zenith Energy Facility (5501 NW Front Avenue)'
                      locationUrl='https://www.google.com/maps/dir//5501+NW+Front+Ave,+Portland,+OR+97210/@45.5606764,-122.7375302,17z/data=!4m17!1m7!3m6!1s0x5495083acb38ae29:0x24cf917151af58eb!2s5501+NW+Front+Ave,+Portland,+OR+97210!3b1!8m2!3d45.5606727!4d-122.7353415!4m8!1m0!1m5!1m1!1s0x5495083acb38ae29:0x24cf917151af58eb!2m2!1d-122.7353415!2d45.5606727!3e3'
                      primary='https://350pdx.org/event/vigil-at-zenith/'
                      primaryTxt='LEARN MORE'
                      description='Crude Oil from the Tar Sands in Canada is coming by rail through our neighborhoods, and being exported on our rivers. This puts us all at risk, as well as causing untold harm to native lands, boreal forests and our precious climate. We will be keeping watch legally and peacefully outside the Zenith facility from Tuesday, September 24th 7:00 am to Thursday, September 26th 7:00 pm (60 hours continuous), to express our concern, our love for the planet, our grief, and our optimism that things can change. We will be tracking train movements and construction at the site, and putting pressure on government officials and the Zenith facility to cease the tar sands shipments. Press, public officials and faith leaders are invited to join.'
                    />

                    <Action
                      date='Thursday, Sept. 26th'
                      time='6:00 pm - 8:00 pm'
                      city='Portland'
                      title='350PDX Volunteer Orientation'
                      location='Process Work Institute (2049 NW Hoyt St #1 Portland, OR 97209)'
                      locationUrl='https://www.google.com/maps/dir//Process+Work+Institute,+2049+NW+Hoyt+St+%231,+Portland,+OR+97209/@45.5272062,-122.6957185,17z/data=!4m16!1m6!3m5!1s0x549509f756b1b7e3:0x987f661f95c6023f!2sProcess+Work+Institute!8m2!3d45.5272062!4d-122.6935298!4m8!1m0!1m5!1m1!1s0x549509f756b1b7e3:0x987f661f95c6023f!2m2!1d-122.6935298!2d45.5272062!3e3'
                      primary='http://350pdx.nationbuilder.com/350pdx_volunteer_orientation_sept26'
                      description='Come and learn about climate justice, how people power is changing the world, how you can get involved, and make new friends in the process.

                      For those completely new to the climate justice movement, or those wanting a refresher. Looking forward to meeting you!
                      
                      Please RSVP so we know how many people to expect. Thanks!'
                    />

                    <Action
                      date='Thursday, Sept. 26th'
                      time='6:30 pm - 8:00 pm'
                      city='Portland'
                      title='Salmon Action Night'
                      location='1821 SE Ankeny St, Portland, OR 97214'
                      locationUrl='https://www.google.com/maps/dir//1821+SE+Ankeny+St,+Portland,+OR+97214/@45.5224496,-122.6490745,17z/data=!4m17!1m7!3m6!1s0x5495a0bb7157c8e9:0x76713d74df71f97b!2s1821+SE+Ankeny+St,+Portland,+OR+97214!3b1!8m2!3d45.5224459!4d-122.6468858!4m8!1m0!1m5!1m1!1s0x5495a0bb7157c8e9:0x76713d74df71f97b!2m2!1d-122.6468858!2d45.5224459!3e3'
                      primary='https://addup.sierraclub.org/events/action-night-columbia-and-snake-river-salmon'
                      description='The fates of Northwest salmon and resident orca in the northwest are integrally tied and it is beyond time we take real action to restore them. The science and economics are clear: the status quo is not working and it is time to rebalance the equation on the 4 lower Snake River dams.

                      Join us for a presentation and Action Night on restoring the lower Snake River and the opportunities it brings to bolster salmon, orca, communities, and more. And learn how you can be a part of the team working toward the solutions!'
                    />

                    <Action
                      date='Thursday, Sept. 26th'
                      time='4:00 pm'
                      city='Portland'
                      title='YOUTH: Clean Energy Jobs Bill 101 '
                      location='Oregon Sierra Club 1821 SE Ankeny St, Portland, OR 97214'
                      locationUrl='https://www.google.com/maps/dir//Oregon+Sierra+Club,+1821+SE+Ankeny+St,+Portland,+OR+97214/@45.5224539,-122.6491052,17z/data=!4m16!1m6!3m5!1s0x5495a0bb71421639:0x41a84406908197fc!2sOregon+Sierra+Club!8m2!3d45.5224502!4d-122.6469165!4m8!1m0!1m5!1m1!1s0x5495a0bb71421639:0x41a84406908197fc!2m2!1d-122.6469165!2d45.5224502!3e3'
                      primary='http://bit.ly/cej4youth101'
                      description="Been hearing about the Clean Energy Jobs campaign? Want more info? Come learn about the details of the 2019 bill at the Oregon Sierra Club office. You'll get a chance to meet youth leaders with a passion for climate justice, while receiving accurate and detailed information about how Clean Energy Jobs will benefit Oregon by making polluters pay for a just transition. *FREE FOOD is provided*"
                    />
                  </>
                )}
                {(this.props.place === 0 || this.props.place === 2) && (
                  <Action
                    date='Thursday, Sept. 26th'
                    time='6:00 pm - 8:30 pm'
                    city='Ashland'
                    title="L'eau Est La Vie West Coast Tour"
                    location='84 4th Street, Ashland OR'
                    primary='https://www.facebook.com/events/677414612756994/'
                    secondary='https://www.gofundme.com/f/LELVC'
                    secondaryTxt='DONATE'
                    locationUrl='https://www.google.com/maps/dir//84+4th+St,+Ashland,+OR+97520/@42.1955015,-122.7101695,17z/data=!4m17!1m7!3m6!1s0x54cf0cace78d1e99:0x503868f985f3b731!2s84+4th+St,+Ashland,+OR+97520!3b1!8m2!3d42.1954975!4d-122.7079808!4m8!1m0!1m5!1m1!1s0x54cf0cace78d1e99:0x503868f985f3b731!2m2!1d-122.7079808!2d42.1954975!3e3'
                    description='Join Cherri Foytlin, Anne White Hat and Mark Tilsen of the L’eau Est La Vie Camp to learn firsthand accounts from years of Indigenous-led resistance to pipelines. Three of the most effective organizers on Turtle Island will share how they continue to fight back against Energy Transfer Partners, build community resiliency in the Gulf South and their visions for the future.

                  This tour happens simultaneously with a growing wave of climate action. Come build community and connect with Cherri, Anne, and Mark during this critical moment.
                  
                  Bonus special screening of Mutual Aid Media’s film: L’eau Est La Vie From Standing Rock to the Swamp!
                  
                  Sliding scale donation of $10-$25 at the door. All funds go the L’eau Est La Vie Camp and its projects. **NO ONE TURNED AWAY FOR LACK OF FUNDS.**
                  
                  Accessibility: This space is wheelchair accessible. Please reach out to isabella@rogueclimate.org if you have other questions or needs for the event.'
                  />
                )}

                {(this.props.place === 0 || this.props.place === 6) && (
                  <>
                    <Action
                      date='Thursday, Sept. 26th'
                      time='7:00 pm'
                      city='Corvalis'
                      title='Climate Science Poster Making Session'
                      location='Autzen Room Valley Library, Oregon State University, Corvallis'
                      locationUrl='https://www.google.com/maps/dir//The+Valley+Library,+201+SW+Waldo+Pl,+Corvallis,+OR+97331/@44.5650778,-123.2782296,17z/data=!4m16!1m6!3m5!1s0x54c040bebec810b9:0xc5afd24fd4c0d3bb!2sThe+Valley+Library!8m2!3d44.565074!4d-123.2760409!4m8!1m0!1m5!1m1!1s0x54c040bebec810b9:0xc5afd24fd4c0d3bb!2m2!1d-123.2760409!2d44.565074!3e3'
                      description='Combine science and art to create your own poster for the march and rally. With OSU climate scientist Karen Shell and climate change ecologist Jillian Gregg.'
                    />

                    <Action
                      date='Thursday, Sept. 26th'
                      time='6:00 pm'
                      city='Corvalis'
                      title='Current and Future Impacts of Climate Change'
                      location='Autzen Room Valley Library, Oregon State University, Corvallis'
                      locationUrl='https://www.google.com/maps/dir//The+Valley+Library,+201+SW+Waldo+Pl,+Corvallis,+OR+97331/@44.5650778,-123.2782296,17z/data=!4m16!1m6!3m5!1s0x54c040bebec810b9:0xc5afd24fd4c0d3bb!2sThe+Valley+Library!8m2!3d44.565074!4d-123.2760409!4m8!1m0!1m5!1m1!1s0x54c040bebec810b9:0xc5afd24fd4c0d3bb!2m2!1d-123.2760409!2d44.565074!3e3'
                      description='A scientific presentation and discussion with OSU climate scientist Andreas Schmittner and colleagues.'
                    />

                    <Action
                      date='Thursday, Sept. 26th'
                      time='4:00 pm'
                      city='Corvalis'
                      title='Divest from Chase Bank Demonstration'
                      location='Corvallis'
                      locationUrl='https://www.google.com/maps/dir//Corvallis,+OR/@44.5630283,-123.3185559,13z/data=!4m17!1m7!3m6!1s0x54c0409daa14d77d:0xd70d808f22bdc0be!2sCorvallis,+OR!3b1!8m2!3d44.5645659!4d-123.2620435!4m8!1m0!1m5!1m1!1s0x54c0409daa14d77d:0xd70d808f22bdc0be!2m2!1d-123.2620435!2d44.5645659!3e3'
                      primary='https://corvallisclimateaction.weebly.com/week-of-action.html'
                      description='Legally demonstrate outside Chase Bank branch on public sidewalk at corner of Buchanan and Kings Blvd. "Move your money to local banks and credit unions." "Chase Bank: #1 World Funder of Climate Destruction."'
                    />
                  </>
                )}
              </Day>
            )}

          {this.props.place !== 2 && this.props.place !== 5 && (
            <Day day='Friday' date='Sept. 27th'>
              {(this.props.place === 0 || this.props.place === 1) && (
                <>
                  <Action
                    date='Friday, Sept. 27th'
                    title="L'eau Est La Vie West Coast Tour Stop"
                    location='PSU Native American Student & Community Center (710 SW Jackson St, Portland, OR 97201)'
                    time='7:00 pm - 9:00 pm'
                    city='Portland'
                    locationUrl='https://www.google.com/maps/dir//Native+American+Student+and+Community+Center,+PSU+Native+American+Student+and+Community+Center,+710+SW+Jackson+St,+Portland,+OR+97201/@45.5092918,-122.6877696,17z/data=!4m16!1m6!3m5!1s0x54950a14f636108b:0xd84cd8f702789982!2sNative+American+Student+and+Community+Center!8m2!3d45.5092881!4d-122.6855809!4m8!1m0!1m5!1m1!1s0x54950a14f636108b:0xd84cd8f702789982!2m2!1d-122.6855809!2d45.5092881!3e3'
                    primary='https://www.facebook.com/events/1435406046621633/'
                    secondary='https://www.gofundme.com/f/LELVC'
                    secondaryTxt='DONATE'
                    description='Join Cherri Foytlin, Anne White Hat and Mark Tilsen of the L’eau Est La Vie Camp to learn firsthand accounts from years of Indigenous-led resistance to pipelines. Three of the most dangerous organizers on Turtle Island will share how they continue to fight back against Energy Transfer Partners, build community resiliency in the Gulf South and their visions for the future. This tour happens simultaneously with a growing wave of climate action. Come build community and connect with Cherri, Anne, and Mark during this critical moment. Bonus special screening of Mutual Aid Media’s film “L’eau Est La Vie From Standing Rock to the Swamp! $20 suggested donation at the door. All funds go the L’eau Est La Vie Camp and its projects. NO ONE TURNED AWAY FOR LACK OF FUNDS.'
                  />

                  <Action
                    date='Friday, Sept. 27th'
                    title='Memorial for Endangered Salmon'
                    location='Wallace Marine Park West Salem (200 Glen Creek Rd NW, Salem, OR 97304)'
                    time='5:00 pm - 7:00 pm'
                    city='Salem'
                    locationUrl='https://google.com/maps/dir//Wallace+Marine+Park+Softball+Complex,+200+Glen+Creek+Rd+NW,+Salem,+OR+97304/@44.9536412,-123.0464726,17z/data=!4m16!1m6!3m5!1s0x54bfffa5c1762495:0x88da4d3e94fb8b5b!2sWallace+Marine+Park+Softball+Complex!8m2!3d44.9536374!4d-123.0442839!4m8!1m0!1m5!1m1!1s0x54bfffa5c1762495:0x88da4d3e94fb8b5b!2m2!1d-123.0442839!2d44.9536374!3e3'
                    primary='https://actionnetwork.org/events/climate-strike-memorial-for-endangered-salem-sept-27'
                    description='As the temperatures rise, the waters warm, and habitats are destroyed, we are losing too many of our relations! Join our funeral procession and memorial ceremony for the salmon who once ran the waters of our Salem creeks, and who are now facing global extinction. Bring your prayers, songs, instruments, flowers, and pictures for a time of remembrance,m healing and gathering strength. Meet at Wallace Marine Park for the funeral procession over the bike/pedestrian bridge or come directly to Riverfront Park to participate in the memorial ceremony. 

                  Led by Salem DSA’s Ecosocialist Working Group https://www.facebook.com/salemoregondsa  partnering with 350 Salem OR'
                  />

                  <Action
                    date='Friday, Sept. 27th'
                    title="it's About Time: Act Now on Climate Crisis! Rally and street theatre."
                    location='Portland City Hall (1221 SW 4th St)'
                    time='12:00 pm - 2:00 pm'
                    city='Portland'
                    locationUrl='https://www.google.com/maps/dir//Portland+City+Hall,+1221+SW+4th+Ave,+Portland,+OR+97204/@45.5148142,-122.6812974,17z/data=!4m17!1m7!3m6!1s0x5495a75d14649dbd:0xeeeadf8598b84762!2sPortland+City+Hall,+1221+SW+4th+Ave,+Portland,+OR+97204!3b1!8m2!3d45.5148105!4d-122.6791087!4m8!1m0!1m5!1m1!1s0x5495a75d14649dbd:0xeeeadf8598b84762!2m2!1d-122.6791087!2d45.5148105!3e3'
                    primary='https://www.facebook.com/events/640818946446618/'
                    description="Sept. 27,Friday Noon action at Portland City Hall, 1221 SW 4th St. It's About Time:Act Now on Climate Crisis!  This is the end of a week of climate actions and WE ARE PUTTING THE CITY ON NOTICE: we are NOT going away and we are holding the city accountable to put forward concrete actions with real timelines to reach net zero fossil fuel emissions by 2030. Join Extinction Rebellion, 350pdx, and other climate activists in pushing the City towards real action."
                  />

                  <Action
                    date='Friday, Sept. 27th'
                    title="it's About Time: Act Now on Climate Crisis! Rally and street theatre."
                    location='19000 NE Sandy Blvd, Gresham, OR'
                    time='3:30 pm - 5:00 pm'
                    city='Gresham'
                    locationUrl='https://www.google.com/maps/dir//19000+NE+Sandy+Blvd,+Portland,+OR+97230/@45.5437917,-122.4690289,17z/data=!4m17!1m7!3m6!1s0x5495a2fa4541ca1b:0xe246daa142e82c3e!2s19000+NE+Sandy+Blvd,+Portland,+OR+97230!3b1!8m2!3d45.543788!4d-122.4668402!4m8!1m0!1m5!1m1!1s0x5495a2fa4541ca1b:0xe246daa142e82c3e!2m2!1d-122.4668402!2d45.543788!3e3'
                    description='Global Climate Strike Actions – Boeing Protest Rallies
                    “BOEING HELPED KILL THE CLEAN ENERGY JOBS BILL TO SAVE A FEW BUCKS - RISKING OUR CHILDRENS’ FUTURE”
                    As part of the Global Climate Strike week of action, several groups of concerned citizens are staging rallies to call public attention to the role Boeing played in killing the Clean Energy Jobs bill, HB 2020.  Multiple credible reports show that Boeing pressured Senator Laurie Monnes Anderson, who had previously supported the bill, to both delay action on the bill and following the walkout of the Senate Republicans to withdraw her support for the bill.  We believe these actions by Boeing were both contrary to their stated policy and detrimental to the health and wellbeing of the environment, community and state of Oregon.
                    There will be two events: 
                    1.	Tuesday September 24, 1-3 pm at Gresham City Hall, 1333 NW Eastman Parkway, and 
                    2.	Friday September 27, 3:30-5 pm at the entrance to the Boeing Commercial Airplanes Facility on 19000 NE Sandy Blvd.
                    The Boeing Corporation claims to be committed to meeting climate change challenges head-on by working closely with government agencies, customers, stakeholders and research facilities worldwide to develop solutions that help protect the environment. Their actions related to the Clean Energy Jobs bill are inconsistent with these claims.
                    The event will be a peaceful gathering of concerned citizens and elected officials to:
                    1.	Registering our deep disappointment in Boeing’s actions regarding HB2020,
                    2.	Urge Boeing and Senator Monnes Anderson to support a future climate bills here in the Oregon, and
                    3.	Highlight the urgency of the looming climate crisis – and the need for immediate action to both mitigate the impending impacts and avoid triggering an irreversible, run-away climate event.
                    OLCV Metro Climate Action Team and the 
                    Climate Action Team of the Multnomah Democratic Party.'
                  />
                </>
              )}
              {(this.props.place === 0 || this.props.place === 3) && (
                <Action
                  date='Friday, Sept. 27th'
                  title='Global Climate Strike Rally'
                  time='12:00 pm - 1:00 pm'
                  city='Astoria'
                  location='Marine Drive (East of 16th Street)'
                  locationUrl='https://www.google.com/maps/dir//Marine+Dr,+Astoria,+OR+97103/@46.1891733,-123.8274074,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54937b48c041b1f5:0x9c252fbf03e74c17!2m2!1d-123.8252187!2d46.1891733'
                />
              )}
              {(this.props.place === 0 || this.props.place === 4) && (
                <Action
                  date='Friday, Sept. 27th'
                  time='12:00 pm - 3:00 pm'
                  city='Eugene'
                  title='Mass Die-In for Climate at Chase Bank'
                  location='Starting at 405 E 8th Street, Eugene, Oregon'
                  locationUrl='https://www.google.com/maps/dir//405+E+8th+Ave,+Eugene,+OR+97401/@44.0517847,-123.0880381,17z/data=!4m17!1m7!3m6!1s0x54c11e1699b232b5:0xad82b672cfe73702!2s405+E+8th+Ave,+Eugene,+OR+97401!3b1!8m2!3d44.0517809!4d-123.0858494!4m8!1m0!1m5!1m1!1s0x54c11e1699b232b5:0xad82b672cfe73702!2m2!1d-123.0858494!2d44.0517809!3e3'
                  primary='https://www.facebook.com/events/440675800128394/?active_tab=about'
                  description='The climate crisis is the largest threat to our world and futures as we know it. Young people refuse to sit by as our future is destroyed around us. What we can do in this moment is demonstrate that people are no longer willing to continue with business as usual. The urgency of the climate crisis requires a new approach and a just response centered on human rights, equity, and justice. Join us as we march down to Chase Bank, the largest funder of fossil fuel projects in the world, including the local Jordan Cove Energy Project, and perform a massive Die In. We will wrap up the week of events with amazing social justice musicians in Kesey Square. Are you ready to take action? 
                    Would you like to learn about how we will pull off this non-violent direct action? Then please join us at Saturday @ 9am at the First Methodist Church for a free training!!'
                />
              )}

              {(this.props.place == 0 || this.props.place == 6) && (
                <>
                  <Action
                    date='Friday, Sept. 27th'
                    time='3:00 pm'
                    city='Corvalis'
                    title='Climate March and Rally'
                    location='Riverfront Park Corvallis'
                    locationUrl='https://www.google.com/maps/dir//Riverfront+Commemorative+Park,+2+NW+1st+St,+Corvallis,+OR+97333/@44.5655318,-123.2597094,17z/data=!4m16!1m6!3m5!1s0x54c040ec8ef02a59:0x46334baa1c5a6111!2sRiverfront+Commemorative+Park!8m2!3d44.565528!4d-123.2575207!4m8!1m0!1m5!1m1!1s0x54c040ec8ef02a59:0x46334baa1c5a6111!2m2!1d-123.2575207!2d44.565528!3e3'
                    primary='https://corvallisclimateaction.weebly.com/march--rally.html'
                    description='
                  2:45 pm: Gather at meeting locations
                  3:00 pm: Marches begin 
                  3:45 pm: Rally Starts at Riverfront Park
                  5:00 pm:  Disperse
            Location: Community Members gather at 2:45pm at 3 locations around downtown, and march to Riverfront Park: 
            1. Faith groups gather at First United Methodist Church, 1165 Monroe (inside the front doors).
            2. OSU students, faculty, and staff gather at Memorial Union on OSU campus.
            3. Business and other community people gather at corner of 9th St. and Madison Ave., just south of the former site of the Multicultural Literacy Center.
                   The three marches will converge at the Riverfront Park. Expect to march approx. 25 min.      
                   Marchers are encouraged to make their own signs for the march and rally.
            Fighting the climate breakdown is about much more than emissions and scientific metrics – it’s about fighting for a just and sustainable world that works for everyone. If we are going to fight for this, we need everyone. Join the March and Rally to show how many in our community want a just transition to a livable future for all of human society.'
                  />

                  <Action
                    date='Friday, Sept. 27th'
                    time='6:30 pm'
                    city='Corvalis'
                    title='Climate Action Film Fest'
                    location='Corvallis'
                    locationUrl='https://www.google.com/maps/dir//Corvallis,+OR/@44.5630283,-123.3185559,13z/data=!4m17!1m7!3m6!1s0x54c0409daa14d77d:0xd70d808f22bdc0be!2sCorvallis,+OR!3b1!8m2!3d44.5645659!4d-123.2620435!4m8!1m0!1m5!1m1!1s0x54c0409daa14d77d:0xd70d808f22bdc0be!2m2!1d-123.2620435!2d44.5645659!3e3'
                    primary='https://corvallisclimateaction.weebly.com/week-of-action.html'
                    description='Before the Flood (2017, 96 mins.), at First Congregational Church, 4515 SW West Hills Road, Corvallis.'
                  />
                </>
              )}
            </Day>
          )}

          {(this.props.place === 0 || this.props.place === 1) && (
            <Day day='Sunday' date='Sept. 29th'>
              <Action
                date='Sunday, Sept. 29th'
                time='12:00 pm - 2:00 pm'
                city='Portland'
                title='Climate Strike for Immigrant Justice'
                location='Tom McCall Waterfront Park'
                locationUrl='https://www.google.com/maps/dir//Tom+McCall+Waterfront+Park,+98+SW+Naito+Pkwy,+Portland,+OR+97204/@45.5227573,-122.6721858,17z/data=!4m16!1m6!3m5!1s0x54950a0764850d75:0xfd20dac4cfa02bff!2sTom+McCall+Waterfront+Park!8m2!3d45.5227536!4d-122.6699971!4m8!1m0!1m5!1m1!1s0x54950a0764850d75:0xfd20dac4cfa02bff!2m2!1d-122.6699971!2d45.5227536!3e3'
                primary='https://www.facebook.com/events/505471230028851/'
                description="Join us in making a stunning visual statement in support of the Global Climate Strike! We will come together to focus on the connection between climate crisis and the forced migration it's causing around the world! 

          Earlier this year, Greta Thunberg and 46 other youth activists issued a call to everyone around the globe to join them in a massive climate strike on September 20th. The Youth Climate Strike will kick-off a week of mass, escalated actions between Sept 20-28 and Extinction Rebellion has been invited to pull together a coalition of community organizations to highlight and educate about the connection between climate disasters, migration and Indigenous rights - while helping to end the migrant detention camps and pressure the government to declare a climate emergency.
          
          In response to this call, on September 22nd the local CLIMATE JUSTICE = IMMIGRANT JUSTICE /XR affinity group will be making  a big, bold, and impactful statement on how climate change is driving immigration. Join us in a community art action converging on the Hawthorne Bridge at noon! We will collaborate together to install a stunning artistic visual and rally on the Waterfront with live music, speakers, costumes and art!"
              />
            </Day>
          )}
        </Slider>
      </Flex>
    )
  }
}
