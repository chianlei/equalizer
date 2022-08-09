import React from 'react';
import { ChakraProvider, Box, Wrap, WrapItem } from '@chakra-ui/react';
import theme from './components/theme';
import bg from './assets/bg-main-desktop.png';
import Intro from './components/intro';
import Content from './components/content';
import Footer from './components/footer';

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
            <Intro></Intro>
          </WrapItem>
          <WrapItem>
            <Content></Content>
          </WrapItem>
          <WrapItem>
            <Footer></Footer>
          </WrapItem>
        </Wrap>
      </Box>
    </ChakraProvider>
  );
}

export default App;
