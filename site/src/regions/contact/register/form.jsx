/** @jsx jsx */
import { jsx } from 'theme'
import { Flex, Box } from 'layout'
import { Btn } from 'elements'
import Input from '../input'
export default () => (
  <Flex px={[1, 2, 4]}>
    <Box p={[3, 2, 4]} pb={0} color='uiDark'>
      <h1 sx={{ textAlign: 'left' }}>Register Your Event Here</h1>
    </Box>
    <Box pt={[2, 0, 2]} px={3} width={10}>
      <form
        name='Register Event'
        method='POST'
        action='/register-your-event-successful/'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}>
        <input type='hidden' name='form-name' value='Register Event' />
        <p hidden>
          <label htmlFor='bot-field'>
            Don’t fill this out:
            <input name='bot-field' />
          </label>
        </p>

        <Flex width={10} row mb={2} m='auto'>
          <Input type='text' name='Event Name' id='eventName' required />
          <Input type='text' name='Location' id='location' required />
          <Input type='date' name='Date' id='date' required />
          {/* <Input type='time' name='Time + AM/PM' id='time' last required /> */}
          <Box flex={['auto', '1']} width={10}>
            <label
              htmlFor='time'
              sx={{
                display: 'flex',
                width: 10,
                flexDirection: 'column',
                alignItems: 'flex-start',
                my: 2
              }}>
              <h4 sx={{ mb: 1 }}>
                Time <span sx={{ color: 'accent' }}>+</span> AM/PM
              </h4>
              <input
                type='time'
                name='Time'
                id='time'
                required
                sx={{
                  border: '1px solid #E6E4DB',
                  outline: 'none',
                  borderRadius: '5px',
                  width: '100%',
                  boxShadow: 'none'
                }}
              />
            </label>
          </Box>
        </Flex>
        <Flex width={10} row mb={2} m='auto'>
          <Input
            type='text'
            name='Contact Person'
            id='contactPerson'
            optional
          />
          <Input
            type='text'
            name='Phone Number'
            id='contactNumber'
            auto='tel'
            optional
          />
          <Input
            type='email'
            name='Email'
            id='contactEmail'
            auto='email'
            required
          />
          <Input type='url' name='Link to Event' id='eventLink' last optional />
        </Flex>
        <Input area name='Description' id='description' required />
        <Btn mt={2} type='submit' action>
          REGISTER EVENT
        </Btn>
      </form>
    </Box>
  </Flex>
)
