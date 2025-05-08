import { Box, Image, Text, Stack, Tag, IconButton, Link } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

const TeamCard = ({ name, bio, techStack, image, github }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
    <Image borderRadius="full" boxSize="100px" src={image} alt={name} mx="auto" />
    <Stack mt={4} spacing={2} align="center">
      <Text fontWeight="bold">{name}</Text>
      <Text fontSize="sm" color="gray.600" textAlign="center">{bio}</Text>
      <Stack direction="row" wrap="wrap" justify="center">
        {techStack.map((tech, index) => (
          <Tag key={index} colorScheme="teal" variant="subtle" m={1}>
            {tech}
          </Tag>
        ))}
      </Stack>
      {github && (
        <Link href={github} isExternal>
          <IconButton
            aria-label="GitHub profile"
            icon={<FaGithub />}
            variant="ghost"
            colorScheme="gray"
            size="sm"
          />
        </Link>
      )}
    </Stack>
  </Box>
)

export default TeamCard
