import React from 'react';
import { Box, Image, Flex, Spacer } from '@chakra-ui/react';

import bgP2 from '../../assets/bg-pattern-2.svg';
import Download from './Download';

const Content = () => {
  return (
    <Box
      w={['100%', '100%', '80%', '80%']}
      bg="brand.box1"
      borderRadius="10px"
      mt="200px"
      h="500px"
    >
      <Image src={bgP2} w="250px" ml={['-20px', '-20px', 'none', '-215px']}></Image>
    </Box>
  );
};

export default Content;
