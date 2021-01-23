/** @jsx jsx */
import { jsx, Box } from 'styles'

export const Inline = ({
  align = 'center',
  justify = 'flex-start',
  children,
  ...props
}) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: align,
      justifyContent: justify
    }}
    {...props}
  >
    {children}
  </Box>
)
