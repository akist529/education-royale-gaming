// LOCAL COMPONENTS
import Footer from "@/components/Footer/Footer";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
// CHAKRA UI IMPORTS
import { chakra, Grid, GridItem, Link, IconButton, Text, Button, Heading, Divider, useColorMode, Input, Textarea, Flex, Box, VStack, HStack } from "@chakra-ui/react";
// LOCAL IMAGES
import ContactImage from '/public/images/contact-img.webp';
// CSS MODULES
import styles from '@/styles/Index.module.scss';
// REACT ICON IMPORTS
import { BsPhoneFill } from "react-icons/bs";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { MdLocationOn, MdSend, MdEmail } from "react-icons/md";
// REACT LIBRARY IMPORTS
import { useState, useEffect } from 'react';
// NEXT.JS LIBRARY IMPORTS
import Head from 'next/head';

export default function ContactPage () {
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
        <>
            <Head>
                <title>Contact Us - Education Royale Gaming</title>
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <chakra.div display='grid' gridTemplateRows='auto 1fr auto' minH='100vh'>
                <PageHeader heading='Contact' />
                <Layout>
                    <chakra.main
                        className={styles.pageContent}
                        h='100%'
                    >
                        <Divider variant='dashed' />
                        <Box
                            bgColor={ colorMode === 'dark' ? 'black' : 'white' }
                            position='relative'
                            h='100%'
                        >
                            { /* Photo by Yannis H on Unsplash */ }
                            <Box
                                className={colorMode === 'dark' ? [styles.parallax, styles.dark, styles.parallaxContainer].join(' ') : [styles.parallax, styles.light, styles.parallaxContainer].join(' ')}
                                style={{ backgroundImage: `url(${ContactImage.src})` }}
                                h='100%'
                                py={3}
                            >
                                <VStack justify='center' align='center' h='100%'>
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
                                        >Invest with the Best</Heading>
                                        <Heading
                                            as='h3'
                                            size='l'
                                            letterSpacing={4}
                                            textAlign='center'
                                            textTransform='uppercase'
                                            wordBreak='break-word'
                                        >For investors seeking long-term growth in education</Heading>
                                    </Box>
                                    <Box
                                        w='95vw'
                                        maxW={600}
                                    >
                                        <Flex
                                            direction={width < 720 ? 'column' : 'row'}
                                            justify='center'
                                            backgroundColor={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
                                            borderWidth={2}
                                            borderStyle='solid'
                                            borderColor='red.500'
                                            rounded={4}
                                            p={4}
                                        >
                                            <chakra.form
                                                action='https://api.web3forms.com/submit'
                                                method='POST'
                                                display='flex'
                                                flexDirection='column'
                                                justifyContent='center'
                                                alignItems='center'
                                                gap='5px'
                                                mx='auto'
                                                p={4}
                                                opacity={1}
                                                borderWidth={1}
                                                borderStyle='solid'
                                                borderColor='gray.500'
                                                rounded={4}
                                            >
                                                <Input
                                                    type='hidden'
                                                    name='access_key'
                                                    value='6be5afba-7818-4a68-aea9-f20324d2654b'
                                                />
                                                <Input
                                                    type='text'
                                                    name='name'
                                                    size='md'
                                                    variant='flushed'
                                                    placeholder='Name...'
                                                    required
                                                />
                                                <Input
                                                    type='email'
                                                    name='email'
                                                    size='md'
                                                    variant='flushed'
                                                    placeholder='Email...'
                                                    required
                                                />
                                                <Input
                                                    type='text'
                                                    name='subject'
                                                    size='md'
                                                    variant='flushed'
                                                    placeholder='Subject...'
                                                    required
                                                />
                                                <Textarea
                                                    name='message'
                                                    size='md'
                                                    variant='flushed'
                                                    placeholder='Please enter your message...'
                                                    required
                                                />
                                                <Button
                                                    variant='outline'
                                                    type='submit'
                                                    textTransform='uppercase'
                                                    leftIcon={<MdSend size={16} />}
                                                >Submit</Button>
                                            </chakra.form>
                                            <Flex
                                                direction='column'
                                                justify='space-between'
                                                align='center'
                                                mt={3}
                                            >
                                                <VStack>
                                                    <Grid
                                                        gridTemplateColumns={width >= 380 ? '48px 1fr' : '1fr'}
                                                        alignItems='center'
                                                        w='100%'
                                                    >
                                                        <GridItem justifySelf='center'>
                                                            <Box
                                                                color='red.500'
                                                                mx='auto'
                                                            >
                                                                <MdLocationOn size={26} />
                                                            </Box>
                                                        </GridItem>
                                                        <GridItem>
                                                            <VStack
                                                                justifyContent='center'
                                                                alignItems={width >= 380 ? 'start' : 'center'}
                                                            >
                                                                <Text fontWeight={700}>Education Royale Gaming</Text>
                                                                <Text>Chicago, IL</Text>
                                                            </VStack>
                                                        </GridItem>
                                                    </Grid>
                                                    <Grid
                                                        gridTemplateColumns={width >= 380 ? '48px 1fr' : '1fr'}
                                                        alignItems='center'
                                                        w='100%'
                                                    >
                                                        <GridItem justifySelf='center'>
                                                            <Box
                                                                color='red.500'
                                                                mx='auto'
                                                            >
                                                                <MdEmail size={26} />
                                                            </Box>
                                                        </GridItem>
                                                        <GridItem>
                                                            <Link
                                                                href='mailto:jblackburn@educationroyalegaming.com'
                                                            >jblackburn@educationroyalegaming.com</Link>
                                                        </GridItem>
                                                    </Grid>
                                                    <Grid
                                                        gridTemplateColumns={width >= 380 ? '48px 1fr' : '1fr'}
                                                        alignItems={width >= 380 ? 'start' : 'center'}
                                                        w='100%'
                                                    >
                                                        <GridItem justifySelf='center'>
                                                            <Box
                                                                color='red.500'
                                                                mx='auto'
                                                            >
                                                                <BsPhoneFill size={26} />
                                                            </Box>
                                                        </GridItem>
                                                        <GridItem
                                                            textAlign={width >= 380 ? 'start' : 'center'}
                                                        >
                                                            <Link
                                                                href='tel:6306599981'
                                                            >630.659.9981</Link>
                                                        </GridItem>
                                                    </Grid>
                                                </VStack>
                                                <HStack
                                                    spacing='0'
                                                    display={{ base: 'none', sm: 'flex' }}
                                                >
                                                    <Link
                                                        href='https://www.facebook.com/'
                                                        isExternal
                                                    >
                                                        <IconButton
                                                            variant='ghost'
                                                            aria-label='Facebook'
                                                            icon={<FaFacebookSquare size={26} />}
                                                            isRound
                                                        />
                                                    </Link>
                                                    <Link
                                                        href='https://twitter.com/'
                                                        isExternal
                                                    >
                                                        <IconButton
                                                            variant='ghost'
                                                            aria-label='Twitter'
                                                            icon={<FaTwitterSquare size={26} />}
                                                            isRound
                                                        />
                                                    </Link>
                                                    <Link
                                                        href='https://www.instagram.com/'
                                                        isExternal
                                                    >
                                                        <IconButton
                                                            variant='ghost'
                                                            aria-label='Instagram'
                                                            icon={<FaInstagramSquare size={26} />}
                                                            isRound
                                                        />
                                                    </Link>
                                                    <Link
                                                        href='https://www.linkedin.com/'
                                                        isExternal
                                                    >
                                                        <IconButton
                                                            variant='ghost'
                                                            aria-label='LinkedIn'
                                                            icon={<FaLinkedin size={26} />}
                                                            isRound
                                                        />
                                                    </Link>
                                                    <Link
                                                        href='mailto:jblackburn@educationroyalegaming.com'
                                                    >
                                                        <IconButton
                                                            variant='ghost'
                                                            aria-label='Email'
                                                            icon={<ImMail size={23} />}
                                                            isRound
                                                        />
                                                    </Link>
                                                </HStack>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                </VStack>
                            </Box>
                        </Box>
                        <Divider variant='dashed' />
                    </chakra.main>
                </Layout>
                <Footer />
            </chakra.div>
        </>
    );
}