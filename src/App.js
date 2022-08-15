import React from 'react';
import { ChakraProvider, Box, Wrap, WrapItem } from '@chakra-ui/react';
import theme from './utils/theme';
import bg from './assets/bg-main-desktop.png';
import Intro from './components/Intro';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

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
            <Intro/>
          </WrapItem>
          <WrapItem>
            <Footer/>
          </WrapItem>
        </Wrap>
      </Box>
    </ChakraProvider>
  );
}

export default App;
