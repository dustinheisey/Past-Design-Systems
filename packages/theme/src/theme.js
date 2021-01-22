export default {
  colors: {
    text: '#000',
    textLight: '#fff',
    textDark: '#000',
    background: '#f7f7f7',
    accent: '#E9A41E',
    primary: '#000',
    success: 'green',
    warning: 'orange',
    danger: 'red',
    info: 'blue'
  },
  shadow: {
    shadow:
      '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    shadowHover:
      '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
  },
  borders: {
    dark: theme => `1px solid ${theme.colors.primary}`,
    light: theme => `1px solid ${theme.colors.textLight}`
  },
  space: ['0', '1vh', '2vh', '4vh', '8vh', '16vh'],
  sizes: [
    '0',
    '10%',
    '20%',
    '30%',
    '40%',
    '50%',
    '60%',
    '70%',
    '80%',
    '90%',
    '100%'
  ],
  breakpoints: ['40em', '56em', '64em'],
  styles: {}
}
