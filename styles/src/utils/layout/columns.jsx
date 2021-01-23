import { React, Box } from 'styles'

export const Columns = ({
  gap,
  as,
  collapseBelow,
  children,
  ...props
}) => (
  <Box columns={col} gap={gap} as={as} {...props}>
    {children}
  </Box>
)

export const Column = ({ col, gap, as, children, ...props }) => (
  <Box columns={col} gap={gap} as={as} {...props}>
    {children}
  </Box>
)
