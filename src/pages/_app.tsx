import { ChakraProvider } from '@chakra-ui/react';
import NavBar from '@/components/NavBar/NavBar';
import theme from '@/theme';

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;