import {
  Container,
  Heading,
  Box, SimpleGrid ,
  useColorModeValue
} from '@chakra-ui/react'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import ServiceCard from '../components/service-card'
import { HiMiniServerStack } from "react-icons/hi2";
import { SiFigma, SiShopify } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { AiFillApi } from "react-icons/ai";
import { FaWordpress, FaWrench } from "react-icons/fa";
import { SiSass } from "react-icons/si";
const services = [
    {
      name: 'Security, Hosting & Cloud Solutions',
      icon: HiMiniServerStack, 
      bio: 'We provide secure, scalable hosting with AWS, Azure, and cloud solutions, integrating DevOps best practices for automation, reliability, and optimized performance, ensuring seamless deployment and robust cybersecurity.',
      techStack: [],
    },
    {
      name: 'Expert E-Commerce Solutions for Every Business Model',
      icon: SiShopify,
      bio: 'We create custom e-commerce solutions on Shopify, WooCommerce, and Squarespace, specializing in marketplaces, omnichannel, multi-store, multi-warehouse, multi-tenant, multi-region, member-only, digital product sales, and headless e-commerce for seamless, scalable online shopping.',
      techStack: [],
    },
    {
      name: 'API Integration',
      icon: AiFillApi,
      bio: 'We create dynamic websites and applications by integrating various APIs, ensuring smooth data exchange and enhanced functionality for scalable, high-performing digital solutions.',
      techStack: [],
    },
    {
      name: 'Custom App Development',
      icon: CgWebsite,
      bio: 'Building tailored software solutions designed to meet your unique business requirements, delivering scalable, efficient, and high-performance applications.',
      techStack: [],
    },
    {
      name: 'SEO & Maintenance',
      icon: FaWrench,
      bio: 'Optimizing your website to improve search engine rankings and providing ongoing maintenance to ensure peak performance, security, and up-to-date content.',
      techStack: [],
    },
    {
        name: 'WordPress Sites',
        icon: FaWordpress,
        bio: 'We provide custom WordPress solutions, including website development, e-commerce (WooCommerce), SEO, security, multi-site setups, and headless WordPress, ensuring scalable, high-performance digital experiences.',
        techStack: [],
    },
    {
        name: 'Web Design & Graphic Solutions',
        icon: SiFigma,
        bio: 'We craft stunning, user-friendly websites and impactful graphic designs that elevate brands, combining UI/UX design, branding, custom visuals, and responsive layouts for a seamless digital experience.',
        techStack: [],
    },
    {
        name: 'Saas & AI Agents Solutions',
        icon: SiSass,
        bio: 'We develop scalable SaaS platforms and integrate AI-powered agents to automate workflows, enhance customer interactions, and optimize business operations with intelligent, data-driven solutions.',
        techStack: [],
    }
  ]


const Services = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Building Beyond <strong>Boundaries</strong> — Creating tailored web and app experiences designed to grow with your business and captivate your audience.
      </Box>


      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
            <Heading as="h3" fontSize={20} mb={4}>
            What We Offer
            </Heading>
          
          <Section delay={0.5}>
            <SimpleGrid columns={[1, 2]} gap={6}>
            {services.map((member, index) => (
                <ServiceCard
                key={index}
                name={member.name}
                icon={member.icon}
                bio={member.bio}
                techStack={member.techStack}
                github={member.github}
                />
            ))}
            </SimpleGrid>
            </Section>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
        </Box>
      </Box>

      
    </Container>
  </Layout>
)

export default Services
export { getServerSideProps } from '../components/chakra'
