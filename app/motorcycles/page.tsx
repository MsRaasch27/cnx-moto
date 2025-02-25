'use client'

import { useState } from 'react'
import {
  Container,
  SimpleGrid,
  Box,
  Image,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'

export default function MotorcycleList() {
  const [motorcycles] = useState([
    {
      id: 1,
      brand: 'Harley Davidson',
      model: 'Street 750',
      price: 100,
      distance: '5000 km',
      image: 'https://placeholder.com/300x200',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'CBR 600RR',
      price: 85,
      distance: '3000 km',
      image: 'https://placeholder.com/300x200',
    },
  ])

  return (
    <Container maxW="container.xl" py={8}>
      <Heading mb={6}>Available Motorcycles</Heading>
      <SimpleGrid 
        columns={{ base: 1, md: 2, lg: 3 }} 
        gap={8}
      >
        {motorcycles.map((motorcycle) => (
          <Box 
            key={motorcycle.id} 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden"
          >
            <Image
              src={motorcycle.image}
              alt={`${motorcycle.brand} ${motorcycle.model}`}
              height="200px"
              width="100%"
              objectFit="cover"
            />
            <Box p={6}>
              <Heading size="md" mb={2}>
                {motorcycle.brand} {motorcycle.model}
              </Heading>
              <Text color="gray.600" mb={2}>
                ${motorcycle.price} per day
              </Text>
              <Text color="gray.600" mb={4}>
                Distance: {motorcycle.distance}
              </Text>
              <Link href={`/rent/${motorcycle.id}`} passHref>
                <Button colorScheme="red" width="full">
                  Rent Now
                </Button>
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
} 