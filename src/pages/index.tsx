'use client';
import { useEffect, useState } from "react";
import Footer from "@/components/Footer/Footer";
import { Heading, Text, Divider, Box, chakra } from '@chakra-ui/react';
import { useColorMode } from "@chakra-ui/react";
import Image1 from '../../public/images/index-img1.jpg';
import Image2 from '../../public/images/index-img2.jpg';
import Image3 from '../../public/images/index-img3.jpg';
import Image4 from '../../public/images/index-img4.jpg';
import styles from '../styles/Index.module.scss';
import SocialBanner from "@/components/SocialBanner/SocialBanner";

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
        <chakra.div
            backgroundColor={colorMode === 'dark' ? '#171923' : '#EDF2F7'}
            backgroundImage={colorMode === 'dark' ? 'linear-gradient(135deg, #1A202C 25%, transparent 25%), linear-gradient(225deg, #1A202C 25%, transparent 25%), linear-gradient(45deg, #1A202C 25%, transparent 25%), linear-gradient(315deg, #1A202C 25%, #171923 25%)' : 'linear-gradient(135deg, #E2E8F0 25%, transparent 25%), linear-gradient(225deg, #E2E8F0 25%, transparent 25%), linear-gradient(45deg, #E2E8F0 25%, transparent 25%), linear-gradient(315deg, #E2E8F0 25%, #EDF2F7 25%)'}
            backgroundPosition='60px 0, 60px 0, 0 0, 0 0'
            backgroundSize='60px 60px'
            backgroundRepeat='repeat'
            pt={24}
        >
            <Heading
                fontFamily='Roboto Condensed'
                letterSpacing={4}
                textTransform='uppercase'
                as='h1'
                size='4xl'
                textAlign='center'
                py={5}
            >About Us</Heading>
            <Divider />
            <Box
                px={width < 600 ? 5 : 24}
                mx={width < 600 ? 5 : 24}
                py={20}
            >
                <Text
                    fontFamily='Roboto Condensed'
                    fontSize='4xl'
                    textAlign='center'
                    pb={5}
                >Welcome to Education Royale Gaming!</Text>
                <Text
                    fontFamily='Roboto'
                    fontSize='md'
                >At Education Royale Gaming, we believe in the power of play to transform the way we learn. Founded in 2023, our journey began with a simple mission: to make learning fun, engaging, and memorable for all ages. Since then, our family of board games has grown, but our core values remain unchanged.</Text>
            </Box>
            { /* Photo by National Cancer Institute on Unsplash */ }
            <Box
                className={styles.parallax}
                style={{ backgroundImage: `url(${Image1.src})` }}
                my={5}
            >
                <Box
                    bgColor={colorMode == 'dark' ? 'white' : 'black'}
                    color={colorMode == 'dark' ? 'black' : 'white'}
                    px={4}
                    py={2}
                >
                    <Heading
                        fontFamily='Roboto Condensed'
                        as='h2'
                        size='2xl'
                        letterSpacing={12}
                        textAlign='center'
                        textTransform='uppercase'
                    >Our Philosophy</Heading>
                </Box>
            </Box>
            <Box
                mx={24}
                px={24}
                py={20}
            >
                <Text
                    fontFamily='Roboto'
                    fontSize='md'
                >Education isn&apos;t just about textbooks and lectures; it&apos;s about sparking curiosity, fostering creativity, and encouraging hands-on exploration. We&apos;ve fused the thrill of board gaming with core educational principles to create an immersive learning experience. Whether it&apos;s history, math, science, or literature, our games inspire players to dive deep and discover the joy of learning.</Text>
            </Box>
            { /* Photo by Brooke Cagle on Unsplash */ }
            <Box
                className={styles.parallax}
                style={{ backgroundImage: `url(${Image4.src})` }}
                my={5}
            >
                <Box
                    bgColor={colorMode == 'dark' ? 'white' : 'black'}
                    color={colorMode == 'dark' ? 'black' : 'white'}
                    px={4}
                    py={2}
                >
                    <Heading
                        fontFamily='Roboto Condensed'
                        as='h2'
                        size='2xl'
                        letterSpacing={6}
                        textAlign='center'
                        textTransform='uppercase'
                    >Our Team</Heading>
                </Box>
            </Box>
            <Box
                mx={24}
                px={24}
                py={20}            
            >
                <Text
                    fontFamily='Roboto'
                    fontSize='md'
                >Comprising educators, game enthusiasts, and passionate designers, our team collaborates tirelessly to ensure that each game is not only educationally sound but also irresistibly fun. Every member brings their unique expertise to the table, ensuring a perfect blend of entertainment and education in every box.</Text>
            </Box>
            { /* Photo by Tim Bish on Unsplash */ }
            <Box
                className={styles.parallax}
                style={{ backgroundImage: `url(${Image2.src})` }}
                my={5}
            >
                <Box
                    bgColor={colorMode == 'dark' ? 'white' : 'black'}
                    color={colorMode == 'dark' ? 'black' : 'white'}
                    px={4}
                    py={2}
                >
                    <Heading
                        fontFamily='Roboto Condensed'
                        as='h2'
                        size='2xl'
                        letterSpacing={6}
                        textAlign='center'
                        textTransform='uppercase'
                    >Sustainability Promise</Heading>
                </Box>
            </Box>
            <Box
                mx={24}
                px={24}
                py={20} 
            >
                <Text
                    fontFamily='Roboto'
                    fontSize='md'
                >We recognize the importance of preserving our planet for future generations. That&apos;s why we&apos;ve committed to using sustainable materials in our game production and minimizing our carbon footprint. Every game you purchase not only supports education but also contributes to a greener future.</Text>
            </Box>
            { /* Photo by Hannah Busing on Unsplash */ }
            <Box
                className={styles.parallax}
                style={{ backgroundImage: `url(${Image3.src})` }}
                my={5}
            >
                <Box
                    bgColor={colorMode == 'dark' ? 'white' : 'black'}
                    color={colorMode == 'dark' ? 'black' : 'white'}
                    px={4}
                    pt={2}
                >
                    <Heading
                        as='h2'
                        size='2xl'
                        letterSpacing={6}
                        textAlign='center'
                        textTransform='uppercase'
                    >Join Our Community</Heading>
                </Box>
            </Box>
            <Box
                mx={24}
                px={24}
                py={20} 
            >
                <Text
                    fontFamily='Roboto'
                    fontSize='md'
                >We invite you to become a part of our growing community. Whether you&apos;re a parent seeking new ways to engage your child, a teacher aiming to bring excitement to your classroom, or simply a board game aficionado, there&apos;s a place for you at Education Royale Gaming. Share your experiences, offer suggestions, and connect with like-minded individuals.</Text>
            </Box>
            <Box
                px={20}
                pb={10} 
            >
                <Text
                    fontFamily='Roboto Condensed'
                    fontSize='xl'
                    fontWeight='700'
                    textAlign='center'                    
                >Thank you for choosing Education Royale Gaming. Let&apos;s roll the dice and embark on a journey of endless learning together!</Text>
            </Box>
            <SocialBanner />
            <Footer />
        </chakra.div>
    );
}