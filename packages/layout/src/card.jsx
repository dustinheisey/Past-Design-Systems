import { React, Styled } from 'theme'
import Box from './box'

const Card = Styled(Box)`
  border: 1px solid transparent;
`

export default ({ img, imgAlt, title, children }) => (
  <Card padding={5}>
    {img && <img src={img} alt={imgAlt} />}
    {title && <h2>{title}</h2>}
    {children}
  </Card>
)
