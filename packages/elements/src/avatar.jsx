/** @jsx jsx */
import { jsx } from 'theme'

export default ({
  round,
  xs,
  sm,
  md,
  lg,
  xl,
  w,
  ...props
}) => (
  <div
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
        '100%',
      borderRadius: (round && '50%') || '5px'
    }}
  >
    {children}
  </div>
)
