import React from 'react';
import { Text, Image, Heading, Flex, VStack, Box } from '@chakra-ui/react';
import topRImg from '../assets/bg-pattern-1.svg';
import logoImg from '../assets/logo.svg';

const Intro = () => {
  return (
    <Flex w="100%" pl={['35px', '50px', '60px', '80px']}>
      <VStack>
        <Image
          src={logoImg}
          mt="60px"
          mb={['5', '10', '10', '20']}
          w="146px"
          mr="auto"
        ></Image>
        <Heading
          pb={10}
          fontSize={['40px', '52px', '64px', '88px']}
          pr={['35px', '50px', '70px', '80px']}
        >
          We make your music sound extraordinary.
        </Heading>
        <Text fontSize="20px" pr={['35px', '50px', '70px', '98px']}>
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </Text>
      </VStack>

      <Image
        src={topRImg}
        w={['0%', '30%', '35%', '312px']}
        h={['0%', '30%', '400px', '468px']}
        ml="auto"
      />
    </Flex>
  );
};

export default Intro;
