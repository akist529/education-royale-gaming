import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <script src="https://web3forms.com/client/script.js" async defer></script>
          <link rel='icon' href='/favicon.ico' sizes='any' />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}