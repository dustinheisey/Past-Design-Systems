/** @jsx jsx */
import { jsx } from 'theme-ui'
import {Link} from 'styles'

/* 
buttons to another page are link
buttons to another site are a
buttons to submit a form are button

brand button
  default - background brand color text-light hover box-shadow background brand-dark
  inverse - background text-light color brand

outline button
  default - background transparent color brand border brand
  inverse - background transparent color text-light border text-light

ghost button
  default - color brand background transparent, hover color text-light background brand box-shadow
  inverse - color text-light background transparent

*/

const styles = {
  textDecoration: 'none',
  underline: 'none',
  border: 'none',
  outline: 'none',
  borderRadius: '0',
  cursor: 'pointer',
  paddingTop: 1,
  paddingBottom: 1,
  paddingLeft: 2,
  paddingRight: 2,
  transition: 'all 0.3s'
}

export const Button = ({
  children,
  to,
  a,
  outline,
  ghost,
  action,
  map,
  type,
  accent,
  inverse,
  success,
  warning,
  danger,
  info,
  sm,
  md,
  lg,
  ...props
}) =>
  (a && (
    <a
      href={to}
      target='_blank'
      rel='noopener noreferrer'
      sx={{
        ...styles,
        ...props,
        color:
          (inverse &&
            ((success && 'success') ||
              (warning && 'warning') ||
              (danger && 'danger') ||
              (info && 'info') ||
              (outline && 'textLight') ||
              (ghost && 'textLight') ||
              'primary')) ||
          (success && 'textLight') ||
          (warning && 'textLight') ||
          (danger && 'textLight') ||
          (info && 'textLight') ||
          (outline && 'primary') ||
          (ghost && 'primary') ||
          'textLight',
        bg:
          (inverse &&
            ((success && 'textLight') ||
              (warning && 'textLight') ||
              (danger && 'textLight') ||
              (info && 'textLight') ||
              (outline && 'transparent') ||
              (ghost && 'transparent') ||
              'textLight')) ||
          (accent && 'accent') ||
          (success && 'success') ||
          (warning && 'warning') ||
          (danger && 'danger') ||
          (info && 'info') ||
          (outline && 'transparent') ||
          (ghost && 'transparent') ||
          'primary',
        border:
          (inverse &&
            ((success && 'none') ||
              (warning && 'none') ||
              (danger && 'none') ||
              (info && 'none') ||
              (outline && (theme => `2px solid ${theme.colors.textLight}`)) ||
              (ghost && 'none') ||
              'none')) ||
          (success && 'none') ||
          (warning && 'none') ||
          (danger && 'none') ||
          (info && 'none') ||
          (outline && (theme => `2px solid ${theme.colors.primary}`)) ||
          (ghost && 'none') ||
          'none',
        paddingTop: (sm && 1) || (md && 2) || (lg && 2) || 1,
        paddingBottom: (sm && 1) || (md && 2) || (lg && 2) || 1,
        paddingLeft: (sm && 2) || (md && 3) || (lg && 5) || 2,
        paddingRight: (sm && 2) || (md && 3) || (lg && 5) || 2,
        ':hover': {
          boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
        }
      }}>
      {children}
    </a>
  )) ||
  (action && (
    <button
      sx={{
        ...styles,
        ...props,
        width: 'fit-content',
        px: 3,
        py: 1,
        color:
          (inverse &&
            ((success && 'success') ||
              (warning && 'warning') ||
              (danger && 'danger') ||
              (info && 'info') ||
              (outline && 'textLight') ||
              (ghost && 'textLight') ||
              'primary')) ||
          (success && 'textLight') ||
          (warning && 'textLight') ||
          (danger && 'textLight') ||
          (info && 'textLight') ||
          (outline && 'primary') ||
          (ghost && 'primary') ||
          'textLight',
        bg:
          (inverse &&
            ((success && 'textLight') ||
              (warning && 'textLight') ||
              (danger && 'textLight') ||
              (info && 'textLight') ||
              (outline && 'transparent') ||
              (ghost && 'transparent') ||
              'textLight')) ||
          (success && 'success') ||
          (warning && 'warning') ||
          (danger && 'danger') ||
          (accent && 'accent') ||
          (info && 'info') ||
          (outline && 'transparent') ||
          (ghost && 'transparent') ||
          'primary',
        border:
          (inverse &&
            ((success && 'none') ||
              (warning && 'none') ||
              (danger && 'none') ||
              (info && 'none') ||
              (outline && (theme => `3px solid ${theme.colors.textLight}`)) ||
              (ghost && 'none') ||
              'none')) ||
          (success && 'none') ||
          (warning && 'none') ||
          (danger && 'none') ||
          (info && 'none') ||
          (outline && (theme => `3px solid ${theme.colors.primary}`)) ||
          (ghost && 'none') ||
          'none',
        paddingTop: (sm && 1) || (md && 2) || (lg && 2) || 1,
        paddingBottom: (sm && 1) || (md && 2) || (lg && 2) || 1,
        paddingLeft: (sm && 2) || (md && 3) || (lg && 5) || 2,
        paddingRight: (sm && 2) || (md && 3) || (lg && 5) || 2,
        ':hover': {
          transform: !map && 'translate(2px,-2px)',
          boxShadow:
            !map && '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          backgroundColor: map && 'accent'
        }
      }}
      type={type}>
      {children}
    </button>
  )) || (
    <Link
      to={to}
      sx={{
        ...styles,
        ...props,
        color:
          (inverse &&
            ((success && 'success') ||
              (warning && 'warning') ||
              (danger && 'danger') ||
              (info && 'info') ||
              (outline && 'textLight') ||
              (ghost && 'textLight') ||
              'primary')) ||
          (success && 'textLight') ||
          (warning && 'textLight') ||
          (danger && 'textLight') ||
          (info && 'textLight') ||
          (outline && 'primary') ||
          (ghost && 'primary') ||
          'textLight',
        bg:
          (inverse &&
            ((success && 'textLight') ||
              (warning && 'textLight') ||
              (danger && 'textLight') ||
              (info && 'textLight') ||
              (outline && 'transparent') ||
              (ghost && 'transparent') ||
              'textLight')) ||
          (accent && 'accent') ||
          (success && 'success') ||
          (warning && 'warning') ||
          (danger && 'danger') ||
          (info && 'info') ||
          (outline && 'transparent') ||
          (ghost && 'transparent') ||
          'primary',
        border:
          (inverse &&
            ((success && 'none') ||
              (warning && 'none') ||
              (danger && 'none') ||
              (info && 'none') ||
              (outline && (theme => `1px solid ${theme.colors.textLight}`)) ||
              (ghost && 'none') ||
              'none')) ||
          (success && 'none') ||
          (warning && 'none') ||
          (danger && 'none') ||
          (info && 'none') ||
          (outline && (theme => `1px solid ${theme.colors.primary}`)) ||
          (ghost && 'none') ||
          'none',
        paddingTop: (sm && 1) || (md && 2) || (lg && 2) || 1,
        paddingBottom: (sm && 1) || (md && 2) || (lg && 2) || 1,
        paddingLeft: (sm && 2) || (md && 3) || (lg && 5) || 2,
        paddingRight: (sm && 2) || (md && 3) || (lg && 5) || 2,
        ':hover': {
          transform: 'translate(2px,-2px)',
          boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
        }
      }}>
      {children}
    </Link>
  )
