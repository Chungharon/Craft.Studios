import {
  Box,
  Icon,
  Text,
  Stack,
  Tag,
  IconButton,
  Link,
  Button
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { useState, useRef, useLayoutEffect } from 'react'

const ServiceCard = ({ name, bio, techStack, icon, github }) => {
  const [isBioExpanded, setIsBioExpanded] = useState(false)
  const [isBioTruncated, setIsBioTruncated] = useState(false)
  const bioRef = useRef(null)

  useLayoutEffect(() => {
    if (bioRef.current) {
      const isClamped = bioRef.current.scrollHeight > bioRef.current.clientHeight
      setIsBioTruncated(isClamped)
    }
  }, [bio])

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      h="100%"
      display="flex"
      flexDirection="column"
      textAlign="center"
    >
      {icon && (
        <Box display="flex" justifyContent="center" mb={2}>
          <Icon as={icon} w={10} h={10} color="teal.500" />
        </Box>
      )}
      <Stack mt={4} spacing={2} align="center" flexGrow={1}>
        <Text fontWeight="bold">{name}</Text>
        <Box>
          <Text
            ref={bioRef}
            fontSize="sm"
            color="gray.600"
            textAlign="center"
            noOfLines={isBioExpanded ? undefined : 3}
          >
            {bio}
          </Text>
          {isBioTruncated && (
            <Button
              size="xs"
              variant="link"
              colorScheme="teal"
              mt={1}
              onClick={() => setIsBioExpanded(!isBioExpanded)}
            >
              {isBioExpanded ? 'Read Less' : 'Read More'}
            </Button>
          )}
        </Box>
        <Stack direction="row" wrap="wrap" justify="center">
          {techStack.map((tech, index) => (
            <Tag key={index} colorScheme="teal" variant="subtle" m={1}>
              {tech}
            </Tag>
          ))}
        </Stack>
      </Stack>
      {github && (
        <Link href={github} isExternal mt={4}>
          <IconButton
            aria-label="GitHub profile"
            icon={<FaGithub />}
            variant="ghost"
            colorScheme="gray"
            size="sm"
          />
        </Link>
      )}
    </Box>
  )
}

export default ServiceCard
