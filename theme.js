/**
 * Walkthrough 2
 * This here is a theme object configured for theme-ui
 * @link https://theme-ui.com/getting-started
 *
 * This object is where you define the styles you want. You can overwrite the defaults here
 * or make your own custom styles. To access any of these styles in Theme-UI components, you need
 * to use the `sx` prop.
 *
 * There are ways to use the sx prop on non-theme-ui elements if need be.
 *
 * See below how the colors object has a "text" key and #000 as a value? If you want to access the color in the
 * sx prop, you can refer to it as "text"
 *
 * Example: <Box sx={{backgroundColor: background: color: text}}
 *
 */

export default {
  colors: {
    text: '#000',
    background: '#EEEEEE',
    primary: '#fff',
    secondary: '#000',
    secondaryText: '#fff',
    // modes: {
    //   dark: {
    //     text: '#fff',
    //     background: '#000',
    //     primary: '#000',
    //     secondary: '#fff',
    //   },
    // },
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  layout: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  styles: {
    li: {
      color: 'text',
      marginBottom: '24px',
      marginTop: '24px',
    },
    h2: {
      fontSize: '32px',
    },
    h3: {
      fontSize: '18px',
    },
  },
  heading: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    textTransform: 'uppercase',
    color: 'text',
    py: 2,
    my: 2,
  },
  buttons: {
    primary: {
      color: 'secondaryText',
      border: '1px solid black',
      borderRadius: '0',
      backgroundColor: 'secondary',
    },
    header: {
      color: 'secondary',
      backgroundColor: 'background',
      border: '1px solid black',
    },
    select: {
      border: '1px solid dotted',
      color: 'text',
      background: 'background',
    },
  },
  text: {
    default: {
      color: 'text',
      fontSize: 18,
      mb: 5,
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
  },
  links: {
    nav: {
      transition: '0.5s all ease',
      '&:hover, &:focus': {
        transform: 'scale(1.1)',
        color: 'text',
        textDecoration: 'underline',
      },
    },
  },
};
