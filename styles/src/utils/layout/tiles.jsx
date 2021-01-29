/** @jsx jsx */
import { jsx, Box } from 'styles'

export const Tiles = ({
  min = '200px',
  gap,
  as,
  justify = 'center',
  align = 'center',
  children,
  ...props
}) => (
  <Box
    sx={{
      gridTemplateColumns: `repeat(auto-fit, minmax(${min}, 1fr))`,
      display: 'grid',
      gridGap: gap,
      justifyItems: justify,
      alignItems: align
    }}
    {...props}
  >
    {children}
  </Box>
)
