import Footer from "@/components/Footer/Footer";
import { chakra, Box, Flex, Text, Image, useColorMode } from "@chakra-ui/react";
import PageHeader from "@/components/PageHeader/PageHeader";
import Layout from "@/components/Layout";
import MathJackImg from '/public/images/mathjack.webp';
import { useState, useEffect } from 'react';
import TextCard from "@/components/TextCard/TextCard";

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
            <chakra.main
                backgroundColor={colorMode === 'dark' ? '#171923' : '#CBD5E0'}
                backgroundImage={colorMode === 'dark' ? 'linear-gradient(135deg, #1A202C 25%, transparent 25%), linear-gradient(225deg, #1A202C 25%, transparent 25%), linear-gradient(45deg, #1A202C 25%, transparent 25%), linear-gradient(315deg, #1A202C 25%, #171923 25%)' : 'linear-gradient(135deg, #EDF2F7 25%, transparent 25%), linear-gradient(225deg, #EDF2F7 25%, transparent 25%), linear-gradient(45deg, #EDF2F7 25%, transparent 25%), linear-gradient(315deg, #EDF2F7 25%, #CBD5E0 25%)'}
                backgroundPosition='96px 0, 96px 0, 0 0, 0 0'
                backgroundSize='96px 96px'
                backgroundRepeat='repeat'
                minHeight='100vh'
                display='grid'
                gridTemplateRows='auto 1fr auto'
            >
                <PageHeader
                    heading='MathJack'
                /> 
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
                <Footer />
            </chakra.main>
        </Layout>
    );
}