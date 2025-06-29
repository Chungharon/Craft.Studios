import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  Badge,
  Button,
  VStack,
  HStack
} from '@chakra-ui/react'
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons'

const PricingCard = ({ name, price, features, popular = false }) => {
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const popularBg = useColorModeValue('teal.50', 'teal.900')
  const popularBorder = useColorModeValue('teal.200', 'teal.600')
  const priceColor = useColorModeValue('gray.600', 'gray.400')
  const listItemColor = useColorModeValue('gray.700', 'gray.300')

  return (
    <Box
      position="relative"
      borderRadius="xl"
      p={8}
      bg={popular ? popularBg : bg}
      borderWidth="2px"
      borderColor={popular ? popularBorder : borderColor}
      boxShadow="lg"
      minH="420px"
      width="100%"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: '2xl',
        borderColor: popular ? 'teal.300' : 'teal.200'
      }}
      display="flex"
      flexDirection="column"
    >
      {popular && (
        <Badge
          position="absolute"
          top={-3}
          left="50%"
          transform="translateX(-50%)"
          colorScheme="teal"
          variant="solid"
          px={4}
          py={1}
          borderRadius="full"
          fontSize="sm"
          fontWeight="bold"
        >
          <HStack spacing={1}>
            <StarIcon />
            <Text>Most Popular</Text>
          </HStack>
        </Badge>
      )}

      <VStack spacing={4} align="stretch" flex="1">
        <Box textAlign="center">
          <Heading 
            as="h4" 
            variant="section-title" 
            mb={3}
            fontSize="lg"
            color={useColorModeValue('gray.800', 'white')}
          >
            {name}
          </Heading>
          <Text 
            fontSize="3xl" 
            fontWeight="bold" 
            color="teal.500" 
            mb={2}
          >
            {price}
          </Text>
          {price.includes('/month') && (
            <Text fontSize="sm" color={ priceColor }>
              Billed monthly
            </Text>
          )}
        </Box>

        <Box flex="1">
          <List spacing={3}>
            {features.map((feature, index) => (
              <ListItem 
                key={index} 
                fontSize="md"
                display="flex"
                alignItems="center"
                color={ listItemColor}
              >
                <Icon 
                  as={CheckCircleIcon} 
                  color="green.500" 
                  mr={3} 
                  boxSize={4}
                />
                {feature}
              </ListItem>
            ))}
          </List>
        </Box>

        <Button
          colorScheme="teal"
          variant={popular ? "solid" : "outline"}
          size="lg"
          mt="auto"
          _hover={{
            transform: 'scale(1.02)',
            boxShadow: 'md'
          }}
          transition="all 0.2s ease"
        >
          Get Started
        </Button>
      </VStack>
    </Box>
  )
}

export default PricingCard
