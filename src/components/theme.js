import { extendTheme } from '@chakra-ui/react';
import '@fontsource/ibm-plex-sans';

const theme = extendTheme({
  colors: {
    brand: {
      box1: '#191826',
      box2: '#FA7453',
      hover1: '#66E2DC',
      hover2: '#FFB964',
    },
  },
  fonts: {
    heading: 'ibm-plex-sans',
    body: 'ibm-plex-sans',
  },
});

export default theme;
