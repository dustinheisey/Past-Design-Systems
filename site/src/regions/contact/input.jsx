/** @jsx jsx */
/* eslint-disable no-unused-vars */
import { React, jsx } from 'theme'
import { Box } from 'layout'

export default ({
  type,
  area,
  checkbox,
  last,
  name,
  id,
  auto,
  optional,
  required
}) => (
  <>
    {!checkbox && (
      <Box flex={['auto', '1']} width={10} mr={!last && 3}>
        <label
          htmlFor={id}
          sx={{
            display: 'flex',
            width: 10,
            flexDirection: (!checkbox && 'column') || (checkbox && 'row'),
            alignItems: 'flex-start',
            my: 2
          }}>
          <h4 sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
            {name}
            {optional && (
              <em
                sx={{
                  ml: 1,
                  fontSize: '75%',
                  color: '#787878',
                  textTransform: 'capitalize'
                }}>
                - Optional
              </em>
            )}
          </h4>

          {!area && !checkbox && (
            <input
              type={type}
              name={name}
              id={id}
              autoComplete={auto}
              required={required}
              sx={{
                border: '1px solid #E6E4DB',
                outline: 'none',
                borderRadius: '5px',
                width: '100%',
                boxShadow: 'none'
              }}
            />
          )}

          {area && (
            <textarea
              rows='6'
              name={name}
              id={id}
              required={required}
              sx={{
                border: '1px solid #E6E4DB',
                borderRadius: '5px',
                width: '100%'
              }}
            />
          )}
        </label>
      </Box>
    )}
    {checkbox && (
      <Box mb={2}>
        <label
          htmlFor={id}
          style={{
            display: 'flex',
            alignItems: 'center'
          }}>
          <input type='checkbox' name={name} id={id} />
          <Box ml={1} mr={2}>
            {name}
          </Box>
        </label>
      </Box>
    )}
  </>
)
