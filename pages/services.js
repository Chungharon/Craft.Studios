import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Button, SimpleGrid ,
  useColorModeValue
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import TeamCard from '../components/team-card'


const teamMembers = [
    {
      name: 'Security & Hosting',
      image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
      bio: 'Implementing cloud services and DevOps integration for secure and scalable solutions.',
      techStack:[],
    },
    {
      name: 'E-commerce Solutions',
      image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
      bio: 'Implementing cloud services and DevOps integration for secure and scalable solutions.',
      techStack: [],
    },
    {
      name: 'API Integration',
      image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
      bio: 'Implementing cloud services and DevOps integration for secure and scalable solutions.',
      techStack: [],
    },
    {
      name: 'Custom Web & App Development',
      image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
      bio: 'Implementing cloud services and DevOps integration for secure and scalable solutions.',
      techStack: [],
    },
    {
      name: 'SEO & Maintenance',
      image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
      bio: 'Implementing cloud services and DevOps integration for secure and scalable solutions.',
      techStack: [],
    },
    {
        name: 'WordPress Sites',
        image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
        bio: 'Implementing cloud services and DevOps integration for secure and scalable solutions.',
        techStack: [],
    },
    {
        name: 'Web designs & Graphics',
        image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
        bio: 'Implementing cloud services and DevOps integration for secure and scalable solutions.',
        techStack: [],
    },
    {
        name: 'Saas & AI Agents',
        image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
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
            {teamMembers.map((member, index) => (
                <TeamCard
                key={index}
                name={member.name}
                image={member.image}
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

      <Section delay={0.3}>

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.devas.life/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Sign up my newsletter here
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Services
export { getServerSideProps } from '../components/chakra'
