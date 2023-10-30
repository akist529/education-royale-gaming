// LOCAL COMPONENTS
import Footer from "@/components/Footer/Footer";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import TextCard from "@/components/TextCard/TextCard";
// CHAKRA UI IMPORTS
import { chakra, Box, Flex, Image, Divider, useColorMode } from "@chakra-ui/react";
// LOCAL IMAGES
import MathJackImg from '/public/images/mathjack.webp';
// REACT LIBRARY IMPORTS
import { useState, useEffect } from 'react';
// NEXT.JS LIBRARY IMPORTS
import Head from 'next/head';
// CSS MODULES
import styles from '@/styles/Index.module.scss';

export default function MathJackPage () {
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
                <title>MathJack - Education Royale Gaming</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <chakra.main
                backgroundColor={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
                minHeight='100vh'
                display='grid'
                gridTemplateRows='auto 1fr auto'
            >
                <PageHeader
                    heading='MathJack'
                /> 
                <Divider variant='dashed' />
                <chakra.div
                    className={styles.pageContent}
                >
                    <Flex
                        direction={ width < 600 ? 'column' : 'row' }
                        justify='center'
                        align='center'
                        gap={3}
                        h='100%'
                        p={3}
                    >
                        <Image
                            alt='MathJack Logo'
                            src={MathJackImg.src}
                            w='90vw'
                            h='auto'
                            maxW={400}
                        />
                        <Box maxW={400}>
                            <TextCard
                                text='MathJack© is a revolutionary product which teaches children the fundamentals of mathematics.  Kids have so much fun, they don&apos;t realize they are learning!'
                            />
                        </Box>
                    </Flex>
                    <Divider variant='dashed' />
                    <Footer />
                </chakra.div>
            </chakra.main>
        </Layout>
    );
}