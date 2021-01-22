/** @jsx jsx */
import { jsx, Box } from 'theme'

export const Areas = ({
  areas,
  gap,
  children,
  ...props
}) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateAreas: areas,
      gridGap: theme => theme.space[gap],
      ...props
    }}
  >
    {children}
  </Box>
)

export const Area = ({ area, children, ...props }) => (
  <Box
    sx={{
      gridArea: area,
      ...props
    }}
  >
    {children}
  </Box>
)
