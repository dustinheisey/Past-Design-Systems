/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

const StyledSVG = styled.svg`
`
export const SVG = ({
  src,
  xs,
  sm,
  md,
  lg,
  xl,
  w,
  ...props
}) => (
  <StyledSVG
    as={src}
    sx={{
      ...props,
      height: 'auto',
      width:
        w ||
        (xs && '2vmin') ||
        (sm && '4vmin') ||
        (md && '8vmin') ||
        (lg && '16vmin') ||
        (xl && '32vmin') ||
        '100%'
    }}
  />
)
