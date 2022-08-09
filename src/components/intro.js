import React from 'react';
import { Box, Text, Image, Stack, Heading } from '@chakra-ui/react';
import topRImg from './assets/bg-pattern-1.svg';
import logoImg from './assets/logo.svg';

const intro = () => {
  return (
    <Box>
      <Stack direction={['row']} spacing={['', '', '50px', '380px']}>
        <Box ml={['10', '20', '40', '60']} boxSize={'800px'}>
          <Image
            src={logoImg}
            pt={20}
            pb={['5', '10', '10', '20']}
            w={146}
            h={['130', '150', '150', '190']}
          ></Image>
          <Heading pb={20} fontSize={['40px', '64px', '72px', '88px']}>
            We make your music sound extraordinary.
          </Heading>
          <Text fontSize="20px">
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </Text>
        </Box>
        <Box>
          <Image src={topRImg} w={['0%', '50%', '75%', '100%']} />
        </Box>
      </Stack>
    </Box>
  );
};

export default intro;
