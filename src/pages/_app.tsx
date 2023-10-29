// LOCAL COMPONENTS
import NavBar from '@/components/NavBar/NavBar';
import theme from '@/theme';
// FRAMER MOTION IMPORTS
import { AnimatePresence } from 'framer-motion';
// CHAKRA UI IMPORTS
import { ChakraProvider } from '@chakra-ui/react';
// FONT IMPORTS
import '@fontsource/roboto-condensed/700.css';

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
