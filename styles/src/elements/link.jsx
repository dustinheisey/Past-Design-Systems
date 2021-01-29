/** @jsx jsx */
import { jsx, Box } from 'styles'
import { Link as GatsbyLink } from 'gatsby'

const styles = (variant, justify) => ({
  textDecoration: 'none',
  display: 'inlineBlock',
  variant: `link.${variant}`,
  textAlign: justify
})

export const Link = ({
  children,
  to,
  as = { GatsbyLink },
  inverse,
  justify,
  download,
  variant,
  ...props
}) => (
  <Box
    as={as}
    {...(as === 'a'
      ? `href=${to} target="_blank" rel="noopener noreferrer"`
      : `to=${to}`)}
    download={download}
    sx={{ ...styles(variant, justify) }}
    {...props}
  >
    {children}
  </Box>
)
