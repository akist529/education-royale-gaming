'use client';
import { Flex, HStack, VStack, Image, Link, Button, IconButton, Text } from '@chakra-ui/react';
import { Menu, MenuList, MenuButton, MenuItem, MenuGroup, MenuDivider, MenuOptionGroup, MenuItemOption } from '@chakra-ui/react';
import { chakra, useColorMode } from '@chakra-ui/react';
import LogoLight from '../../../public/images/logo-light.png';
import LogoDark from '../../../public/images/logo-dark.png';
import MobileDrawer from '../MobileDrawer/MobileDrawer';
import { MdInfo, MdContactSupport } from 'react-icons/md';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { CgGames } from 'react-icons/cg';
import NextLink from 'next/link';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

export default function NavBar () {
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();

    return (
        <chakra.header
            id='header'
            pb={1}
            position='fixed'
            zIndex={999}
            left={0}
            right={0}
            top={0}
            backgroundColor={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
            opacity={0.8}
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
                        width={48}
                        height='auto'
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
                                >
                                    <HStack>
                                        <CgGames size={26} />
                                        <Text>MathJack©</Text>
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
                </HStack>
            </Flex>
        </chakra.header>
    )
}