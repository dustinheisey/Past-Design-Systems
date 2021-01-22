/** @jsx jsx */
import { jsx } from 'theme'

export default ({ border, color, ...props }) => (
  <div
    sx={{
      ...props,
      height: 0,
      border:
        (border &&
          (theme => `1px solid ${theme.colors.text}`)) ||
        'none',
      borderColor: color || (theme => theme.colors.text)
    }}
  />
)
