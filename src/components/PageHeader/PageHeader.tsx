import { Heading, Divider, useColorMode, chakra } from "@chakra-ui/react";

export default function PageHeader (props: { heading: string }) {
    const { heading } = props;
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <chakra.header>
            <Heading
                letterSpacing={4}
                textTransform='uppercase'
                as='h1'
                size='4xl'
                textAlign='center'
                pb={5}
                pt={24}
                backgroundColor={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
            >{ heading }</Heading>
            <Divider variant='dashed' />
        </chakra.header>
    );
}