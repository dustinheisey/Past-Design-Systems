/** @jsx jsx */
import { jsx, Box } from 'styles'

export const Columns = ({
  variant,
  gap = 'md',
  children,
  ...props
}) => (
  <Box
    sx={{
      display: 'grid',
      gridGap: gap,
      variant: `columns.${variant}`
    }}
    {...props}
  >
    {children}
  </Box>
)
