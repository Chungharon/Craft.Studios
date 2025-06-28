import {
  Container,
  Heading,
  Box, Link as ChakraLink,
  useColorModeValue, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button, Text
} from '@chakra-ui/react'

import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph';

const phone = '254701208343'
  //faqs
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We specialize in website design, development, hosting, IT support, and cybersecurity solutions."
    },
    {
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the complexity of the project, but standard websites typically take 4-6 weeks."
    },
    {
      question: "Do you provide ongoing website maintenance?",
      answer: "Yes, we offer maintenance packages to keep your website secure, updated, and running smoothly."
    },
    {
      question: "Can I request custom features for my website?",
      answer: "Absolutely! We tailor website functionalities to match your business needs and preferences."
    },
    {
      question: "How do I get started?",
      answer: "Simply contact us via our website or call us, and our team will guide you through the process."
    }
  ];

const Pricing = () => (
  <Layout>
    <Container overflow="hidden">
      <Box
        borderRadius="lg"
        maxW="container.lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <Text fontSize="lg">
          Building Beyond <strong>Craft.Studio</strong> — Creating tailored web and app experiences designed to grow with your business and captivate your audience.
        </Text>
      </Box>

      <Section delay={0.9}>
        <Box mt={12} mb={16}>
          <Heading as="h3" variant="section-title">
            Frequently Asked Questions
          </Heading>

          <Accordion allowToggle mt={6}>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} mb={4}>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize="md" fontWeight="medium">
                      {faq.question}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Paragraph>
                    {faq.answer}
                  </Paragraph>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Section>

      <Section delay={1.0}>
        <Box align="center" my={12}>
          <ChakraLink
            href={`https://wa.me/${phone}`}
            isExternal
            style={{ textDecoration: 'none' }}
          >
            <Button
              colorScheme="teal"
              size="lg"
              px={8}
              py={4}
            >
              Contact Us
            </Button>
          </ChakraLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Pricing
export { getServerSideProps } from '../components/chakra'
