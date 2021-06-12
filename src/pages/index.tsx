import React, { useEffect } from 'react'
import Router from 'next/router'
import { useEmblaCarousel } from 'embla-carousel/react'
import { Box, Heading, Text, Button, Image, theme } from '@chakra-ui/react'
import { Capacitor } from '@capacitor/core'
import { StatusBar } from '@capacitor/status-bar'

const Index = (): React.ReactElement => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start'
  })

  useEffect(() => {
    if (Capacitor.getPlatform() === 'android') {
      StatusBar.setBackgroundColor({ color: theme.colors.gray[100] })
    }
  }, [])

  const handleLearnMoreButton = (): void => {
    emblaApi?.scrollNext()
  }

  const handleGetStartedButton = (): void => {
    Router.replace('/home')
  }

  return (
    <Box w="100vw" h="100vh" ref={emblaRef} overflow="hidden" bg="gray.100">
      <Box display="flex">
        <Box h="100vh" w="100vw" flex="0 0 100%" pt="24" pb="8" px="8" display="flex" flexDir="column">
          <Heading as="h1" color="gray.600">
            Welcome to<br />
            <Text as="span" color="teal">Tokenku</Text>
          </Heading>
          <Text mt="8" fontSize="lg" color="gray.800">
            Shop like never before with Tokenku, a loyalty program made just for you!
          </Text>
          <Box mt="auto" display="flex" flexDir="column">
            <Button onClick={handleGetStartedButton} colorScheme="teal" fontWeight="bold" variant="ghost" p="0" mb="2" justifyContent="flex-start">
              Get Started
            </Button>
            <Button
              onClick={handleLearnMoreButton}
              color="gray.800"
              fontWeight="bold"
              variant="ghost"
              p="0"
              justifyContent="flex-start"
            >
              Learn More
            </Button>
          </Box>
        </Box>
        <Box h="100vh" w="100vw" flex="0 0 100%" pt="24" pb="0" px="8" display="flex" flexDir="column">
          <Heading as="h1" color="gray.600">
            Get <Text as="span" color="gray.800">Tokens</Text>
          </Heading>
          <Text mt="8" fontSize="lg" color="gray.800">
            Just say &quot;Tokenku please!&quot; when shopping or dining, and the merchant will happily giving you tokens!
          </Text>
          <Image mt="auto" src="/img/phone.svg" />
        </Box>
        <Box h="100vh" w="100vw" flex="0 0 100%" pt="24" pb="0" px="8" display="flex" flexDir="column">
          <Heading as="h1" color="gray.600">
            Spend <Text as="span" color="gray.800">Tokens</Text>
          </Heading>
          <Text mt="8" fontSize="lg" color="gray.800">
            Fancy for some delicious cake? Want to save on groceries? Just spend your tokens! All Tokenku merchant welcomes you to use your tokens
          </Text>
          <Image mt="auto" src="/img/groceries.svg" />
        </Box>
        <Box h="100vh" w="100vw" flex="0 0 100%" pt="24" pb="0" px="8" display="flex" flexDir="column">
          <Heading as="h1" color="gray.600">
            Receive <Text as="span" color="gray.800">Special Gifts</Text><br />
            and <Text as="span" color="gray.800">Rewards</Text>
          </Heading>
          <Text mt="8" fontSize="lg" color="gray.800">
            Get vouchers, movie tickets, and many more that suits you the most
          </Text>
          <Image mt="auto" src="/img/reading.svg" />
        </Box>
        <Box h="100vh" w="100vw" flex="0 0 100%" pt="24" pb="8" px="8" display="flex" flexDir="column">
          <Heading as="h1" color="gray.600">
            What Are <Text as="span" color="gray.800">You</Text><br />
            Waiting For?
          </Heading>
          <Text mt="8" fontSize="lg" color="gray.800">
            Let&apos;s get started, shall we?
          </Text>
          <Box mt="auto" display="flex" flexDir="column">
            <Button onClick={handleGetStartedButton} colorScheme="teal" fontWeight="bold" variant="ghost" p="0" mb="2" justifyContent="flex-start">
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Index
