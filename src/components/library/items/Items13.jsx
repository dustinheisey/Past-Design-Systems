import React from 'react'
import styled from 'styled-components'
import Grid2 from '../grids/Grid2'
import LinkInternal from '../../elements/links/Internal'

const StyledContainer = styled(Grid2)``
const StyledSection = styled.div``
const StyledHeading = styled.h3``
const StyledText = styled.p``

const Items13 = ({
  image1,
  image2,
  heading1,
  heading2,
  text1,
  text2,
  link1,
  link2,
  linkText1,
  linkText2
}) => (
  <StyledContainer>
    <StyledSection>
      {image1}
      <StyledHeading>{heading1}</StyledHeading>
      <StyledText>{text1}</StyledText>
      <LinkInternal link={link1}>{linkText1}</LinkInternal>
    </StyledSection>
    <StyledSection>
      {image2}
      <StyledHeading>{heading2}</StyledHeading>
      <StyledText>{text2}</StyledText>
      <LinkInternal link={link2}>{linkText2}</LinkInternal>
    </StyledSection>
  </StyledContainer>
)

export default Items13
