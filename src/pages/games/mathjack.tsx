import Footer from "@/components/Footer/Footer";
import { chakra, useColorMode } from "@chakra-ui/react";
import PageHeader from "@/components/PageHeader/PageHeader";
import Layout from "@/components/Layout";

export default function MathJackPage () {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Layout>
            <PageHeader
                heading='MathJack'
            />
            <chakra.main
                backgroundColor={colorMode === 'dark' ? '#171923' : '#CBD5E0'}
                backgroundImage={colorMode === 'dark' ? 'linear-gradient(135deg, #1A202C 25%, transparent 25%), linear-gradient(225deg, #1A202C 25%, transparent 25%), linear-gradient(45deg, #1A202C 25%, transparent 25%), linear-gradient(315deg, #1A202C 25%, #171923 25%)' : 'linear-gradient(135deg, #EDF2F7 25%, transparent 25%), linear-gradient(225deg, #EDF2F7 25%, transparent 25%), linear-gradient(45deg, #EDF2F7 25%, transparent 25%), linear-gradient(315deg, #EDF2F7 25%, #CBD5E0 25%)'}
                backgroundPosition='96px 0, 96px 0, 0 0, 0 0'
                backgroundSize='96px 96px'
                backgroundRepeat='repeat'
                minHeight='100vh'
            >
                <Footer />
            </chakra.main>
        </Layout>
    );
}