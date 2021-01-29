/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Styled } from 'styles'

const StyledBox = Styled.div``

export const Box = ({
  children,
  as,
  m,
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
  p,
  pt,
  pb,
  pl,
  pr,
  px,
  py,
  w,
  h,
  gap,
  color,
  bg,
  ...props
}) => (
  <StyledBox
    sx={{
      m,
      mt,
      mb,
      ml,
      mr,
      mx,
      my,
      p,
      pt,
      pb,
      pl,
      pr,
      px,
      py,
      width: w,
      height: h,
      color,
      backgroundColor: bg,
    }}
    as={as || 'div'}
    {...props}
  >
    {children}
  </StyledBox>
)
