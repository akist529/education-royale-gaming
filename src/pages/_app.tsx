import NavBar from '@/components/NavBar/NavBar';
import theme from '@/theme';
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';

export default function MyApp({ Component, pageProps }: any) {

  return (
    <ChakraProvider
      theme={theme}
    >
      <NavBar />
      <AnimatePresence
        mode='wait'
        initial={false}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}
