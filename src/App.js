import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Image,
  Flex,
  Stack,
  Center,
  Heading,
  useMediaQuery,
  Button,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { topRightImg } from './imgs/img';
import logoImg from './assets/logo.svg';
import fbIcon from './assets/icon-facebook.svg';
import insIcon from './assets/icon-instagram.svg';
import twIcon from './assets/icon-twitter.svg';
import { FaFacebook } from 'react-icons/fa';
import theme from './components/theme';
import appleIcon from './assets/icon-apple.svg';
import androidIcon from './assets/icon-android.svg';
import illApp from './assets/illustration-app.png';
import bgP2 from './assets/bg-pattern-2.svg';
import bg from './assets/bg-main-desktop.png';

function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Box bgImage={bg} bgPosition="center" bgRepeat="no-repeat">
          <Box>
            <Flex w="100%">
              <Box ml={60}>
                <Image src={logoImg} pt={20} pb={20}></Image>
                <Heading pb={20} fontSize="95px"q>
                  We make your music sound extraordinary.
                </Heading>
                <Text>
                  A system audio equalizer specifically designed for Android and
                  iOS. Freely tune the way your music sounds with a professional
                  grade parametric EQ & volume mixer. Control bass, mids,
                  treble, gain control, reverb, and more!
                </Text>
              </Box>
              <Box>
                <Image as={topRightImg} />
              </Box>
            </Flex>
            <Box
              ml={60}
              mr={60}
              mt={300}
              w="1200px"
              h="550px"
              bg="Black"
              borderRadius="10px"
            >
              <Image src={bgP2} pl={400} position="absolute" top="820"></Image>
              <Image
                src={illApp}
                w="312px"
                h="642px"
                position="absolute"
                top="680"
                left="410"
              ></Image>
              <Box
                position="absolute"
                top="850"
                left="630"
                bg="brand.box2"
                w="446px"
                h="625px"
                mt={20}
                ml={60}
                borderRadius="10px"
              >
                <Heading color="white" pl={16} pt={70} pb={5}>
                  Premium EQ
                </Heading>
                <Text
                  color="white"
                  pl={16}
                  pr={16}
                  pt={5}
                  pb={15}
                  fontSize={15}
                >
                  Get expert-level control with a robust equalizer, volume
                  mixer, and spatial audio. Take your listening experience to a
                  whole new level and access all our incredible features!
                </Text>
                <Stack direction={['row']} spacing="24px">
                  <Text color="white" fontSize={60} p={16} pt={5} pr={0} pb={5}>
                    $4
                  </Text>
                  <Box pt={55}>
                    <Text color="white">/ month</Text>
                  </Box>
                </Stack>
                <Box>
                  <Center>
                    <Stack>
                      <Box pt={50} pb={2}>
                        <Button
                          bg="black"
                          p={6}
                          w="270px"
                          _hover={{ bg: 'brand.hover1' }}
                        >
                          <Image src={appleIcon} pr={1}></Image>
                          <Text color="white">iOS Download</Text>
                        </Button>
                      </Box>
                      <Button
                        bg="white"
                        p={6}
                        w="270px"
                        _hover={{ bg: 'brand.hover2' }}
                      >
                        <Image src={androidIcon} pr={1}></Image>
                        <Text>Android Download</Text>
                      </Button>
                    </Stack>
                  </Center>
                </Box>
              </Box>
            </Box>
            <Stack direction={['row']} spacing="240px" mt={300} mb={20}>
              <Box w="500px" h="40px">
                <Image src={logoImg} ml={60}></Image>
              </Box>
              <Box w="400px" h="40px">
                <Text>
                  All rights reserved © Equalizer 2021 Have any problems?
                  Contact us via social media or email us at{' '}
                  <Text fontWeight="bold">equalizer@example.com</Text>
                </Text>
              </Box>
              <Box w="400px" h="40px">
                <Stack direction={['row']} spacing="24px">
                  <Button _hover={{ bg: 'brand.box2' }} p={0}>
                    <Image src={fbIcon} boxSize="35px"></Image>
                  </Button>
                  <Button _hover={{ bg: 'brand.box2' }} p={0}>
                    <Image src={insIcon} boxSize="35px"></Image>
                  </Button>
                  <Button _hover={{ bg: 'brand.box2' }} p={0}>
                    <Image src={twIcon} boxSize="35px"></Image>
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
