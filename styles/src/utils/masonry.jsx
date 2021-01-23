import { React, Box } from 'styles'

export const Masonry = ({ col, gap, as, children, ...props }) => (
  <Box columns={col} gap={gap} as={as} {...props}>
    {children}
  </Box>
)
