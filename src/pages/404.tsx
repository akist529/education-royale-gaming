// LOCAL COMPONENTS
import Layout from "@/components/Layout/index";
import PageHeader from "@/components/PageHeader/PageHeader";
import ParallaxHeader from "@/components/ParallaxHeader/ParallaxHeader";
import Footer from "@/components/Footer/Footer";
// CHAKRA UI IMPORTS
import { Box, Divider, Heading, chakra, useColorMode } from "@chakra-ui/react";
// NEXT.JS LIBRARY IMPORTS
import Head from 'next/head';
// REACT LIBRARY IMPORTS
import { useState, useEffect } from "react";
// CSS MODULES
import styles from '@/styles/Index.module.scss';
// LOCAL IMAGES
import img from 'public/images/error-img.webp';

export default function ErrorPage () {
    const { colorMode, toggleColorMode } = useColorMode();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (window) {
            setWidth(window.innerWidth);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });
    }, []);

    return (
        <Layout>
            <Head>
                <title>404 - Page Not Found - Education Royale Gaming</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <chakra.main
                display='grid'
                gridTemplateRows='auto 1fr auto'
                h='100vh'
            >
                <PageHeader
                    heading='404 - Page Not Found'
                />
                <chakra.div
                    backgroundColor={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
                    h='100%'
                    minH='100%'
                >
                    { /* Photo by Amanda Jones on Unsplash */ }
                    <Box
                        className={colorMode === 'dark' ? [styles.parallax, styles.dark].join(' ') : [styles.parallax, styles.light].join(' ')}
                        style={{ backgroundImage: `url(${img.src})` }}
                        h='100%'
                    >
                        <Box
                            w='95vw'
                            maxWidth={650}                            
                            py={2}
                            bgColor={colorMode == 'dark' ? 'whiteAlpha.700' : 'blackAlpha.900'}
                            color={colorMode == 'dark' ? 'black' : 'white'}                        
                        >
                            <Heading
                                as='h2'
                                size='xl'
                                letterSpacing={4}
                                textAlign='center'
                                textTransform='uppercase'
                                wordBreak='break-word'
                            >Oops!</Heading>
                            <Heading
                                as='h3'
                                size='l'
                                letterSpacing={4}
                                textAlign='center'
                                textTransform='uppercase'
                                wordBreak='break-word'
                            >The page you were looking for does not exist</Heading>
                        </Box>
                    </Box>
                </chakra.div>
                <Footer />
            </chakra.main>
        </Layout>
    );
}