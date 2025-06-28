import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  useColorModeValue,
  SimpleGrid,
  AspectRatio
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import Section from '../components/section';

// Dummy blog post data
const blogPosts = [
  {
    id: '1',
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies shaping the web.',
    imageUrl: '/images/works/amembo_01.gif', // Example image for card
    author: 'Chungani Haron',
    authorAvatar: '/images/takuya.jpg',
    readTime: '3 min read',
    content: `
      <p>Web development is an ever-evolving field, constantly introducing new tools, frameworks, and methodologies. The landscape is shifting rapidly towards more interactive, performant, and user-centric experiences.</p>
      <img src="https://placehold.co/800x450/87CEEB/000000?text=AI+in+Web" alt="AI in Web Development" style="max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 1em;" />
      <h2>Key Trends to Watch</h2>
      <ul>
        <li><strong>AI and Machine Learning Integration:</strong> Expect more AI-powered features, from personalized content to intelligent chatbots.</li>
        <li><strong>Serverless Architectures:</strong> Simplified deployment and scaling will continue to gain traction.</li>
        <li><strong>WebAssembly (Wasm):</strong> Enabling near-native performance for complex web applications.</li>
        <li><strong>Progressive Web Apps (PWAs):</strong> Bridging the gap between web and native mobile apps.</li>
        <li><strong>Low-Code/No-Code Platforms:</strong> Empowering non-developers to build functional applications.</li>
      </ul>
      <p>Staying updated with these trends is crucial for any developer aiming to build robust and future-proof web applications. The emphasis will increasingly be on performance, security, and delivering seamless user experiences across all devices.</p>
      <p>The community's collaborative spirit and open-source contributions will continue to drive innovation, making web development an exciting space to be in.</p>
    `,
  },
  {
    id: '2',
    title: 'Mastering React Hooks',
    excerpt: 'A deep dive into useState, useEffect, and custom hooks.',
    imageUrl: '/images/works/amembo_02.gif', // Example image for card
    author: 'Chungani Haron',
    authorAvatar: '/images/takuya.jpg',
    readTime: '5 min read',
    content: `
      <p>React Hooks revolutionized how we write functional components, allowing us to use state and other React features without writing a class. They promote cleaner, more readable code and better separation of concerns.</p>
      <video controls style="max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 1em;">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <h2>Understanding Core Hooks</h2>
      <ul>
        <li><strong><code>useState</code>:</strong> The fundamental hook for adding state to functional components. It returns a stateful value and a function to update it.</li>
        <li><strong><code>useEffect</code>:</strong> Used for side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after every render by default.</li>
        <li><strong><code>useContext</code>:</strong> Provides a way to pass data through the component tree without having to pass props down manually at every level.</li>
        <li><strong><code>useReducer</code>:</strong> An alternative to <code>useState</code> for more complex state logic, especially when the next state depends on the previous one.</li>
      </ul>
      <p>Custom hooks are a powerful feature that allows you to extract component logic into reusable functions. This promotes code reusability and keeps your components lean and focused on rendering UI.</p>
      <p>By mastering these hooks, developers can write more efficient, maintainable, and scalable React applications.</p>
    `,
  },
  {
    id: '3',
    title: 'CSS Grid vs. Flexbox: When to Use Which?',
    excerpt: 'A guide to choosing the right layout tool for your project.',
    imageUrl: '/images/works/amembo_03.jpg', // Example image for card
    author: 'Chakra UI',
    authorAvatar: '/brandcraft_logo.png',
    readTime: '4 min read',
    content: `
      <p>Both CSS Grid and Flexbox are powerful layout modules that have transformed modern web design. While they can sometimes achieve similar results, they are designed for different purposes and excel in different scenarios.</p>
      <img src="https://placehold.co/800x450/B0E0E6/000000?text=Grid+vs+Flex" alt="CSS Grid vs Flexbox" style="max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 1em;" />
      <h2>Flexbox: One-Dimensional Layout</h2>
      <p>Flexbox (Flexible Box Module) is designed for one-dimensional layouts, meaning it can arrange items either in a row or in a column. It's perfect for distributing space among items in a single line or stack, aligning items, and reordering them.</p>
      <ul>
        <li>Ideal for navigation bars, form controls, and distributing items within a single row/column.</li>
        <li>Great for content-out layouts where the size of items dictates the container.</li>
      </ul>
      <h2>CSS Grid: Two-Dimensional Layout</h2>
      <p>CSS Grid Layout is designed for two-dimensional layouts, allowing you to arrange items in both rows and columns simultaneously. It's perfect for designing the overall structure of a page or complex section, creating a grid of content.</p>
      <ul>
        <li>Best for page layouts, dashboards, and any scenario requiring precise control over rows and columns.</li>
        <li>Excellent for layout-in content where the grid defines the space for items.</li>
      </ul>
      <p>In many modern designs, Flexbox and CSS Grid are used together. Grid can define the macro-layout of the page, while Flexbox can handle the micro-layout within individual grid cells.</p>
    `,
  },
];

