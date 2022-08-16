import React from 'react';
import { ChakraProvider, Box, Wrap, WrapItem } from '@chakra-ui/react';
import theme from './utils/theme';
import bg from './assets/bg-main-desktop.png';
import Intro from './components/Intro';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Download from './components/Content/Download';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        bgImage={bg}
        bgPosition="center"
        bgRepeat="no-repeat"
        w={['100%', '100%', '100%', '100%']}
      >
        <Wrap>
          <WrapItem>
            <Intro />
          </WrapItem>
          <WrapItem w="100%">
            <Box w="100%" align="center">
              <Content />
              <Box
                mt={['50px', '50px', '-400px', '-400px']}
                justify="center"
                px={['50px', '50px', '150px', '210px']}
              >
                <Download />
              </Box>
            </Box>
          </WrapItem>
          <WrapItem>
            <Footer />
          </WrapItem>
        </Wrap>
      </Box>
    </ChakraProvider>
  );
}

export default App;
