import { Flex, Spacer, Button, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Text, VStack,  Link, Image, useDisclosure, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useRef, RefObject } from 'react';
import { IoMdMenu } from 'react-icons/io';
import LogoLight from '../../../public/images/logo-light.png';
import LogoDark from '../../../public/images/logo-dark.png';
import { MdInfo, MdContactSupport } from 'react-icons/md';
import { CgGames } from 'react-icons/cg';
import NextLink from 'next/link';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

export default function MobileDrawer () {
    const btnRef = useRef() as RefObject<HTMLButtonElement>;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex>
            <IconButton
                ref={btnRef}
                variant='ghost'
                aria-label='Open Navigation Menu'
                icon={<IoMdMenu size={40} />}
                isRound
                onClick={onOpen}
                size='lg'
            />
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent
                    alignItems='center'
                >
                    <DrawerCloseButton
                        justifySelf='end'
                        alignSelf='end'
                        mx={0}
                        my={0}
                    />
                    <DrawerHeader
                        my={15}
                    >
                        <Link as={NextLink} href='/'>
                            <Button
                                variant='nav'
                                onClick={onClose}
                            >
                                <Image
                                    alt='Logo'
                                    src={colorMode == 'light' ? LogoLight.src : LogoDark.src}
                                    width={48}
                                    height='auto'
                                />
                            </Button>
                        </Link>
                    </DrawerHeader>
                    <DrawerBody w='100%'>
                        <VStack as='nav' spacing={5}>
                            <Text>Navigation</Text>
                            <Link
                                as={NextLink}
                                href='/'
                                w='100%'
                                _activeLink={{ color: useColorModeValue('violet.50', 'white') }}
                            >
                                <Button
                                    leftIcon={<MdInfo size={26} />}
                                    variant='nav'
                                    onClick={onClose}
                                    colorScheme='red.500'
                                >About Us</Button>
                            </Link>
                            <Link as={NextLink} href='/mathjack' w='100%'>
                                <Button
                                    leftIcon={<CgGames size={26} />}
                                    variant='nav'
                                    onClick={onClose}
                                >MathJack ©</Button>
                            </Link>
                            <Link as={NextLink} href='/investors' w='100%'>
                                <Button
                                    leftIcon={<MdContactSupport size={26} />}
                                    variant='nav'
                                    onClick={onClose}
                                >Contact</Button>
                            </Link>
                            <Text>Social Media</Text>
                            <Link href='https://www.facebook.com/' isExternal w='100%'>
                                <Button
                                    leftIcon={<FaFacebookSquare size={26} />}
                                    variant='nav'
                                >Facebook</Button>
                            </Link>
                            <Link href='https://twitter.com/' isExternal w='100%'>
                                <Button
                                    leftIcon={<FaTwitterSquare size={26} />}
                                    variant='nav'
                                >Twitter</Button>
                            </Link>
                            <Link href='https://www.instagram.com/' isExternal w='100%'>
                                <Button
                                    leftIcon={<FaInstagramSquare size={26} />}
                                    variant='nav'
                                >Instagram</Button>
                            </Link>
                            <Link href='https://www.linkedin.com/' isExternal w='100%'>
                                <Button
                                    leftIcon={<FaLinkedin size={26} />}
                                    variant='nav'
                                >LinkedIn</Button>
                            </Link>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}