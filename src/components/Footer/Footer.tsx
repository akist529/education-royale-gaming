// CHAKRA UI IMPORTS
import { HStack, Text, chakra, useColorMode, Heading, Spacer, Link, IconButton, Divider } from "@chakra-ui/react";
// REACT ICON IMPORTS
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { ImMail } from "react-icons/im";
// REACT LIBRARY IMPORTS
import { useState, useEffect } from 'react';

export default function Footer () {
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
        <chakra.footer
            id='footer'
            px={6}
            pb={6}
            textAlign='center'
            backgroundColor={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
        >
            <Divider
                colorScheme='red'
                size='20'
                variant='dashed'
            />
            <HStack maxWidth={600} mx='auto' py={6} justify='center' align='center'>
                { width >= 380 && <Heading>Connect With Us</Heading> }
                { width >= 380 && <Spacer /> }
                <HStack>
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
            </HStack>
            <Text>Copyright © { new Date().getFullYear() } Education Royale Gaming. All Rights Reserved.</Text>
        </chakra.footer>
    );
}