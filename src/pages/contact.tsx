import Footer from "@/components/Footer/Footer";
import { chakra, Heading, Divider } from "@chakra-ui/react";
import SocialBanner from "@/components/SocialBanner/SocialBanner";

export default function ContactPage () {
    return (
        <chakra.div
            pt={24}
        >
            <Heading
                as='h1'
                size='4xl'
                textAlign='center'
                py={5}
            >Contact</Heading>
            <Divider />
            <SocialBanner />
            <Footer />
        </chakra.div>
    );
}