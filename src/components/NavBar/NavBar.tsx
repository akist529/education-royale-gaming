'use client';

// CHAKRA UI IMPORTS
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex, HStack, VStack, Link, Button, IconButton, Text, Menu, MenuList, MenuButton, Image, chakra, useColorMode } from '@chakra-ui/react';
// LOCAL IMAGES
import LogoDark from 'public/images/logo-dark.webp';
import LogoLight from 'public/images/logo-light.webp';
// LOCAL COMPONENTS
import MobileDrawer from '../MobileDrawer/MobileDrawer';
// REACT ICON IMPORTS
import { CgGames } from 'react-icons/cg';
import { MdInfo, MdContactSupport } from 'react-icons/md';
import { PiMathOperationsFill } from 'react-icons/pi';
// NEXT.JS LIBRARY IMPORTS
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// REACT LIBRARY IMPORTS
import { useState, useEffect } from 'react';
// CSS MODULES
import styles from '@/styles/Index.module.scss';

export default function NavBar () {
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollEvent = () => {
        console.log(window.scrollY)
        setScrollPosition(window.scrollY)
    }

    useEffect(() => {
        if (window) {
            window.addEventListener('scroll', scrollEvent, false)
        }
    }, [])

    return (
        <chakra.nav
            id='header'
            pb={1}
            position='fixed'
            zIndex={999}
            left={0}
            right={0}
            top={0}
            backgroundColor={colorMode === 'dark' ? 'black' : 'gray.200'}
            opacity={0.9}
        >
            <Flex
                w='100%'
                px={{ base: 1, md: 6 }}
                py={0}
                align='center'
                justify='space-around'
            >
                <Link as={NextLink} href='/'>
                    <Image
                        alt='Logo'
                        src={colorMode == 'light' ? LogoLight.src : LogoDark.src}
                        w={48}
                        h='auto'
                        className={ scrollPosition < 80 ? styles.logoLarge : styles.logoSmall }
                    />
                </Link>
                <HStack
                    as='nav'
                    spacing='0'
                    display={{ base: 'none', md: 'flex' }}
                >
                    <Link
                        as={NextLink}
                        href='/'
                        color={router.pathname === '/' ? 'red.500' : ''}
                    >
                        <Button
                            variant='nav'
                            className={styles.navLink}
                        >
                            <VStack>
                                <MdInfo size={26} />
                                <Text>About Us</Text>
                            </VStack>
                        </Button>
                    </Link>
                    <Menu>
                        <MenuButton
                            as={Button}
                            color={router.pathname.split('/').includes('games') ? 'red.500' : ''}
                            variant='nav'
                            className={styles.navLink}
                        >
                            <VStack>
                                <CgGames size={26} />
                                <Text>Games</Text>
                            </VStack>
                        </MenuButton>
                        <MenuList>
                            <Link
                                as={NextLink}
                                href='/games/mathjack'
                                color={router.pathname === '/games/mathjack' ? 'red.500' : ''}
                            >
                                <Button
                                    variant='nav'
                                    className={styles.navLink}
                                >
                                    <HStack>
                                        <PiMathOperationsFill size={26} />
                                        <Text>MathJack ©</Text>
                                    </HStack>
                                </Button>
                            </Link>
                        </MenuList>
                    </Menu>
                    <Link
                        as={NextLink}
                        href='/contact'
                        color={router.pathname === '/contact' ? 'red.500' : ''}
                    >
                        <Button
                            variant='nav'
                            className={styles.navLink}
                        >
                            <VStack>
                                <MdContactSupport size={26} />
                                <Text>Contact</Text>
                            </VStack>
                        </Button>
                    </Link>
                </HStack>
                { colorMode === 'dark' && 
                    <IconButton
                        display={{ base: 'none', md: 'block' }}
                        aria-label='Light Mode'
                        icon={<SunIcon />}
                        variant='ghost'
                        size='lg'
                        isRound
                        onClick={toggleColorMode}
                    /> }
                { colorMode === 'light' && 
                    <IconButton
                        display={{ base: 'none', md: 'block' }}
                        aria-label='Dark Mode'
                        icon={<MoonIcon />}
                        variant='ghost'
                        size='lg'
                        isRound
                        onClick={toggleColorMode}
                    /> }
                <HStack
                    w='auto'
                    spacing={2}
                    display={{ base: 'flex', md: 'none' }}
                    align='center'
                    justify='space-around'
                >
                    <MobileDrawer />
                    { colorMode === 'dark' && 
                        <IconButton
                            variant='ghost'
                            aria-label='Light Mode'
                            icon={<SunIcon w={8} h={8} />}
                            onClick={toggleColorMode}
                            isRound
                            size='lg'
                        /> }
                    { colorMode === 'light' && 
                        <IconButton
                            variant='ghost'
                            aria-label='Dark Mode'
                            icon={<MoonIcon w={8} h={8} />}
                            onClick={toggleColorMode}
                            isRound
                            size='lg'
                        /> }
                </HStack>
            </Flex>
        </chakra.nav>
    )
}