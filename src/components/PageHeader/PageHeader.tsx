import { Heading, useColorMode, chakra } from "@chakra-ui/react";
import Layout from '@/components/Layout/index';

export default function PageHeader (props: { heading: string }) {
    const { heading } = props;
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <chakra.header
            backgroundColor={colorMode === 'dark' ? 'black' : 'gray.200'}
        >
            <Layout>
                <Heading
                    letterSpacing={4}
                    textTransform='uppercase'
                    as='h1'
                    size='4xl'
                    textAlign='center'
                    pb={5}
                    pt={24}
                >{ heading }</Heading>
            </Layout>
        </chakra.header>
    );
}