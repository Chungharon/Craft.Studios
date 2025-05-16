import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

const PricingCard = ({ name, price, features }) => {
  const bg = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box borderRadius="lg" p={6} bg={bg} boxShadow="lg" maxW="sm" minH="sm" mx="auto">
      <Heading as="h4" size="md" mb={2}>
        {name}
      </Heading>
      <Text fontSize="2xl" fontWeight="bold" color="teal.400" mb={4}>
        {price}
      </Text>
      <List spacing={3} mb={4}>
        {features.map((feature, index) => (
          <ListItem key={index}>
            <Icon as={CheckCircleIcon} color="green.400" mr={2} />
            {feature}
          </ListItem>
        ))}
      </List>
      
    </Box>
  )
}

export default PricingCard
