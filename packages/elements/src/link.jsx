/** @jsx jsx */
import { jsx, Link } from 'theme'

export default ({
  children,
  to,
  a,
  inverse,
  accent,
  hoverPrimary,
  hoverAccent,
  hoverInverse,
  success,
  warning,
  danger,
  info,
  left,
  right,
  center,
  active,
  download,
  ...props
}) =>
  (a && (
    <a
      href={to}
      target='_blank'
      rel='noopener noreferrer'
      download={download}
      sx={{
        textDecoration: 'none',
        display: 'inlineBlock',
        color:
          (inverse && 'textLight') ||
          (success && 'success') ||
          (warning && 'warning') ||
          (danger && 'danger') ||
          (info && 'info') ||
          'primary',
        textAlign:
          (left && 'left') ||
          (center && 'center') ||
          (right && 'right') ||
          'left',
        ':hover': {
          color:
            (hoverPrimary && 'primary') ||
            (hoverInverse && 'textLight') ||
            (hoverAccent && 'accent') ||
            'primary'
        },
        ...props
      }}>
      {children}
    </a>
  )) || (
    <Link
      to={to}
      sx={{
        textDecoration: 'none',
        display: 'inlineBlock',
        color:
          (inverse && 'textLight') ||
          (accent && 'accent') ||
          (success && 'success') ||
          (warning && 'warning') ||
          (danger && 'danger') ||
          (info && 'info') ||
          'primary',
        textAlign:
          (left && 'left') ||
          (center && 'center') ||
          (right && 'right') ||
          'left',
        transition: 'all 0.3s',
        ':hover': {
          color:
            (hoverPrimary && 'primary') ||
            (hoverInverse && 'textLight') ||
            (hoverAccent && 'accent') ||
            'primary'
        },
        mb: '1.5vmin',
        ...props
      }}
      activeStyle={{ color: '#E9A41E' }}>
      {children}
    </Link>
  )
