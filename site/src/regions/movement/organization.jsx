/** @jsx jsx */
import { Flex } from 'layout'
import { Link } from 'elements'
import { jsx } from 'theme'

export default ({ title, description, link, src }) => (
  <Flex alignLeft width={10} height={10} p={3} bg='uiLight' mb={3}>
    {src && <img src={src} alt={title} sx={{ mb: 3, width: 10 }} />}
    <h3 sx={{ fontSize: ['26px', '26px', '36px'] }}>{title}</h3>
    {description && <p>{description}</p>}
    <Link color='accent' a to={link}>
      Learn More
    </Link>
  </Flex>
)
