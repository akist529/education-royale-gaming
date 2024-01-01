import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

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
  },
  styles: {
    global: (props: any) => ({
      'html, body': {
        minHeight: '100%',
        height: '100%'
      },
      body: {
        bg: mode('rgb(215,215,215)', 'rgb(120,120,120)')(props)
      }
    })
  }
});

export default theme;