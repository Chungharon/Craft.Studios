import {
  Box,
  Image,
  Text,
  Stack,
  Tag,
  IconButton,
  Link,
  Button
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { useState, useRef, useLayoutEffect } from 'react'

const TeamCard = ({ name, bio, techStack, image, github }) => {
  const [showAllSkills, setShowAllSkills] = useState(false)
  const [isBioExpanded, setIsBioExpanded] = useState(false)
  const [isBioTruncated, setIsBioTruncated] = useState(false)
  const bioRef = useRef(null)

  const displayedSkills = showAllSkills ? techStack : techStack.slice(0, 5)

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
    >
      <Image borderRadius="full" boxSize="100px" src={image} alt={name} mx="auto" />
      <Stack mt={4} spacing={2} align="center" flexGrow={1}>
        <Text fontWeight="bold">{name}</Text>
        <Box textAlign="center">
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
        <Stack direction="row" wrap="wrap" justify="center" pt={2}>
          {displayedSkills.map(tech => (
            <Tag key={tech} colorScheme="teal" variant="subtle" m={1}>
              {tech}
            </Tag>
          ))}
        </Stack>
      </Stack>
      <Stack mt={4} align="center" justify="center" direction="row">
        {techStack.length > 5 && (
          <Button
            size="xs"
            variant="ghost"
            colorScheme="teal"
            onClick={() => setShowAllSkills(!showAllSkills)}
          >
            {showAllSkills ? 'Show Less' : `+${techStack.length - 5} more`}
          </Button>
        )}
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
}

export default TeamCard
