import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,// This hook needs to be at the top level
  Flex,
  Card,
  CardBody,
  CardFooter,
  Image,
  Link as ChakraLink,
  useColorModeValue // This hook needs to be at the top level
} from '@chakra-ui/react';
import { ArrowBackIcon }
from '@chakra-ui/icons';

// Dummy blog post data
const blogPosts = [
  {
    id: '1',
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies shaping the web.',
    imageUrl: 'https://placehold.co/600x300/AEC6CF/000000?text=Web+Dev+Future', // Example image for card
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
    imageUrl: 'https://placehold.co/600x300/98FB98/000000?text=React+Hooks', // Example image for card
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
    imageUrl: 'https://placehold.co/600x300/ADD8E6/000000?text=CSS+Layouts', // Example image for card
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

const BlogPage = () => {
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  //const { colorMode, toggleColorMode } = useColorMode();

  // --- ALL useColorModeValue calls moved to the top level ---
  const cardBg = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200');
  const cardBorderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const headingColor = useColorModeValue('gray.900', 'gray.100');
  const linkColor = useColorModeValue('teal.500', 'teal.300');
  const buttonScheme = useColorModeValue('teal', 'purple');

  // Define colors for the dangerouslySetInnerHTML content styling
  const contentHeadingColor = useColorModeValue('gray.800', 'gray.200');
  const contentCodeBg = useColorModeValue('gray.100', 'gray.600');
  const contentTextColor = useColorModeValue('gray.700', 'gray.300'); // This was already defined as textColor, but for clarity in sx prop

  const selectedBlog = blogPosts.find(post => post.id === selectedBlogId);

  return (
    <Container maxW="container.lg" py={8}>
      {/* Header Section */}
      <Flex align="center" mb={8}>
        <Box flex="1" textAlign="center">
          <Heading as="h1" size="2xl" mb={2} color={headingColor}>
            Our Awesome Blogs
          </Heading>
          <Text fontSize="lg" color={textColor}>
            Insights, thoughts, and discoveries.
          </Text>
        </Box>
        
      </Flex>

      <Box p={6} borderRadius="lg" shadow="md" bg={cardBg} borderColor={cardBorderColor} borderWidth="1px">
        {selectedBlog ? (
          // Blog Detail View
          <Box>
            <Button
              leftIcon={<ArrowBackIcon />}
              onClick={() => setSelectedBlogId(null)}
              mb={6}
              colorScheme={buttonScheme}
              variant="outline"
            >
              Back to Blogs
            </Button>
            <Heading as="h2" size="xl" mb={4} color={headingColor}>
              {selectedBlog.title}
            </Heading>
            <Box
              fontSize="md"
              color={contentTextColor} // Use the predefined textColor
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
              sx={{
                // Basic styling for content within dangerouslySetInnerHTML
                'h1, h2, h3, h4, h5, h6': {
                  marginTop: '1.5em',
                  marginBottom: '0.5em',
                  fontWeight: 'semibold',
                  color: contentHeadingColor, // Use the predefined contentHeadingColor
                },
                'p': {
                  marginBottom: '1em',
                  lineHeight: 'tall',
                },
                'ul': {
                  marginLeft: '1.5em',
                  marginBottom: '1em',
                  listStyleType: 'disc',
                },
                'ol': {
                  marginLeft: '1.5em',
                  marginBottom: '1em',
                  listStyleType: 'decimal',
                },
                'li': {
                  marginBottom: '0.5em',
                },
                'strong': {
                  fontWeight: 'bold',
                },
                'code': {
                  fontFamily: 'monospace',
                  bg: contentCodeBg, // Use the predefined contentCodeBg
                  px: '0.3em',
                  py: '0.1em',
                  borderRadius: 'md',
                },
                // Styles for images and videos within the content
                'img, video': {
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px', // Apply rounded corners to media
                  marginBottom: '1em',
                  display: 'block', // Ensure they take up full width
                  mx: 'auto', // Center them
                }
              }}
            />
          </Box>
        ) : (
          // Blog List View
          <Box>
            <Heading as="h2" size="lg" mb={6} color={headingColor}>
              All Posts
            </Heading>
            <VStack spacing={6} align="stretch">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  onClick={() => setSelectedBlogId(post.id)}
                  cursor="pointer"
                  variant="outline"
                  borderColor={cardBorderColor}
                  _hover={{ shadow: 'lg', transform: 'translateY(-2px)' }}
                  transition="all 0.2s ease-in-out"
                >
                  {post.imageUrl && (
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      borderTopRadius="lg" // Apply rounded corners to the top of the image
                      objectFit="cover"
                      height="200px" // Fixed height for consistency
                      width="100%"
                    />
                  )}
                  <CardBody>
                    <Heading as="h3" size="md" mb={2} color={linkColor}>
                      {post.title}
                    </Heading>
                    <Text color={textColor}>
                      {post.excerpt}
                    </Text>
                  </CardBody>
                  <CardFooter pt={0}>
                    <ChakraLink color={linkColor} fontWeight="medium" _hover={{ textDecoration: 'underline' }}>
                      Read more &rarr;
                    </ChakraLink>
                  </CardFooter>
                </Card>
              ))}
            </VStack>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default BlogPage;