const BlogCard = ({ post, onClick }) => {
  const textColor = useColorModeValue('gray.500', 'gray.400')
  const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const cardBg = useColorModeValue('white', '#1a202c');
  const cardBorder = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      bg={cardBg}
      borderRadius="xl"
      overflow="hidden"
      shadow="lg"
      borderWidth="1px"
      borderColor={cardBorder}
      transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
      _hover={{ transform: 'translateY(-4px)', shadow: 'xl' }}
      display="flex"
      flexDirection="column"
      h="100%"
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          src={post.imageUrl}
          alt={post.title}
          objectFit="cover"
        />
      </AspectRatio>
      <Box p={{ base: 6, md: 8 }} d="flex" flexDirection="column" flex="1">
        <Heading 
          as="h3" 
          variant="section-title" 
          mb={4} 
          color={headingColor}
          lineHeight="1.4"
          letterSpacing="tight"
        >
          {post.title}
        </Heading>
        <Text 
          color={textColor} 
          flex="1" 
          mb={6} 
          fontSize="md"
          lineHeight="1.7"
          letterSpacing="0.01em"
        >
          {post.excerpt}
        </Text>
        <Flex align="center" mt="auto">
            <Box mr={4} p="2px"
            borderWidth="2px"
            borderColor="teal.500"
            borderRadius="full"
            display="inline-block">
            <Image
                borderRadius="full"
                boxSize="40px"
                src={post.authorAvatar}
                alt={post.author}
            />
            </Box>
            <Box>
                <Text 
                  fontWeight="bold" 
                  color={headingColor} 
                  fontSize="md"
                  lineHeight="1.4"
                >
                  By {post.author}
                </Text>
                <Text 
                  fontSize="sm" 
                  color={textColor}
                  lineHeight="1.3"
                >
                  {post.readTime}
                </Text>
            </Box>
        </Flex>
      </Box>
    </Box>
  );
};

const BlogPage = () => {
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  //const { colorMode, toggleColorMode } = useColorMode();

  // --- ALL useColorModeValue calls moved to the top level ---
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const headingColor = useColorModeValue('gray.900', 'gray.100');

  // Define colors for the dangerouslySetInnerHTML content styling
  const contentHeadingColor = useColorModeValue('gray.800', 'gray.200');
  const contentCodeBg = useColorModeValue('gray.100', 'gray.600');

  const selectedBlog = blogPosts.find(post => post.id === selectedBlogId);

  return (
    <Layout title="Blog">
      <Container maxW="container.xl" py={10}>
        {/* Header Section */}
        <Section delay={0.1}>
          <Flex direction="column" align="center" mb={10}>
            <Heading as="h1" variant="page-title" mb={4} color={headingColor}>
              Welcome to Our Blog
            </Heading>
            <Text fontSize="lg" color={textColor} textAlign="center" maxW="2xl">
              Here we share our thoughts, tutorials, and updates on the latest in technology and design.
            </Text>
          </Flex>
        </Section>

        <Box>
          {selectedBlog ? (
            // Blog Detail View
            <Section delay={0.1}>
              <Button
                leftIcon={<ArrowBackIcon />}
                onClick={() => setSelectedBlogId(null)}
                mb={8}
                colorScheme="teal"
                variant="outline"
              >
                Back to Blog
              </Button>
              <Heading as="h2" variant="page-title" mb={4} color={headingColor}>
                {selectedBlog.title}
              </Heading>
              <Flex align="center" mb={8}>
                <Box mr={4} p="2px"
                borderWidth="2px"
                borderColor="teal.500"
                borderRadius="full"
                display="inline-block">
                <Image
                    borderRadius="full"
                    boxSize="50px"
                    src={selectedBlog.authorAvatar}
                    alt={selectedBlog.author}
                />
                </Box>
                <Box>
                    <Text fontWeight="bold" color={headingColor} fontSize="md">By {selectedBlog.author}</Text>
                    <Text fontSize="sm" color={textColor}>{selectedBlog.readTime}</Text>
                </Box>
              </Flex>
              
              <Box
                dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                sx={{
                  'h1, h2, h3, h4, h5, h6': {
                    color: contentHeadingColor,
                    fontWeight: 'bold',
                    mb: 4,
                    mt: 6
                  },
                  'h1': { fontSize: '2xl' },
                  'h2': { fontSize: 'xl' },
                  'h3': { fontSize: 'lg' },
                  'p': {
                    color: textColor,
                    fontSize: 'md',
                    mb: 4,
                    lineHeight: 1.6
                  },
                  'ul, ol': {
                    color: textColor,
                    fontSize: 'md',
                    mb: 4,
                    pl: 6
                  },
                  'li': {
                    mb: 2
                  },
                  'code': {
                    bg: contentCodeBg,
                    px: 2,
                    py: 1,
                    borderRadius: 'md',
                    fontSize: 'sm'
                  },
                  'img, video': {
                    borderRadius: 'lg',
                    mb: 4
                  }
                }}
              />
            </Section>
          ) : (
            // Blog List View
            <Section delay={0.2}>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                {blogPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    onClick={() => setSelectedBlogId(post.id)}
                  />
                ))}
              </SimpleGrid>
            </Section>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default BlogPage;