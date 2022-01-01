import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'sans-serif',
    body: 'sans-serif',
  },
  colors: {
    accent: {
      100: '#CE8BAE',
      400: '#D60270',
    },
  },
});

export default theme;
