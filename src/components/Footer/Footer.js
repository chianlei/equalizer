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
      <Box w="100px" mr="110px">
        <Image
          src={logoImg}
          w="146px"
          mb={['10px', '20px', '30px', '50px']}
        ></Image>
      </Box>
      <Box
        maxW="600px"
        mr="150px"
        mb={['15px', '15px', '15px', '20px', '20px']}
        h={['120px', '120px', '150px', '70px', '70px']}
      >
        <Text fontSize="16px">
          All rights reserved © Equalizer 2021 Have any problems? Contact us via
          social media or email us at
          <Text fontWeight="bold">equalizer@example.com</Text>
        </Text>
      </Box>
      <Icons />
    </Flex>
  );
};

export default Footer;
