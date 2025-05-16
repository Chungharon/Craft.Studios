import {
  Container,
  Heading,
  Box, Link as ChakraLink,
  useColorModeValue, Divider, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Button
} from '@chakra-ui/react'

import Layout from '../components/layouts/article';
import Section from '../components/section';
import PricingCard from '../components/pricing-card';
import { HiMiniServerStack } from "react-icons/hi2";
import { SiFigma, SiShopify } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { AiFillApi } from "react-icons/ai";
import { FaWordpress, FaWrench } from "react-icons/fa";
import { SiSass } from "react-icons/si";
import Slider from 'react-slick'

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

  //pricing
  const pricing = [
  {
    name: 'Security, Hosting & Cloud Solutions',
    icon: HiMiniServerStack,
    bio: 'We provide secure, scalable hosting...',
    price: '$199/month',
    features: ['AWS & Azure Setup', 'Daily Backups', 'DevOps Integration']
  },
  {
    name: 'Expert E-Commerce Solutions',
    icon: SiShopify,
    bio: 'Custom e-commerce on Shopify, WooCommerce...',
    price: '$299/month',
    features: ['Multi-store Setup', 'Omnichannel Support', 'Headless Commerce']
  },
  {
    name: 'API Integration',
    icon: AiFillApi,
    bio: 'We integrate APIs for dynamic features...',
    price: '$149/project',
    features: ['REST & GraphQL', 'Third-party API Integration', 'Secure Endpoints']
  },
  {
    name: 'Custom App Development',
    icon: CgWebsite,
    bio: 'Tailored software solutions...',
    price: '$499/project',
    features: ['Full Stack Dev', 'Mobile-First Design', 'High Scalability']
  },
  {
    name: 'SEO & Maintenance',
    icon: FaWrench,
    bio: 'Improve rankings and maintain your site...',
    price: '$99/month',
    features: ['SEO Optimization', 'Monthly Updates', 'Security Patching']
  },
  {
    name: 'WordPress Sites',
    icon: FaWordpress,
    bio: 'Custom WordPress sites with WooCommerce...',
    price: '$249/project',
    features: ['Custom Themes', 'WooCommerce', 'SEO & Security']
  },
  {
    name: 'Web Design & Graphic Solutions',
    icon: SiFigma,
    bio: 'Stunning and responsive designs...',
    price: '$199/project',
    features: ['UI/UX Design', 'Branding', 'Responsive Layouts']
  },
  {
    name: 'SaaS & AI Agents',
    icon: SiSass,
    bio: 'SaaS platform and AI agent development',
    price: '$399/month',
    features: ['Multi-tenant SaaS', 'AI Workflow Automation', 'User Dashboards']
  }
]

// slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Default for large screens
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
}


const Pricing = () => (
  <Layout>
    <Container overflow={"hidden"}>
      <Box
        borderRadius="lg"
        maxW="container.lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Building Beyond <strong>Boundaries</strong> — Creating tailored web and app experiences designed to grow with your business and captivate your audience.
      </Box>

      <Box display={{ md: 'flex' }} mt={6} maxW="100%">
        <Box flexGrow={1}>
          <Heading as="h3" fontSize={20} mt={10} mb={4}>
            Pricing Packages
          </Heading>

          <Section delay={0.7}>
            <Box px={2} maxW="container.xl"
                >
                <Slider {...settings}>
                {pricing.map((service, index) => (
                    <Box key={index} px={2}>
                    <PricingCard
                        name={service.name}
                        price={service.price}
                        features={service.features}
                    />
                    </Box>
                ))}
                </Slider>
            </Box>
            </Section>



          </Box>
        </Box>
        
        <Divider/>
        <ChakraLink
            href={`https://wa.me/${phone}`}
            isExternal
            style={{ textDecoration: 'none' }}
            >
            <Button colorScheme="teal" variant="outline" width="100%">
                Contact Us
            </Button>
        </ChakraLink>
        <Divider/>
        <Box display={{ md: 'flex' }} mt={6}>
            <Box flexGrow={1}>
            <Heading as="h3" fontSize={20} mb={4}>
                Frequently Asked Questions
            </Heading>

            <Accordion allowToggle>
                
                {faqs.map((faq, index) => (
                <AccordionItem key={index}>
                    <AccordionButton>
                    <Box flex="1" textAlign="left">
                        {faq.question}
                    </Box>
                    <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                    {faq.answer}
                    </AccordionPanel>
                </AccordionItem>
                ))}
            </Accordion>

            </Box>

        </Box>

        
      
    </Container>
  </Layout>
)

export default Pricing
export { getServerSideProps } from '../components/chakra'
