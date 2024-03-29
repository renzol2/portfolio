import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import '@fontsource/roboto-mono/400.css';
import { HIGHLIGHT_COLOR, TEXT } from '../theme/colors';

interface LinkProps {
  text: string;
  path: string;
  color?: string | undefined;
  props?: ChakraLinkProps;
}

export default function Link({ text, path, props, color = TEXT }: LinkProps) {
  return (
    <NextLink key={path} href={path} passHref legacyBehavior>
      <ChakraLink
        color={color}
        textDecoration="none"
        _hover={{
          color,
          textDecoration: 'underline wavy',
        }}
        _selection={{
          background: HIGHLIGHT_COLOR,
        }}
        width="auto"
        {...props}
      >
        {text}
      </ChakraLink>
    </NextLink>
  );
}
