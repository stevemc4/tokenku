import React from 'react'

import Layout from '../layout/Default'

import { Heading, VStack } from '@chakra-ui/react'

const Home = (): React.ReactElement => {
  return (
    <Layout>
      <VStack alignItems="flex-start">
        <Heading as="h1" fontWeight="regular" color="gray.800">
          Hello, <br />
          John Doe
        </Heading>
      </VStack>
    </Layout>
  )
}

export default Home
