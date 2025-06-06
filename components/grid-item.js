import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({
  children,
  category = 'works',
  id,
  title,
  thumbnail
}) => {
  // Check if id is an external URL (starts with http:// or https://)
  const isExternal = id.startsWith('http://') || id.startsWith('https://')

  if (isExternal) {
    // Render external link without NextLink wrapper
    return (
      <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            width={800}
            height={600}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <LinkOverlay as="a" href={id} isExternal>
            <Text mt={2} fontSize={20}>{title}</Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </Box>
    )
  }

  // Internal link case: use NextLink for client-side routing
  return (
    <Box w="100%" textAlign="center">
      <LinkBox
        as={NextLink}
        href={`/${category}/${id}`}
        scroll={false}
        cursor="pointer"
      >
        <Image
          src={thumbnail}
          alt={title}
          width={800}
          height={600}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay>
          <Text mt={2} fontSize={20}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
