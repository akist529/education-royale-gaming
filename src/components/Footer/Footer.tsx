import { Text, chakra } from "@chakra-ui/react";

export default function Footer () {
    return (
        <chakra.footer
            id='footer'
            px={6}
            py={5}
            textAlign='center'
        >
            <Text>Copyright © 2023 Education Royale Gaming. All Rights Reserved.</Text>
        </chakra.footer>
    );
}