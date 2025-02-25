'use client'

import {
  Box,
  Flex,
  Heading,
  Button,
  Container,
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <Box bg="red.600" color="white" py={4}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Link href="/" passHref>
            <Heading size="md" cursor="pointer">
              Motorcycle Rental
            </Heading>
          </Link>
          <Flex gap={4}>
            <Link href="/" passHref>
              <Button variant="ghost" color="white">
                Home
              </Button>
            </Link>
            <Link href="/motorcycles" passHref>
              <Button variant="ghost" color="white">
                Motorcycles
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
} 