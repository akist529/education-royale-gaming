import { chakra, Heading, Divider, useColorMode } from "@chakra-ui/react";
import Layout from '@/components/Layout/index';

export default function PageSubHeader (props: { heading: string }) {
    const { heading } = props;
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <chakra.div
            backgroundColor={colorMode === 'dark' ? 'black' : 'gray.200'}
        >
            <Layout>
                <Heading
                    letterSpacing={4}
                    textTransform='uppercase'
                    as='h2'
                    size='lg'
                    textAlign='center'
                    p={5}
                >{ heading }</Heading>
            </Layout>
            <Divider variant='dashed' />
        </chakra.div>
    );
}