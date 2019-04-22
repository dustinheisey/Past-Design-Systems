import React from 'react'
import styled from 'styled-components'
import Internal from '../../../elements/links/Internal'

const StyledContainer = styled.section``
const StyledHeading = styled.h1``

const Contents7 = ({ heading, link, linkText }) => (
  <StyledContainer>
    <StyledHeading>{heading}</StyledHeading>
    <Internal link={link}>{linkText}</Internal>
  </StyledContainer>
)

export default Contents7
