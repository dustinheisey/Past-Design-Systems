/** @jsx jsx */
import { jsx } from 'theme'
import { Flex, Box } from 'layout'
import { Btn, Link } from 'elements'
import Input from '../input'
export default () => (
  <Flex px={[1, 2, 4]}>
    <Box py={[4, 0, 4]} px={3} pb={0} color='uiDark'>
      <h1 sx={{ mb: 3 }}>Questions? Comments? Ideas?</h1>
      <Box pb={2}>
        <p sx={{ maxWidth: 10 }}>
          Follow the PDX Climate Strike on{' '}
          <Link
            a
            color='accent'
            to='https://www.facebook.com/events/497186087772656/'>
            Facebook
          </Link>
          , and{' '}
          <Link a color='accent' to='https://twitter.com/PortlandStrike'>
            Twitter
          </Link>
          , and{' '}
          <Link
            a
            color='accent'
            to='https://www.instagram.com/portlandclimatestrike/'>
            Instagram.
          </Link>
        </p>
        <p sx={{ maxWidth: 10 }}>
          If you have any ideas, need us to answer some questions, or want to
          add your organization's social links to this page, fill the form below
          and we will help you ASAP! If you want to get more involved in the PDX
          Climate Strike, then please fill out{' '}
          <Link
            a
            color='accent'
            to='https://docs.google.com/forms/d/e/1FAIpQLSfQlyk_tA4p8rQLyP9bctLpg9uhk0_pYSwrbESV_b2YoyRc8w/viewform'>
            this form
          </Link>{' '}
          to start volunteering!
        </p>
      </Box>
    </Box>
    <Box pt={2} px={3} width={10}>
      <form
        name='Contact Form'
        method='POST'
        action='/contact-successful/'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}>
        <input type='hidden' name='form-name' value='Contact Form' />
        <p hidden>
          <label htmlFor='bot-field'>
            Don’t fill this out:
            <input name='bot-field' id='bot-field' />
          </label>
        </p>

        <Flex width={10} row mb={2} m='auto'>
          <Input type='text' name='Name' id='name' auto='name' optional />
          <Input
            type='email'
            name='Email Address'
            id='email'
            auto='email'
            last
            required
          />
        </Flex>
        <Flex width={10} row mb={2} m='auto'>
          <Input type='text' name='Phone Number' id='tel' auto='tel' optional />
          <Input
            type='text'
            name='Zip Code'
            id='zip'
            auto='postal-code'
            last
            optional
          />
        </Flex>
        <Input area name='Message' id='message' required />
        <Btn mt={2} type='submit' action>
          SUBMIT
        </Btn>
      </form>
    </Box>
  </Flex>
)
