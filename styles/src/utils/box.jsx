/** @jsx jsx */
import { jsx } from 'theme-ui'
import {Styled} from 'styles'

const StyledBox = Styled.div``;

export const Box = ({ children, as, ...props }) => (
  <StyledBox
    sx={{
      ...props
    }}
    as={as}
  >
    {children}
  </StyledBox>
)
