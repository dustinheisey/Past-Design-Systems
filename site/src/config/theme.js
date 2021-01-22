import { Theme } from 'theme'

export default {
  ...Theme,
  colors: {
    ...Theme.colors,
    text: '#000',
    accent: '#E9A41E',
    accentMuted: 'rgba(235, 173, 53, 0.25)',
    primary: '#1E272E',
    uiDark: '#1E272E',
    ui: '#fafafa',
    uiLight: '#ffffff'
  }
}
