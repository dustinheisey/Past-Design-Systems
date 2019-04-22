import React from 'react'
import styled from 'styled-components'
import Grid4 from '../grids/Grid4'
import LinkInternal from '../../elements/links/Internal'

const StyledContainer = styled(Grid4)``
const StyledSection = styled.div``
const StyledHeading = styled.h3``
const StyledText = styled.p``

const Items5 = ({
  image1,
  image2,
  image3,
  image4,
  heading1,
  heading2,
  heading3,
  heading4,
  text1,
  text2,
  text3,
  text4,
  link1,
  link2,
  link3,
  link4,
  linkText1,
  linkText2,
  linkText3,
  linkText4
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
    <StyledSection>
      {image3}
      <StyledHeading>{heading3}</StyledHeading>
      <StyledText>{text3}</StyledText>
      <LinkInternal link={link3}>{linkText3}</LinkInternal>
    </StyledSection>
    <StyledSection>
      {image4}
      <StyledHeading>{heading4}</StyledHeading>
      <StyledText>{text4}</StyledText>
      <LinkInternal link={link4}>{linkText4}</LinkInternal>
    </StyledSection>
  </StyledContainer>
)

export default Items5
