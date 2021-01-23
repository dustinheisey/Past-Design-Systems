import { React, Box } from 'styles'

export const Stack = ({ gap, as, justify, children, ...props }) => (
  <Box
    as={as}
    display='grid'
    gap={gap}
    justifyItems={justify}
    {...props}
  >
    {children}
  </Box>
)
