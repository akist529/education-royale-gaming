import { Flex, chakra } from "@chakra-ui/react";

export default function Footer () {
    return (
        <chakra.footer id='footer'>
            <Flex
                w='100%'
                px='6'
                py='5'
                align='center'
                justify='center'
            >
                Copyright © 2023 Education Royale Gaming - All Rights Reserved.
            </Flex>
        </chakra.footer>
    );
}