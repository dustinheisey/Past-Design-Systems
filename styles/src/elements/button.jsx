/** @jsx jsx */
import { jsx, Box } from 'styles'

const styles = (
  variant = 'primary',
  radius = 'normal',
  size = 'md'
) => ({
  display: ['flex', 'inline-flex'],
  alignItems: 'baseline',
  justifyContent: 'center',
  borderWidth: '1px',
  borderStyle: 'solid',
  fontFamily: 'text',
  fontSize:
    (size === 'sm' && 'xs') ||
    (size === 'md' && 'sm') ||
    (size === 'lg' && 'md'),
  fontWeight: 'semibold',
  textDecoration: 'none',
  verticalAlign: 'middle',
  transition: 'all 0.3s',
  py:
    (size === 'sm' && 'xs') ||
    (size === 'md' && 'xs') ||
    (size === 'lg' && 'sm'),
  px:
    (size === 'sm' && 'xs') ||
    (size === 'md' && 'sm') ||
    (size === 'lg' && 'md'),
  width: 'auto',
  cursor: 'pointer',
  variant: `button.${variant}`,
  borderRadius: radius
})

export const Button = ({
  prefix,
  suffix,
  children,
  as,
  radius,
  size,
  variant,
  ...props
}) => (
  <Box
    as={as}
    {...(as === 'a'
      ? "target='_blank' rel='noopener noreferrer'"
      : {})}
    sx={{
      ...styles(variant, radius, size)
    }}
    {...props}
  >
    {prefix}
    {children}
    {suffix}
  </Box>
)
