import { chakra } from "@chakra-ui/react";
import { Flex, Spacer, Heading, Box, Link, IconButton } from '@chakra-ui/react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export default function SocialBanner () {
    return (
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
    );
}