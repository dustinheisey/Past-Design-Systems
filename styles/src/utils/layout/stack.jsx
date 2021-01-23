/** @jsx jsx */
import { jsx, Box } from 'styles'

export const Stack = ({
  gap,
  align = 'center',
  justify = 'left',
  children,
  ...props
}) => (
  <Box
    sx={{
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
