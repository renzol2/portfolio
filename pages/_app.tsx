import '@fontsource/sora';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import {
  Text,
  UnorderedList,
  OrderedList,
  ListItem,
  Heading,
} from '@chakra-ui/react';
import Hoverable from '../components/Hoverable';
import { HIGHLIGHT_COLOR, TEXT } from '../theme/colors';
import { MDXProvider } from '@mdx-js/react';

const TEXT_SIDE_MARGINS = { base: '7%', lg: '25%' };

const components = {
  h1: (props: any) => (
    <Heading
      as="h1"
      size="4xl"
      color="black"
      fontWeight="black"
      letterSpacing="-0.35rem"
      pt="2rem"
      pb="0.5rem"
      textAlign="center"
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
      {...props}
    />
  ),
  h2: (props: any) => (
    <Heading
      as="h2"
      size="2xl"
      color="black"
      letterSpacing={{ base: '-0.15rem', md: '-0.28rem' }}
      mx={TEXT_SIDE_MARGINS}
      pt="2rem"
      pb="0.5rem"
      textAlign="left"
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
      {...props}
    />
  ),
  h3: (props: any) => (
    <Heading
      as="h3"
      size="2xl"
      color="black"
      fontWeight="thin"
      letterSpacing="-0.2rem"
      pb="2rem"
      textAlign="center"
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
      {...props}
    />
  ),
  p: (props: any) => (
    <Text
      my="0.8rem"
      mx={TEXT_SIDE_MARGINS}
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
      color={TEXT}
      {...props}
    />
  ),
  strong: (props: any) => (
    <Text
      as="strong"
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
      fontWeight="bold"
      {...props}
    />
  ),
  em: (props: any) => (
    <Text
      as="em"
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
      fontStyle="italic"
      {...props}
    />
  ),
  ul: UnorderedList,
  ol: OrderedList,
  li: (props: any) => (
    <ListItem
      mx={TEXT_SIDE_MARGINS}
      color={TEXT}
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
      {...props}
    />
  ),
  a: (props: any) => <Hoverable externalHref={props.href} isLink {...props} />,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <ChakraProvider theme={theme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </MDXProvider>
  );
}

export default MyApp;
