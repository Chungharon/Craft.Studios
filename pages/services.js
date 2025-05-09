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
      name: 'Security & Hosting',
      icon: HiMiniServerStack, 
      bio: 'Implementing cloud services and DevOps integration for secure and scalable solutions.',
      techStack: [],
    },
    {
      name: 'E-commerce Solutions',
      icon: SiShopify,
      bio: 'Implementing cloud services and DevOps integration for secure and scalable solutions.',
      techStack: [],
    },
    {
      name: 'API Integration',
      icon: AiFillApi,
      bio: 'Implementing cloud services and DevOps integration for secure and scalable solutions.',
      techStack: [],
    },
    {
      name: 'Custom Web & App Development',
      icon: CgWebsite,
      bio: 'Implementing cloud services and DevOps integration for secure and scalable solutions.',
      techStack: [],
    },
    {
      name: 'SEO & Maintenance',
      icon: FaWrench,
      bio: 'Implementing cloud services and DevOps integration for secure and scalable solutions.',
      techStack: [],
    },
    {
        name: 'WordPress Sites',
        icon: FaWordpress,
        bio: 'Implementing cloud services and DevOps integration for secure and scalable solutions.',
        techStack: [],
    },
    {
        name: 'Web designs & Graphics',
        icon: SiFigma,
        bio: 'Implementing cloud services and DevOps integration for secure and scalable solutions.',
        techStack: [],
    },
    {
        name: 'Saas & AI Agents',
        icon: SiSass,
        bio: 'Implementing cloud services and DevOps integration for secure and scalable solutions.',
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
