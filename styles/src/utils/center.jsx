import { React, Box } from 'styles'

export const Stack = ({
  gap,
  as,
  children,
  ...props
}) => (
  <Box
    as={as}
    display='grid'
    gridGap={gap}
    justifyItems={justify}
    alignItems={align}
    {...props}
  >
    {children}
  </Box>
)
