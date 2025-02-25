'use client'

import { Box, Container, Heading, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
  return (
    <Container maxW="container.xl">
      <Box 
        textAlign="center" 
        mt={20}
        minH="80vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to Motorcycle Rental
        </Heading>
        <Text fontSize="xl" color="gray.600" mb={8}>
          Explore our collection of premium motorcycles
        </Text>
        <Link href="/motorcycles" passHref>
          <Button
            colorScheme="red"
            size="lg"
          >
            View Motorcycles
          </Button>
        </Link>
      </Box>
    </Container>
  )
}
