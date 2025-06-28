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
import theme from '../lib/theme'; // Import your custom theme

export default function Chatbot() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const [isOpen, setIsOpen] = useState(false);

  // Create a ref for the message container
  const messagesEndRef = useRef(null);

  // --- Theme-based color values ---
  const chatBg = useColorModeValue('#f0e7db', '#202023');
  const assistantMessageBg = useColorModeValue('gray.100', 'gray.700');
  const inputBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const iconColor = useColorModeValue('gray.900', 'gray.100');
  const headerBg = useColorModeValue('gray.50', 'gray.900');
  const headerColor = useColorModeValue('gray.800', 'whiteAlpha.900');
  const placeholderColor = useColorModeValue('gray.400', 'gray.500');
  const buttonColorScheme = 'teal';

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Effect to scroll to the bottom whenever messages change or the chatbot opens
  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  return (
    // Main container for the chatbot, positioned at the bottom right.
    <Box position="fixed" bottom="6" right="6" zIndex="1000">
      {/* Chatbot toggle button */}
      {!isOpen && (
        <Button
          onClick={toggleChatbot}
          colorScheme={buttonColorScheme}
          borderRadius="full"
          p={4}
          shadow="lg"
          _hover={{ transform: 'scale(1.1)' }}
          _focus={{ boxShadow: 'outline' }}
          transition="transform 0.2s ease-in-out"
          leftIcon={<IoChatbox size="24px" />}
        >
          Chat with Us
        </Button>
      )}

      {/* Chat window, conditionally rendered based on isOpen state */}
      {isOpen && (
        <Flex
          width={{ base: '90vw', sm: '350px' }}
          height="500px"
          bg={chatBg}
          borderRadius="xl"
          shadow="2xl"
          flexDirection="column"
          overflow="hidden"
          borderWidth="1px"
          borderColor={borderColor}
          sx={{
            '@keyframes-pop-in': {
              from: { transform: 'scale(0.9)', opacity: 0 },
              to: { transform: 'scale(1)', opacity: 1 }
            },
            animation: 'keyframes-pop-in 0.3s ease-out forwards',
            transformOrigin: 'bottom right'
          }}
        >
          {/* Chat header */}
          <Flex
            bg={headerBg}
            color={headerColor}
            p={4}
            alignItems="center"
            justifyContent="space-between"
            borderBottomWidth="1px"
            borderColor={borderColor}
          >
            <Text fontFamily="'M PLUS Rounded 1c', sans-serif" fontWeight="bold" fontSize="lg">
              AI Assistant
            </Text>
            <CloseButton
              onClick={toggleChatbot}
              _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
            />
          </Flex>

          {/* Message display area */}
          <VStack
            ref={messagesEndRef}
            flex="1"
            p={4}
            overflowY="auto"
            spacing={4}
            alignItems="stretch"
          >
            {messages.length === 0 && (
              <Box textAlign="center" color={placeholderColor} mt={10}>
                Ask me anything about our services!
              </Box>
            )}
            {messages.map(m => (
              <Flex
                key={m.id}
                justify={m.role === 'user' ? 'flex-end' : 'flex-start'}
              >
                <Box
                  bg={
                    m.role === 'user' ? theme.colors.grassTeal : assistantMessageBg
                  }
                  color={m.role === 'user' ? 'white' : iconColor}
                  p={3}
                  borderRadius="lg"
                  maxW="80%"
                  boxShadow="sm"
                >
                  <Text>{m.content}</Text>
                </Box>
              </Flex>
            ))}
            {isLoading && (
              <Flex justify="flex-start">
                <Box bg={assistantMessageBg} p={3} borderRadius="lg" boxShadow="sm">
                  <Text>Typing...</Text>
                </Box>
              </Flex>
            )}
          </VStack>

          {/* Message input form */}
          <Box
            as="form"
            onSubmit={handleSubmit}
            p={4}
            borderTopWidth="1px"
            borderColor={borderColor}
            bg={headerBg}
          >
            <Flex>
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                bg={inputBg}
                borderColor={borderColor}
                _hover={{ borderColor: useColorModeValue('gray.400', 'gray.500') }}
                _focus={{
                  borderColor: theme.colors.grassTeal,
                  boxShadow: `0 0 0 1px ${theme.colors.grassTeal}`
                }}
                borderRadius="lg"
                mr={2}
              />
              <Button
                type="submit"
                colorScheme={buttonColorScheme}
                borderRadius="lg"
                px={6}
                isLoading={isLoading}
              >
                Send
              </Button>
            </Flex>
          </Box>
        </Flex>
      )}
    </Box>
  );
}