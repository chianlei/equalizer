import React from 'react';
import { Box, Text, Image, Stack, Button } from '@chakra-ui/react';
import logoImg from './assets/logo.svg';
import fbIcon from './assets/icon-facebook.svg';
import insIcon from './assets/icon-instagram.svg';
import twIcon from './assets/icon-twitter.svg';

const footer = () => {
  return (
    <Stack direction={['row']} spacing="240px" mt={220} mb={20}>
      <Box w="500px" h="40px">
        <Image src={logoImg} ml={60} w={146}></Image>
      </Box>
      <Box w="400px" h="40px">
        <Text fontSize="16px">
          All rights reserved © Equalizer 2021 Have any problems? Contact us via
          social media or email us at{' '}
          <Text fontWeight="bold">equalizer@example.com</Text>
        </Text>
      </Box>
      <Box w="400px" h="40px">
        <Stack direction={['row']} spacing="24px">
          <Button _hover={{ bg: 'brand.box2' }} p={0} bg="transparent">
            <Image src={fbIcon} boxSize="30px"></Image>
          </Button>
          <Button _hover={{ bg: 'brand.box2' }} p={0} bg="transparent">
            <Image src={insIcon} boxSize="30px"></Image>
          </Button>
          <Button _hover={{ bg: 'brand.box2' }} p={0} bg="transparent">
            <Image src={twIcon} boxSize="30px"></Image>
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default footer;
