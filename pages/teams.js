// pages/teams.js
import { Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import TeamCard from '../components/team-card'

const teamMembers = [
  {
    name: 'Chungani Huron',
    image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
    bio: 'Software & DevOps Engineer passionate about automatomation deployment, monitoring, and security for cloud-based applications, integrating CI/CD pipelines.',
    techStack: ['Node.js', 'K8s', 'MongoDB', 'Next.js', 'PostgreSQL', 'Javascript',
       'AdoniJs', 'AWS', 'Minikube', 'Docker', 'Kubernetes',
        'Heroku', 'Ansible', 'Prometheus', 'Linux', 'BashScript', 'Jenkins', 'GitLab'],
    github: "https://github.com/Chungharon"
  },
  {
    name: 'Lennox Mathew',
    image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
    bio: 'Backend engineer with a love for scalable APIs.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Django', 'PostgreSQL', 'Python',
       'Flask','C#', 'ASP.NET', 'SQL Server', 'Firebase', 'Flutter', 'React Native',
        'React', 'Next.js', 'Java', 'Spring Boot', 'MySQL', 'Redis', 'GraphQL'],
    github: "https://github.com/MsFT100"
  },
  {
    name: 'Anitta Vinter',
    image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
    bio: "Product Designer specializing in system architecture and design. Passionate about creating intuitive user experiences and building scalable applications.",
    techStack: ['Node.js', 'Express', 'WebFlow',
       'Miro','Framer', 'Figma', 'Firebase', 'React Native',
        'React', 'Next.js', 'Spring Boot','GraphQL'],
    github: "https://github.com/Anittavinter"
  },
  {
    name: 'Carol Wanjiru',
    image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
    bio: 'Full-stack dev focused on Management, optimization, and securing databases, ensuring performance, backups, and data integrity.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Django', 'PostgreSQL', 'Python',
       'Flask','ASP.NET', 'SQL Server', 'Firebase',
        'React', 'Next.js', 'MySQL', 'GraphQL'],
    github: "https://github.com/alicemwangi"
  },
  {
    name: 'Ernest Gichichi',
    image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
    bio: 'Works on both front-end and back-end development, handling Shopify, WordPress, and other web technologies for complete solutions.',
    techStack: ['Figma', 'Framer', 'MongoDB', 'SquarSpace', 'Shopify', 'WordPress',
       'WooCommerce','Miro', 'Saas', 'AI Agent', 'LLM',
        'React', 'Next.js','MySQL','Blockchain'],
    github: "https://github.com/alicemwangi"
  },
  {
    name: 'Willson Habakuk',
    image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
    bio: 'Develops Android apps while leveraging cloud services for backend, storage, and AI-powered features.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Kotlin', 'PostgreSQL', 'Python',
       'Wordpress','AWS', 'GCP', 'Firebase',
        'React', 'Next.js', 'MySQL', 'GraphQL'],
    github: "https://github.com/alicemwangi"
  },
  {
    name: 'Vincent Aol',
    image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
    bio: 'Backend developer focusing on database managment, and API powered features.',
    techStack: ['Node.js', 'Express', 'Java', 'MySQL', 'Python',
       'Django'],
    github: "https://github.com/aolobiero"
  },
  {
    name: 'Telclan Creatives',
    image: 'https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-314.jpg?w=2000',
    bio: 'Works on both front-end and back-end development, handling Shopify, WordPress, and other web technologies for complete solutions.',
    techStack: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Canva', 'Miro'],
    github: "https://github.com/alicemwangi"
  },
]

const Teams = () => (
  <Layout title="Our Team">
    <Box pb={6}>
      <Heading as="h2" variant="section-title">
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
    </Box>
  </Layout>
)

export default Teams
export { getServerSideProps } from '../components/chakra'
