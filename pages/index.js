import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub, IoLogoLaravel } from 'react-icons/io5'
import Image from 'next/image'

const Home = () => (
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
        Welcome to <strong>Craft.Studio</strong> — Crafting innovative digital portfolios and creative solutions for your brand&apos;s success.
      </Box>


      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Craft.Studio
          </Heading>
          <p>We are a forward-thinking Digital Creative Agency specializing in Website Development, 
            Mobile Applications, and cutting-edge AI integration. 
            Our mission is to empower businesses with seamless digital solutions that elevate user experience, 
            streamline operations, and drive growth.</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/brandcraft_logo.png"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          What we do
        </Heading>
        <Paragraph>
          We build custom websites and mobile apps, and integrate AI agents—from customer support to sales, bookings, and email marketing—into new or existing platforms with full product management.
          Follow us on{' '}
          <Link
            as={NextLink}
            href=" " // replace with your actual Instagram URL
            passHref
            target="_blank"
          >
            Instagram
          </Link>{' '}
          to see our latest work and behind-the-scenes projects.
        </Paragraph>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Check our portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Company Bio
        </Heading>
        <BioSection>
          <BioYear>2021</BioYear>
          Craft.Studio was founded with the vision to empower businesses through cutting-edge digital solutions.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Launched our first line of responsive business websites and mobile apps for local startups.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Expanded into AI development, offering intelligent automation and chatbot services.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Partnered with international clients and introduced scalable cloud-based platforms.
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          Craft.Studio continues to grow as a creative tech studio, delivering innovative web, AI, and mobile solutions worldwide.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/MsFT100" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @MsFT100
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.upwork.com/agencies/1762548676078223360/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLaravel />}
              >
                @upwork (English)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/logout" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @__ngairaharon (Lacheln)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/gichichii/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @Gichichi
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
