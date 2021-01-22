import Typography from 'typography'

export default new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: 'Barlow Condensed',
      styles: ['700']
    },
    {
      name: 'Barlow Semi Condensed',
      styles: ['400', '500', '700']
    }
  ],
  headerFontFamily: [
    'Barlow Condensed',
    'Helvetica',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  bodyFontFamily: [
    'Barlow Semi Condensed',
    'Helvetica',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  scaleRatio: 4.5,
  overrideStyles: () => ({
    p: {
      maxWidth: '70ch',
      marginBottom: '1.5vmin'
    },
    h1: {
      textTransform: 'uppercase',
      marginBottom: '1.5vmin'
    },
    h2: {
      textTransform: 'uppercase',
      marginBottom: '1.5vmin',
      fontSize: '350%'
    },
    h3: {
      fontFamily: 'Barlow Semi Condensed',
      textTransform: 'uppercase',
      fontWeight: '700',
      marginBottom: '1.5vmin'
    },
    h4: {
      fontFamily: 'Barlow Semi Condensed',
      textTransform: 'uppercase',
      fontWeight: '500',
      fontSize: '125%',
      marginBottom: '1.5vmin'
    },
    h5: {
      fontFamily: 'Barlow Semi Condensed',
      textTransform: 'capitalize',
      fontWeight: '700',
      fontSize: '100%',
      marginBottom: '1.5vmin'
    },
    strong: {
      textTransform: 'uppercase'
    },
    '@media only screen and (max-width:900px)': {
      h1: {
        fontSize: '375%'
      },
      h2: {
        fontSize: '325%'
      },
      h3: {
        fontSize: '275%'
      },
      h4: {
        fontSize: '18px'
      },
      h5: {
        fontSize: '125%'
      }
    },
    '@media only screen and (max-width:599px)': {
      h1: {
        fontSize: '250%'
      },
      h2: {
        fontSize: '200%'
      },
      h3: {
        fontSize: '150%'
      },
      h4: {
        fontSize: '125%'
      },
      h5: {
        fontSize: '100%'
      }
    }
  })
})
