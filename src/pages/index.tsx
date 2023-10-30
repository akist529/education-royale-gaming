'use client';
// REACT LIBRARY IMPORTS
import { useEffect, useState } from "react";
// LOCAL COMPONENTS
import Footer from "@/components/Footer/Footer";
import Layout from '@/components/Layout/index';
import PageHeader from "@/components/PageHeader/PageHeader";
import PageSubHeader from "@/components/PageSubHeader/PageSubHeader";
import ParallaxHeader from "@/components/ParallaxHeader/ParallaxHeader";
import TextCard from "@/components/TextCard/TextCard";
// CHAKRA UI IMPORTS
import { VStack, Text, Divider, chakra, useColorMode } from '@chakra-ui/react';
// LOCAL IMAGES
import Image1 from '../../public/images/index-img1.webp';
import Image2 from '../../public/images/index-img2.webp';
import Image3 from '../../public/images/index-img3.webp';
import Image4 from '../../public/images/index-img4.webp';
// NEXT.JS LIBRARY IMPORTS
import Head from 'next/head';
// CSS MODULES
import styles from '@/styles/Index.module.scss';

export default function AboutUsPage () {
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
                <title>Home - Education Royale Gaming</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <PageHeader
                heading='About Us'
            />
            <chakra.main
                backgroundColor={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
                minHeight='100vh'
            >
                <PageSubHeader
                    heading='Welcome to Education Royale Gaming!'
                />
                <chakra.div
                    className={styles.pageContent}
                >
                    <TextCard
                        text='At Education Royale Gaming, we believe in the power of play to transform the way we learn. Founded in 2023, our journey began with a simple mission: to make learning fun, engaging, and memorable for all ages. Since then, our family of games has grown, but our core values remain unchanged.'
                    />
                    { /* Photo by National Cancer Institute on Unsplash */ }
                    <ParallaxHeader
                        img={Image1.src}
                        heading='Our Philosophy'
                    />
                    <TextCard
                        text='Education isn&apos;t just about textbooks and lectures; it&apos;s about sparking curiosity, fostering creativity, and encouraging hands-on exploration. We&apos;ve fused the thrill of gaming with core educational principles to create an immersive learning experience. Whether it&apos;s history, math, science, or literature, our games inspire players to dive deep and discover the joy of learning.'
                    />
                    { /* Photo by Brooke Cagle on Unsplash */ }
                    <ParallaxHeader
                        img={Image4.src}
                        heading='Our Team'
                    />
                    <TextCard
                        text='Comprising educators, game enthusiasts, and passionate designers, our team collaborates tirelessly to ensure that each game is not only educationally sound but also irresistibly fun. Every member brings their unique expertise to the table, ensuring a perfect blend of entertainment and education in every box.'
                    />
                    { /* Photo by Tim Bish on Unsplash */ }
                    <ParallaxHeader
                        img={Image2.src}
                        heading='Sustainability Promise'
                    />
                    <TextCard
                        text='We recognize the importance of preserving our planet for future generations. That&apos;s why we&apos;ve committed to using sustainable materials in our game production and minimizing our carbon footprint. Every game you purchase not only supports education but also contributes to a greener future.'
                    />
                    { /* Photo by Hannah Busing on Unsplash */ }
                    <ParallaxHeader
                        img={Image3.src}
                        heading='Join Our Community'
                    />
                    <TextCard
                        text='We invite you to become a part of our growing community. Whether you&apos;re a parent seeking new ways to engage your child, a teacher aiming to bring excitement to your classroom, or simply a game aficionado, there&apos;s a place for you at Education Royale Gaming. Share your experiences, offer suggestions, and connect with like-minded individuals.'
                    />
                    <VStack
                        px={2}
                        backgroundColor={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
                    >
                        <Divider variant='dashed' />
                        <Text
                            fontSize='2xl'
                            fontWeight='800'
                            textAlign='center'
                            letterSpacing={1}
                            { ...width >= 480 && { fontSize: '4xl' } }
                            { ...width >= 768 && { fontSize: '6xl' } }
                        >Thank you for choosing Education Royale Gaming.</Text>
                        <Text
                            fontSize='xl'
                            fontWeight='300'
                            textAlign='center'
                            { ...width >= 480 && { fontSize: '2xl' } }
                            { ...width >= 768 && { fontSize: '3xl' } }
                        >Let&apos;s roll the dice and embark on a journey of endless learning together!</Text>
                    </VStack>
                    <Footer />
                </chakra.div>
            </chakra.main>
        </Layout>
    );
}

// export { getServerSideProps } from '@/chakra';