import React from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import illApp from '../../assets/illustration-app.png';
import bgP2 from '../../assets/bg-pattern-2.svg';
import Download from './Download';

const Content = () => {
  return (
    <Box
      w="1110px"
      h="600px"
      bg="brand.box1"
      borderRadius="10px"
      mt="110px"
      mx={['0px', '50px', '90px', '150px']}
    >
      {' '}
      <Image src={bgP2} pl={400} position="absolute"></Image>
      <Flex w="100%" flexWrap="wrap">
        <Image
          src={illApp}
          w="312px"
          h="642px"
          position="absolute"
          left="200px"
        ></Image>
        <Download />
      </Flex>
    </Box>
  );
};

export default Content;
