/** @jsx jsx */
import { Box } from 'layout'
import { jsx } from 'theme'
import { Link } from 'elements'

export default () => (
  <Box mb={[0, 0, 3]}>
    <Box px={[4, 3, 4]} py={4} width={10} bg='uiDark' color='uiLight'>
      <h1>Spread The Word</h1>
      <p>
        To make this the biggest climate mobilization in history, we need to
        make sure the people of Oregon know about it!
      </p>
      <Link
        a
        color='accent'
        to='https://docs.google.com/document/d/1-uSllJ0EiTcuAFOeVsfI0GtlWm3jJSujUHA139DfD_A/edit'>
        PDX Strike Outreach Guide
      </Link>
      <p sx={{ mt: 2 }}>
        Here are some ways you can spread the word about the Climate Strike:
        <ul sx={{ mt: 2 }}>
          <li>Giving out flyers on the street and at busy events</li>
          <li>Hanging posters in businesses and community centers</li>
          <li>Writing letters to the editor</li>
          <li>
            Asking neighborhood associations to include the Strike in their
            newsletter
          </li>
          <li>Talking to faith groups about engaging their congregations</li>
          <li>Getting local businesses to put posters in their window</li>
          <li>Sharing about the Climate Strike on social media</li>
          <li>
            Phoning or texting your network to let them know about the Climate
            Strike
          </li>
        </ul>
      </p>
    </Box>
    {/* <img
      src={Img}
      sx={{
        height: 10,
        width: 10,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    /> */}
  </Box>
)
