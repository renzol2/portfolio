import "@fontsource/sora";
import type { AppProps } from "next/app";
import { ChakraProvider, Highlight, Code } from "@chakra-ui/react";
import theme from "../theme";
import {
  Text,
  UnorderedList,
  OrderedList,
  ListItem,
  Heading,
} from "@chakra-ui/react";
import Hoverable from "../components/Hoverable";
import { HIGHLIGHT_COLOR, TEXT } from "../theme/colors";
import { MDXProvider } from "@mdx-js/react";
import SyntaxHighlighter from "../components/SyntaxHighlighter";

// TODO: clean up these constants
// export const TEXT_SIDE_MARGINS = { base: "7%", lg: "25%" };
export const TEXT_SIDE_MARGINS = "0%";
export const TEXT_SIDE_MARGINS_NEGATIVE = { base: "-7%", lg: "-25%" };

const components = {
  h1: (props: any) => (
    <Heading
      as="h1"
      size={{ base: "3xl", md: "4xl" }}
      color="black"
      fontWeight="black"
      letterSpacing="-0.35rem"
      mx={TEXT_SIDE_MARGINS_NEGATIVE} // negative margins to give more width compared to body
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
      letterSpacing={{ base: "-0.15rem", md: "-0.28rem" }}
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
      size="xl"
      color="black"
      fontWeight="thin"
      letterSpacing="-0.2rem"
      pb="1rem"
      pt="2.2rem"
      textAlign="center"
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
      {...props}
    />
  ),
  h4: (props: any) => (
    <Heading
      as="h4"
      size="xl"
      color="black"
      fontWeight="thin"
      letterSpacing="-0.2rem"
      pt="3rem"
      textAlign="center"
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
      {...props}
    />
  ),
  p: (props: any) => (
    <Text
      fontSize="lg"
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
  ul: (props: any) => <UnorderedList fontSize="lg" {...props} />,
  ol: OrderedList,
  li: (props: any) => (
    <ListItem
      mx={TEXT_SIDE_MARGINS}
      my="0.7rem"
      color={TEXT}
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
      {...props}
    />
  ),
  a: (props: any) => <Hoverable externalHref={props.href} isLink {...props} />,
  code: (props: any) => <SyntaxHighlighter props={props} />,
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
