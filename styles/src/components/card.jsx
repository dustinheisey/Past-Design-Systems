import { Styled, React, Box } from 'styles'

const StyledCard = Styled.Box`
  border: 1px solid transparent;
`

export const Card = ({ img, imgAlt, title, children }) => (
  <StyledCard p={5}>
    {img && <img src={img} alt={imgAlt} />}
    {title && <h2>{title}</h2>}
    {children}
  </StyledCard>
)
