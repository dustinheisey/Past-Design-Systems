/** @jsx jsx */
import { jsx } from 'theme-ui'

export const Box = ({ children, ...props }) => (
  <div
    sx={{
      ...props
    }}
  >
    {children}
  </div>
)
