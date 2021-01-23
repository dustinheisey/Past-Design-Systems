export const Theme = {
  colors: {
    primaryDark: '#000',
    primary: '#000',
    primaryLight: '#000',
    secondaryDark: '#000',
    secondary: '#000',
    secondaryLight: '#000',
    lightest: '#fff',
    lighter: '#000',
    light: '#000',
    dark: '#000',
    darker: '#000',
    darkest: '#000',
    success: '#000',
    info: '#000',
    warning: '#000',
    danger: '#000',
    modes: {
      dark: {
        primaryDark: '#000',
        primary: '#000',
        primaryLight: '#000',
        secondaryDark: '#000',
        secondary: '#000',
        secondaryLight: '#000',
        lightest: '#fff',
        lighter: '#000',
        light: '#000',
        dark: '#000',
        darker: '#000',
        darkest: '#000'
      }
    }
  },
  fonts: {
    heading: 'sans-serif',
    text: 'sans-serif'
  },
  fontSizes: {
    xxs: '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '2.25rem',
    xxl: '3.5rem'
  },
  lineHeight: { heading: 1.4, body: 1.8 },
  fontWeight: { light: 300, normal: 400, semibold: 500, bold: 700 },
  letterSpacing: {
    tight: '-0.015em',
    normal: 'normal',
    loose: '0.075em'
  },
  space: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '36px',
    xxl: '48px'
  },
  radii: { normal: '3px', pill: '9999px', circle: '50%' },
  shadows: {
    xs: '0 1px 0 #0d131e0d',
    sm: '0 1px 2px #0d131e1a',
    md: '0 2px 4px #0d131e1a',
    lg: '0 2px 8px #0d131e1a',
    xl: '0 4px 16px #0d131e1a'
  },
  zIndices: {
    drawer: 700,
    dialog: 800,
    popover: 900,
    toast: 950,
    tooltip: 1000
  },
  breakpoints: ['40em', '56em', '64em'],
  button: {
    primary: {
      backgroundColor: 'primary',
      borderColor: 'primary',
      color: 'white',
      '&:hover': {
        backgroundColor: 'primaryDark',
        boxShadow: 'xs'
      }
    },
    primaryInverse: {
      backgroundColor: 'lightest',
      borderColor: 'lightest',
      color: 'primary',
      '&:hover': {
        color: 'primaryDark',
        boxShadow: 'xs'
      }
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: 'dark',
      color: 'darkest',
      '&:hover': {
        boxShadow: 'xs'
      }
    },
    outlineInverse: {
      backgroundColor: 'transparent',
      borderColor: 'lightest',
      color: 'lightest',
      '&:hover': {
        boxShadow: 'xs'
      }
    },
    text: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: 'primary',
      '&:hover': {
        color: 'primaryDark'
      }
    },
    textInverse: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: 'lightest',
      '&:hover': {
        color: 'primary'
      }
    },
    danger: {
      backgroundColor: 'danger',
      borderColor: 'danger',
      color: 'white',
      '&:hover': {
        backgroundColor: 'dangerDark',
        boxShadow: 'xs'
      }
    },
    icon: {
      borderColor: 'transparent',
      '&:hover': {
        boxShadow: 'xs'
      }
    }
  },
  sidebar: {
    left: {
      gridTemplateColumns: 'minmax(150px, 25%) 1fr'
    },
    right: {
      gridTemplateColumns: '1fr minmax(150px, 25%)'
    }
  },
  columns: {
    left: {
      gridTemplateColumns: '.6fr .4fr'
    },
    right: {
      gridTemplateColumns: '.4fr .6fr'
    },
    auto: {
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr)',
      placeItems: 'center'
    }
  }
}
