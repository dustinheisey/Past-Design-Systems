import React from 'react';
import styled from '@emotion/styled';
import {Box} from './box'

const StyledCard = styled(Box)`
  border: 1px solid transparent;
`

export const Card = ({ img, imgAlt, title, children }) => (
  <StyledCard padding={5}>
    {img && <img src={img} alt={imgAlt} />}
    {title && <h2>{title}</h2>}
    {children}
  </StyledCard>
)
