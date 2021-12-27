import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';
import '@fontsource/roboto-mono/200.css';

interface LinkProps {
  text: string;
  path: string;
  // TODO: figure out how to pass Chakra Link props (for CSS props)
}

export default function Link({ text, path }: LinkProps) {
  return (
    <NextLink key={path} href={path} passHref>
      <ChakraLink fontFamily="Roboto Mono" mx="1rem">
        {text}
      </ChakraLink>
    </NextLink>
  );
}
