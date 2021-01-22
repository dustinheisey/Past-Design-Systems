/** @jsx jsx */
import { jsx } from 'theme-ui'

export const H1 = ({
  children,
  center,
  right,
  justify,
  weight,
  uppercase,
  capitalize,
  lowercase,
  ...props
}) => (
  <h1
    sx={{
      textAlign:
        (center && 'center') ||
        (right && 'right') ||
        (justify && 'justify') ||
        'left',
      fontWeight: weight,
      textTransform:
        (uppercase && 'uppercase') ||
        (capitalize && 'capitalize') ||
        (lowercase && 'lowercase') ||
        'none',
      ...props
    }}
  >
    {children}
  </h1>
)

export const H2 = ({
  children,
  center,
  right,
  justify,
  weight,
  uppercase,
  capitalize,
  lowercase,
  ...props
}) => (
  <h2
    sx={{
      textAlign:
        (center && 'center') ||
        (right && 'right') ||
        (justify && 'justify') ||
        'left',
      fontWeight: weight,
      textTransform:
        (uppercase && 'uppercase') ||
        (capitalize && 'capitalize') ||
        (lowercase && 'lowercase') ||
        'none',
      ...props
    }}
  >
    {children}
  </h2>
)

export const H3 = ({
  children,
  center,
  right,
  justify,
  weight,
  uppercase,
  capitalize,
  lowercase,
  ...props
}) => (
  <h3
    sx={{
      textAlign:
        (center && 'center') ||
        (right && 'right') ||
        (justify && 'justify') ||
        'left',
      fontWeight: weight,
      textTransform:
        (uppercase && 'uppercase') ||
        (capitalize && 'capitalize') ||
        (lowercase && 'lowercase') ||
        'none',
      ...props
    }}
  >
    {children}
  </h3>
)

export const H4 = ({
  children,
  center,
  right,
  justify,
  weight,
  uppercase,
  capitalize,
  lowercase,
  ...props
}) => (
  <h4
    sx={{
      textAlign:
        (center && 'center') ||
        (right && 'right') ||
        (justify && 'justify') ||
        'left',
      fontWeight: weight,
      textTransform:
        (uppercase && 'uppercase') ||
        (capitalize && 'capitalize') ||
        (lowercase && 'lowercase') ||
        'none',
      ...props
    }}
  >
    {children}
  </h4>
)

export const H5 = ({
  children,
  center,
  right,
  justify,
  weight,
  uppercase,
  capitalize,
  lowercase,
  ...props
}) => (
  <h5
    sx={{
      textAlign:
        (center && 'center') ||
        (right && 'right') ||
        (justify && 'justify') ||
        'left',
      fontWeight: weight,
      textTransform:
        (uppercase && 'uppercase') ||
        (capitalize && 'capitalize') ||
        (lowercase && 'lowercase') ||
        'none',
      ...props
    }}
  >
    {children}
  </h5>
)

export const H6 = ({
  children,
  center,
  right,
  justify,
  weight,
  uppercase,
  capitalize,
  lowercase,
  ...props
}) => (
  <h6
    sx={{
      textAlign:
        (center && 'center') ||
        (right && 'right') ||
        (justify && 'justify') ||
        'left',
      fontWeight: weight,
      textTransform:
        (uppercase && 'uppercase') ||
        (capitalize && 'capitalize') ||
        (lowercase && 'lowercase') ||
        'none',
      ...props
    }}
  >
    {children}
  </h6>
)

export const P = ({
  children,
  center,
  right,
  justify,
  weight,
  uppercase,
  capitalize,
  lowercase,
  ...props
}) => (
  <p
    sx={{
      textAlign:
        (center && 'center') ||
        (right && 'right') ||
        (justify && 'justify') ||
        'left',
      fontWeight: weight,
      textTransform:
        (uppercase && 'uppercase') ||
        (capitalize && 'capitalize') ||
        (lowercase && 'lowercase') ||
        'none',
      ...props
    }}
  >
    {children}
  </p>
)
