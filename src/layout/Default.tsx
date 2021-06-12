import React, { useEffect } from 'react'
import Router from 'next/router'
import {
  Box,
  HStack,
  VStack,
  IconButton,
  Icon,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Image,
  Text,
  theme
} from '@chakra-ui/react'
import { HiOutlineHome, HiOutlineSparkles, HiOutlineQrcode, HiOutlineBell, HiOutlineUser } from 'react-icons/hi'
import { Capacitor } from '@capacitor/core'
import { StatusBar, Style } from '@capacitor/status-bar'

interface Props {
  children: React.ReactElement;
}

const DefaultLayout = ({ children }: Props): React.ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    if (Capacitor.getPlatform() === 'android') {
      StatusBar.setStyle({
        style: Style.Light
      })
      StatusBar.setBackgroundColor({ color: theme.colors.gray[100] })
    }
  }, [])

  const handleNavigationButton = (target: string): void => {
    Router.push(target)
  }

  return (
    <VStack bg="gray.100" h="100vh">
      <Box pt="24" px="8" pb="8" w="full" flexGrow={1} overflowY="auto">
        {children}
      </Box>
      <HStack justifyContent="space-between" bg="white" w="100vw">
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
          onClick={onOpen}
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
      <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
        <DrawerOverlay />
        <DrawerContent borderRadius="8">
          <DrawerHeader>
            My Code
          </DrawerHeader>
          <DrawerBody>
            <VStack>
              <Image w="full" src="/img/shiori.svg" />
              <Text>Give this code to the cashier</Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </VStack>
  )
}

export default DefaultLayout
