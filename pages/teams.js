// pages/teams.js
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import TeamCard from '../components/team-card'

const teamMembers = [
  {
    name: 'Chungani Huron',
    image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
    bio: 'Frontend developer passionate about clean UI and UX.',
    techStack: ['React', 'Chakra UI', 'TypeScript'],
    github: "https://github.com/Chungharon"
  },
  {
    name: 'Lennox Mathew',
    image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
    bio: 'Backend engineer with a love for scalable APIs.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    github: "https://github.com/MsFT100"
  },
  {
    name: 'Carol Wanjiru',
    image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
    bio: 'Full-stack dev focused on performance and security.',
    techStack: ['Flutter', 'Firebase', 'Next.js'],
    github: "https://github.com/alicemwangi"
  },
  {
    name: 'Carol Wanjiru',
    image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
    bio: 'Full-stack dev focused on performance and security.',
    techStack: ['Flutter', 'Firebase', 'Next.js'],
    github: "https://github.com/alicemwangi"
  }
]

const Teams = () => (
  <Layout title="Our Team">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Meet the Team
      </Heading>

      <Section delay={0.1}>
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
    </Container>
  </Layout>
)

export default Teams
export { getServerSideProps } from '../components/chakra'
