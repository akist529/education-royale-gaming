'use client';
import { useEffect, useState } from "react";
import Footer from "@/components/Footer/Footer";
import { Heading, VStack, Text, Divider, Box, Card, CardBody, chakra } from '@chakra-ui/react';
import { useColorMode } from "@chakra-ui/react";
import Image1 from '../../public/images/index-img1.jpg';
import Image2 from '../../public/images/index-img2.jpg';
import Image3 from '../../public/images/index-img3.jpg';
import Image4 from '../../public/images/index-img4.jpg';
import ParallaxHeader from "@/components/ParallaxHeader/ParallaxHeader";
import TextCard from "@/components/TextCard/TextCard";
import PageHeader from "@/components/PageHeader/PageHeader";
import PageSubHeader from "@/components/PageSubHeader/PageSubHeader";
import Layout from '@/components/Layout/index';

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
            <PageHeader
                heading='About Us'
            />
            <chakra.main
                backgroundColor={colorMode === 'dark' ? '#171923' : '#CBD5E0'}
                backgroundImage={colorMode === 'dark' ? 'linear-gradient(135deg, #1A202C 25%, transparent 25%), linear-gradient(225deg, #1A202C 25%, transparent 25%), linear-gradient(45deg, #1A202C 25%, transparent 25%), linear-gradient(315deg, #1A202C 25%, #171923 25%)' : 'linear-gradient(135deg, #EDF2F7 25%, transparent 25%), linear-gradient(225deg, #EDF2F7 25%, transparent 25%), linear-gradient(45deg, #EDF2F7 25%, transparent 25%), linear-gradient(315deg, #EDF2F7 25%, #CBD5E0 25%)'}
                backgroundPosition='96px 0, 96px 0, 0 0, 0 0'
                backgroundSize='96px 96px'
                backgroundRepeat='repeat'
                minHeight='100vh'
            >
                <PageSubHeader
                    heading='Welcome to Education Royale Gaming!'
                />
                <TextCard
                    text='At Education Royale Gaming, we believe in the power of play to transform the way we learn. Founded in 2023, our journey began with a simple mission: to make learning fun, engaging, and memorable for all ages. Since then, our family of board games has grown, but our core values remain unchanged.'
                />
                { /* Photo by National Cancer Institute on Unsplash */ }
                <ParallaxHeader
                    img={Image1.src}
                    heading='Our Philosophy'
                />
                <TextCard
                    text='Education isn&apos;t just about textbooks and lectures; it&apos;s about sparking curiosity, fostering creativity, and encouraging hands-on exploration. We&apos;ve fused the thrill of board gaming with core educational principles to create an immersive learning experience. Whether it&apos;s history, math, science, or literature, our games inspire players to dive deep and discover the joy of learning.'
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
                    text='We invite you to become a part of our growing community. Whether you&apos;re a parent seeking new ways to engage your child, a teacher aiming to bring excitement to your classroom, or simply a board game aficionado, there&apos;s a place for you at Education Royale Gaming. Share your experiences, offer suggestions, and connect with like-minded individuals.'
                />
                <VStack
                    px={2}
                    pb={10} 
                >
                    <Text
                        fontFamily='Roboto Condensed'
                        fontSize='3xl'
                        fontWeight='700'
                        textAlign='center'                    
                    >Thank you for choosing Education Royale Gaming.</Text>
                    <Text
                        fontFamily='Roboto Condensed'
                        fontSize='2xl'
                        fontWeight='700'
                        textAlign='center'                    
                    >Let&apos;s roll the dice and embark on a journey of endless learning together!</Text>
                </VStack>
                <Footer />
            </chakra.main>
        </Layout>
    );
}

export { getServerSideProps } from '@/chakra';