/** @jsx jsx */
import { jsx, Styled } from 'theme'

const StyledSVG = Styled.svg`
`
export default ({
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
