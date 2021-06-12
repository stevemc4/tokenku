import React from 'react'
import Router from 'next/router'
import { Box, HStack, IconButton, Icon } from '@chakra-ui/react'
import { HiOutlineHome, HiOutlineSparkles, HiOutlineQrcode, HiOutlineBell, HiOutlineUser } from 'react-icons/hi'

interface Props {
  children: React.ReactElement;
}

const DefaultLayout = ({ children }: Props): React.ReactElement => {
  const handleNavigationButton = (target: string): void => {
    Router.push(target)
  }

  return (
    <Box bg="gray.100" minH="100vh">
      <Box pt="24" px="8" pb="8" w="full">
        {children}
      </Box>
      <HStack justifyContent="space-between" bg="white" position="fixed" bottom="0" w="100vw">
        <IconButton
          onClick={() => handleNavigationButton('/home')}
          aria-label="Home"
          colorScheme="gray"
          variant="ghost"
          p="8"
          icon={<Icon color="gray.600" w="6" h="6" as={HiOutlineHome} />}
        />
        <IconButton
          onClick={() => handleNavigationButton('/memberships')}
          aria-label="Memberships"
          colorScheme="gray"
          variant="ghost"
          p="8"
          icon={<Icon color="gray.600" w="6" h="6" as={HiOutlineSparkles} />}
        />
        <IconButton
          aria-label="Home"
          colorScheme="gray"
          variant="ghost" p="8"
          icon={<Icon color="gray.600" w="6" h="6" as={HiOutlineQrcode} />}
        />
        <IconButton
          onClick={() => handleNavigationButton('/home')}
          aria-label="Home"
          colorScheme="gray"
          variant="ghost"
          p="8" icon={<Icon color="gray.600" w="6" h="6" as={HiOutlineBell} />}
        />
        <IconButton
          onClick={() => handleNavigationButton('/home')}
          aria-label="Home"
          colorScheme="gray"
          variant="ghost"
          p="8" icon={<Icon color="gray.600" w="6" h="6" as={HiOutlineUser} />}
        />
      </HStack>
    </Box>
  )
}

export default DefaultLayout
