/** @jsx jsx */
import { jsx } from 'theme'
import { Flex } from 'layout'
import { Link, Btn } from 'elements'

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'

export default ({
  date,
  time,
  title,
  city,
  location,
  locationUrl,
  description,
  primaryTxt,
  secondaryTxt,
  primary,
  secondary,
  secondaryLink
}) => (
  <AccordionItem sx={{ mb: 1 }}>
    <AccordionItemHeading>
      <AccordionItemButton
        sx={{
          color: 'uiLight',
          bg: 'transparent',
          border: 'none',
          px: [0, 2, 2]
        }}>
        <Flex
          row
          alignItems={['flex-start', 'center', 'center']}
          justifyBetween>
          <p sx={{ textAlign: 'left' }}>
            <span sx={{ color: 'accent', fontWeight: '500' }}>
              {city}:&nbsp;
            </span>
            {title}
          </p>
          <p sx={{ color: '#787878' }}>{time}</p>
        </Flex>
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <Flex row justifyBetween>
        <strong>Date:</strong>
        <p>{date}</p>
      </Flex>
      {time && (
        <Flex row justifyBetween>
          <strong>Time:</strong>
          <p>{time}</p>
        </Flex>
      )}
      <Flex row justifyBetween mb={2}>
        <strong>location:</strong>
        <Link a to={locationUrl} color='accent' hoverAccent m={0}>
          {location}
        </Link>
      </Flex>
      {description && (
        <Flex alignLeft>
          <strong>Description:</strong>
          <p sx={{ textAlign: 'left' }}>{description}</p>
        </Flex>
      )}
      {(primary || secondary) && (
        <Flex row justifyRight>
          {primary && (
            <Btn a to={primary} accent mx={(primary && !secondary && 0) || 1}>
              {(primaryTxt && primaryTxt) || <span>RSVP</span>}
            </Btn>
          )}
          {secondary && (
            <Btn
              a={!secondaryLink}
              outline
              inverse
              to={secondary}
              mx={0}
              boxSizing='border-box'>
              {(secondaryTxt && secondaryTxt) || <span>VOLUNTEER</span>}
            </Btn>
          )}
        </Flex>
      )}
    </AccordionItemPanel>
  </AccordionItem>
)
