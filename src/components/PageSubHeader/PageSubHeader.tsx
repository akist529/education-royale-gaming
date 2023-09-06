import { chakra, Heading, Divider, useColorMode } from "@chakra-ui/react";

export default function PageSubHeader (props: { heading: string }) {
    const { heading } = props;
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <chakra.div>
            <Heading
                fontFamily='Roboto Condensed'
                letterSpacing={4}
                textTransform='uppercase'
                as='h2'
                size='lg'
                textAlign='center'
                p={5}
                backgroundColor={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
                opacity={0.8}
            >{ heading }</Heading>
            <Divider variant='dashed' />
        </chakra.div>
    );
}