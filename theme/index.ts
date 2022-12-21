import { extendTheme } from '@chakra-ui/react';
import { PRIMARY_ACCENT, TEXT } from './colors';

const theme = extendTheme({
  components: {
    global: {
      body: {
        color: TEXT,
      },
    },
    ListItem: {
      _selection: {
        color: PRIMARY_ACCENT,
      },
    },
  },
  fonts: {
    heading: `'Sora', sans-serif`,
    body: `'Sora', sans-serif`,
  },
  colors: {
    accent: {
      100: '#CE8BAE',
      400: '#D60270',
    },
  },
});

export default theme;
