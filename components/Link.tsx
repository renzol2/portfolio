import {
  BoxProps,
  Link as ChakraLink,
  LinkBoxProps,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import '@fontsource/roboto-mono/200.css';

interface LinkProps {
  text: string;
  path: string;
  // TODO: figure out how to pass Chakra Link props (for CSS props)
  props?: ChakraLinkProps;
}

export default function Link({ text, path, props }: LinkProps) {
  return (
    <NextLink key={path} href={path} passHref>
      <ChakraLink
        fontFamily="Roboto Mono"
        color="black"
        textDecoration="none"
        _hover={{
          color: 'gray',
          textDecoration: 'underline',
        }}
        {...props}
      >
        {text}
      </ChakraLink>
    </NextLink>
  );
}
