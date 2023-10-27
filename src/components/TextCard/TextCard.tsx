// CHAKRA UI IMPORTS
import { Box, Card, CardBody, Text, useColorMode } from '@chakra-ui/react';
// REACT LIBRARY IMPORTS
import { useState, useEffect } from 'react';

export default function TextCard (props: { text: string }) {
    const { text } = props;
    const { colorMode, toggleColorMode } = useColorMode();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (window) {
            setWidth(window.innerWidth);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });
    }, []);

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
                <CardBody
                    px={2}
                    py={0}
                    { ...width >= 480 && { px: 4, py: 2 } }
                    { ...width >= 768 && { px: 6, py: 4 } }
                >
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