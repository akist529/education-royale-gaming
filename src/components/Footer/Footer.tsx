import { Text, chakra, useColorMode, Flex, Heading, Spacer, Box, Link, IconButton, Divider } from "@chakra-ui/react";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export default function Footer () {
    const { colorMode, toggleColorMode } = useColorMode();

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
            <chakra.div
                mx={24}
                px={24}
                py={6}
            >
                <Flex justify='center' align='center'>
                    <Heading>Connect With Us</Heading>
                    <Spacer />
                    <Box>
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
                    </Box>
                </Flex>
            </chakra.div>
            <Text>Copyright © 2023 Education Royale Gaming. All Rights Reserved.</Text>
        </chakra.footer>
    );
}