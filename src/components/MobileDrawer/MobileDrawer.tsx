// CHAKRA UI IMPORTS
import { Flex, Button, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, Link, Image, Icon, useDisclosure, useColorMode } from "@chakra-ui/react";
// REACT LIBRARY IMPORTS
import { useRef, RefObject } from 'react';
// NEXT.JS LIBRARY IMPORTS
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// REACT ICON IMPORTS
import { CgGames } from 'react-icons/cg';
import { IoMdMenu } from 'react-icons/io';
import { MdInfo, MdContactSupport } from 'react-icons/md';
// LOCAL IMAGES
import LogoDark from 'public/images/logo-dark.webp';
import LogoLight from 'public/images/logo-light.webp';

export default function MobileDrawer () {
    const btnRef = useRef() as RefObject<HTMLButtonElement>;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();

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
                    h='100vh'
                    borderLeftWidth={6}
                    borderLeftStyle='solid'
                    borderLeftColor='red.500'
                    backgroundColor={colorMode === 'dark' ? 'black' : 'gray.200'}
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
                    <DrawerBody w='100%' h='100%' display='flex' flexDirection='column' alignItems='end'>
                        <VStack
                            as='nav'
                            spacing={5}
                            w='60%'
                        >
                            <Link
                                as={NextLink}
                                href='/'
                                w='100%'
                                color={router.pathname === '/' ? 'red.500' : ''}
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <Button
                                    variant='nav'
                                    onClick={onClose}
                                >About Us</Button>
                                <Icon
                                    as={MdInfo}
                                    boxSize={26}
                                ></Icon>
                            </Link>
                            <Link
                                as={NextLink}
                                href='/games/mathjack'
                                w='100%'
                                color={router.pathname === '/games/mathjack' ? 'red.500' : ''}
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <Button
                                    variant='nav'
                                    onClick={onClose}
                                >MathJack ©</Button>
                                <Icon
                                    as={CgGames}
                                    boxSize={26}
                                ></Icon>
                            </Link>
                            <Link
                                as={NextLink}
                                href='/contact'
                                w='100%'
                                color={router.pathname === '/contact' ? 'red.500' : ''}
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <Button
                                    variant='nav'
                                    onClick={onClose}
                                >Contact</Button>
                                <Icon
                                    as={MdContactSupport}
                                    boxSize={26}
                                ></Icon>
                            </Link>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}