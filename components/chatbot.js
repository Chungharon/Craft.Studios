'use client'; // This directive is crucial for client-side components in Next.js App Router

import React, { useState, useEffect, useRef } from 'react'; // Import useRef
import { useChat } from 'ai/react';
import { IoChatbox } from 'react-icons/io5'; // Import the specific icon

// Import Chakra UI components
import {
  Box,
  Button,
  Input,
  Flex,
  Text,
  VStack,
  useColorModeValue, // This hook needs to be at the top level
  CloseButton,
} from '@chakra-ui/react';

export default function Chatbot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const [isOpen, setIsOpen] = useState(false);

  // Create a ref for the message container
  const messagesEndRef = useRef(null);

  // --- ALL useColorModeValue calls moved to the top level, before any conditional rendering ---
  const userMessageBg = useColorModeValue('blue.100', 'blue.800');
  const assistantMessageBg = useColorModeValue('gray.200', 'gray.600');
  const chatBg = useColorModeValue('gray.50', 'gray.700');
  const inputBg = useColorModeValue('white', 'gray.800');
  const inputBorder = useColorModeValue('gray.300', 'gray.600');
  const sendButtonColor = useColorModeValue('blue.600', 'blue.400');
  const sendButtonHoverColor = useColorModeValue('blue.700', 'blue.500');

  // Define colors that were previously inside the conditional block
  const chatWindowBg = useColorModeValue('white', 'gray.800'); // This was bg={useColorModeValue('white', 'gray.800')}
  const chatWindowBorderColor = useColorModeValue('gray.200', 'gray.700'); // This was borderColor={useColorModeValue('gray.200', 'gray.700')}
  const initialMessageColor = useColorModeValue('gray.500', 'gray.400'); // This was color={useColorModeValue('gray.500', 'gray.400')}
  const loadingTextColor = useColorModeValue('gray.700', 'gray.300'); // This was color={useColorModeValue('gray.700', 'gray.300')}
  const formBorderColor = useColorModeValue('gray.200', 'gray.700'); // This was borderColor={useColorModeValue('gray.200', 'gray.700')}


  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Effect to scroll to the bottom whenever messages change or the chatbot opens
  useEffect(() => {
    if (messagesEndRef.current) {
      // Use setTimeout to ensure the DOM has updated before scrolling
      // This is often necessary with dynamically added content or streams
      setTimeout(() => {
        messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
      }, 100); // A small delay, adjust if needed
    }
  }, [messages, isOpen]); // Depend on messages and isOpen

  return (
    // Main container for the chatbot, positioned at the bottom right.
    // Increased z-index to ensure it appears on top of other page elements.
    <Box
      position="fixed"
      bottom="6"
      right="6"
      zIndex="1000"
    >
      {/* Chatbot toggle button */}
      <Button
        onClick={toggleChatbot}
        colorScheme="blue" // Chakra UI's way of setting color themes
        borderRadius="full"
        p="4" // Equivalent to Tailwind's p-4
        shadow="lg" // Chakra UI shadow
        _hover={{ bg: sendButtonHoverColor, transform: 'scale(1.05)' }} // Chakra UI hover effects
        _focus={{ boxShadow: 'outline' }} // Chakra UI focus effects
        transition="all 0.3s ease-in-out" // Explicit transition for smooth animations
        display="flex"
        alignItems="center"
        gap="2"
        fontSize="lg"
        fontWeight="medium"
        letterSpacing="wide"
      >
        <IoChatbox size="28px" /> {/* react-icons size prop */}
        <Text display={{ base: 'none', sm: 'inline' }}>Message Us</Text> {/* Chakra's responsive display */}
      </Button>

      {/* Chat window, conditionally rendered based on isOpen state */}
      {isOpen && (
        <Flex
          position="absolute"
          bottom="20"
          right="0"
          width={{ base: '90vw', sm: '320px' }} // Responsive width
          height="420px"
          bg={chatWindowBg} // Use the predefined color
          borderRadius="xl"
          shadow="2xl"
          flexDirection="column"
          overflow="hidden"
          borderWidth="1px"
          borderColor={chatWindowBorderColor} // Use the predefined color
          // Applying a direct transform and transition for smooth pop-in
          transform="scale(0.95)"
          transformOrigin="bottom right"
          transition="transform 0.3s ease-out, opacity 0.3s ease-out"
          sx={{
            animation: 'fade-in-up 0.3s ease-out forwards',
            '@keyframes fade-in-up': {
              '0%': { opacity: 0, transform: 'translateY(20px) scale(0.95)' },
              '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
            },
          }}
        >
          {/* Chat header */}
          <Flex
            bgGradient="linear(to-r, blue.700, purple.700)"
            color="white"
            p="4"
            textAlign="center"
            fontSize="xl"
            fontWeight="semibold"
            borderTopRadius="xl"
            shadow="md"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text flex="1">Company AI Assistant</Text> {/* Flex 1 to push close button to right */}
            <CloseButton
              onClick={toggleChatbot}
              color="white"
              _hover={{ color: 'gray.200' }}
              aria-label="Close chat"
            />
          </Flex>

          {/* Message display area */}
          <VStack
            ref={messagesEndRef} // Attach the ref here
            flex="1"
            p="4"
            overflowY="auto"
            bg={chatBg}
            alignItems="flex-start" // Align messages to the left by default
            spacing="4" // Spacing between messages
          >
            {messages.length > 0 ? (
              messages.map(m => (
                <Box
                  key={m.id}
                  p="3"
                  borderRadius="2xl"
                  shadow="sm"
                  maxWidth="85%"
                  bg={m.role === 'user' ? userMessageBg : assistantMessageBg}
                  alignSelf={m.role === 'user' ? 'flex-end' : 'flex-start'} // Align user messages to right, assistant to left
                  borderBottomRightRadius={m.role === 'user' ? 'none' : '2xl'} // Different corner for user/assistant
                  borderBottomLeftRadius={m.role === 'user' ? '2xl' : 'none'} // Different corner for user/assistant
                >
                  <Text fontWeight="semibold" mb="1" fontSize="sm">
                    {m.role === 'user' ? 'You:' : 'Assistant:'}
                  </Text>
                  <Text fontSize="sm">{m.content}</Text>
                </Box>
              ))
            ) : (
              <Box textAlign="center" color={initialMessageColor} fontSize="base" mt="10" p="4" width="full">
                👋 Hi there! I&apos;m your AI Assistant. How can I help you today regarding our company&apos;s services?
              </Box>
            )}
            {/* Loading indicator */}
            {isLoading && (
              <Box
                p="3"
                borderRadius="2xl"
                bg={assistantMessageBg}
                color={loadingTextColor} // Use the predefined loadingTextColor
                shadow="sm"
                alignSelf="flex-start"
                maxWidth="85%"
                borderBottomLeftRadius="none"
                animation="pulse 1.5s infinite" // Basic CSS pulse animation
                sx={{
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                  },
                }}
              >
                <Text fontWeight="semibold" mb="1" fontSize="sm">Assistant:</Text>
                <Text fontSize="sm">Typing...</Text>
              </Box>
            )}
          </VStack>

          {/* Message input form */}
          <Box as="form" onSubmit={handleSubmit} p="4" borderTopWidth="1px" borderColor={formBorderColor} bg={inputBg} shadow="inner">
            <Input
              value={input}
              placeholder="Ask a question..."
              onChange={handleInputChange}
              aria-label="Chat input"
              width="full"
              p="3"
              borderWidth="1px"
              borderColor={inputBorder}
              borderRadius="lg"
              _focus={{ ring: 2, ringColor: 'blue.500', borderColor: 'transparent' }} // Chakra focus styles
              transition="all 0.2s ease-in-out"
              fontSize="sm"
              outline="none" // Ensure no default browser outline
            />
            <Button
              type="submit"
              mt="3"
              width="full"
              bg={sendButtonColor}
              color="white"
              p="3"
              borderRadius="lg"
              shadow="md"
              _hover={{ bg: sendButtonHoverColor, transform: 'scale(1.02)' }}
              _focus={{ boxShadow: 'outline' }}
              transition="all 0.3s ease-in-out"
              fontSize="sm"
              fontWeight="medium"
              isDisabled={isLoading}
            >
              Send Message
            </Button>
          </Box>
        </Flex>
      )}
    </Box>
  );
}