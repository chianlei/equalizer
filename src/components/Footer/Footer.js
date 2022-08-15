import React from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';
import logoImg from '../../assets/logo.svg';
import Icons from './Icons';

const Footer = () => {
  return (
    <Flex
      flexWrap="wrap"
      mt="50px"
      pb="30px"
      pl={['35px', '50px', '60px', '80px']}
    >
      <Box w="100px" h="40px">
        <Image src={logoImg} w="146px"></Image>
      </Box>
      <Text fontSize="16px">
        All rights reserved © Equalizer 2021 Have any problems? Contact us via
        social media or email us at
        <Text fontWeight="bold">equalizer@example.com</Text>
      </Text>

      <Icons />
    </Flex>
  );
};

export default Footer;
