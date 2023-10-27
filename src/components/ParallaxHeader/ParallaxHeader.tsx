// CHAKRA UI IMPORTS
import { Box, Heading, Divider, useColorMode } from '@chakra-ui/react';
// CSS MODULES
import styles from '@/styles/Index.module.scss';

export default function ParallaxHeader (props: { img: string, heading: string }) {
    const { img, heading } = props;
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            bgColor={ colorMode === 'dark' ? 'black' : 'white' }
            position='relative'
        >
            <Divider variant='dashed' />
            <Box
                className={colorMode === 'dark' ? [styles.parallax, styles.dark].join(' ') : [styles.parallax, styles.light].join(' ')}
                style={{ backgroundImage: `url(${img})` }}
                position='relative'
                zIndex='997'
            ></Box>
            <Box
                bgColor={colorMode == 'dark' ? 'whiteAlpha.700' : 'blackAlpha.900'}
                color={colorMode == 'dark' ? 'black' : 'white'}
                py={2}
                position='absolute'
                zIndex='998'
                left='50%'
                transform='translateX(-50%) translateY(50%)'
                bottom='50%'
                w='95vw'
                maxWidth={650}
            >
                <Heading
                    fontFamily='Roboto Condensed'
                    as='h2'
                    size='2xl'
                    letterSpacing={4}
                    textAlign='center'
                    textTransform='uppercase'
                    wordBreak='break-word'
                >{ heading }</Heading>
            </Box>
            <Divider variant='dashed' />
        </Box>
    );
}