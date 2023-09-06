import Footer from "@/components/Footer/Footer";
import { chakra, Button, Heading, Divider, useColorMode, Input, Textarea, Flex, Image, Box } from "@chakra-ui/react";
import ContactImage from '/public/images/contact.webp';
import styles from '@/styles/Index.module.scss';
import PageHeader from "@/components/PageHeader/PageHeader";
import Layout from "@/components/Layout";
import { MdSend } from "react-icons/md";

export default function ContactPage () {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Layout>
            <PageHeader
                heading='Contact'
            />
            <chakra.main
                backgroundColor={colorMode === 'dark' ? '#171923' : '#CBD5E0'}
                backgroundImage={colorMode === 'dark' ? 'linear-gradient(135deg, #1A202C 25%, transparent 25%), linear-gradient(225deg, #1A202C 25%, transparent 25%), linear-gradient(45deg, #1A202C 25%, transparent 25%), linear-gradient(315deg, #1A202C 25%, #171923 25%)' : 'linear-gradient(135deg, #EDF2F7 25%, transparent 25%), linear-gradient(225deg, #EDF2F7 25%, transparent 25%), linear-gradient(45deg, #EDF2F7 25%, transparent 25%), linear-gradient(315deg, #EDF2F7 25%, #CBD5E0 25%)'}
                backgroundPosition='96px 0, 96px 0, 0 0, 0 0'
                backgroundSize='96px 96px'
                backgroundRepeat='repeat'
                minHeight='100vh'
                py={3}
            >
                <Flex
                    direction='row'
                    justify='center'
                    align='center'
                    gap={20}
                >
                    <Image
                        alt='Child learning'
                        src={ContactImage.src}
                        w='auto'
                        h={512}
                    />
                    <Flex
                        direction='column'
                        justify='center'
                        align='space-between'
                        h='100%'
                    >
                        <Heading
                            as='h2'
                            size='xl'
                            textAlign='center'
                        >Invest with the Best</Heading>
                        <Heading
                            as='h3'
                            size='l'
                            textAlign='center'
                        >For investors seeking long-term growth in education</Heading>
                        <chakra.form
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                            alignItems='center'
                            gap='5px'
                            w={300}
                            mx='auto'
                            p={4}
                            backgroundColor={colorMode === 'dark' ? 'gray.900' : 'gray.200'}
                            opacity={1}
                            borderWidth={2}
                            borderStyle='solid'
                            borderColor='red.500'
                            rounded={4}
                        >
                            <Input
                                size='md'
                                variant='flushed'
                                placeholder='Name...'
                                />
                            <Input
                                size='md'
                                variant='flushed'
                                placeholder='Email...'
                            />
                            <Input
                                size='md'
                                variant='flushed'
                                placeholder='Subject...'
                            />
                            <Textarea
                                size='md'
                                variant='flushed'
                                placeholder='Please enter your message...'
                            />
                            <Button
                                variant='outline'
                                type='submit'
                                textTransform='uppercase'
                                leftIcon={<MdSend size={16} />}
                            >Submit</Button>
                        </chakra.form>
                    </Flex>
                </Flex>
                <Footer />
            </chakra.main>
        </Layout>
    );
}