import { Box, Card, CardBody, Text, useColorMode } from '@chakra-ui/react';

export default function TextCard (props: { text: string }) {
    const { text } = props;
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            maxWidth='1200px'
            mx='auto'
            px={3}
            py={12}
        >
            <Card
                borderTopWidth={3}
                borderTopStyle='solid'
                borderTopColor='red.500'
                borderLeftWidth={6}
                borderLeftStyle='solid'
                borderLeftColor='red.500'
                py={3}
                opacity={0.9}
            >
                <CardBody>
                    <Text
                        fontFamily='Roboto'
                        fontSize='xl'
                        letterSpacing={1}
                    >{ text }</Text>
                </CardBody>
            </Card>
        </Box>
    );
}