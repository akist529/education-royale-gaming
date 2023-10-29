// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

// 3. extend the theme
const theme = extendTheme({ 
  config,
  fonts: {
    heading: `'Roboto Condensed', 'Arial', 'sans-serif'`,
    body: `'Roboto', 'Arial', 'sans-serif'`
  }
});

export default theme;