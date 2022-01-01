import {
  Flex,
  Spacer,
  IconButton,
  Tooltip,
  Box,
  Link as ChakraLink,
  Stack,
} from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Link from './Link';
import Image from 'next/image';
import Hoverable from './Hoverable';
import { FOAM_URL } from '../constants/urls';
import logo from '../public/assets/logo.svg';

export default function Navbar() {
  const NAVIGATION = [
    { text: 'me', path: '/me' },
    { text: 'projects', path: '/projects' },
    { text: 'posts', path: '/posts' },
    { text: 'music', path: '/music' },
  ];

  const LOGO_SIZE = 40;

  return (
    <Box>
      <Box mb="2rem">
        <NextLink href="/" passHref>
          <ChakraLink>
            <Image src={logo} alt="logo" width={LOGO_SIZE} height={LOGO_SIZE} />
          </ChakraLink>
        </NextLink>
      </Box>
      <Stack>
        {NAVIGATION.map(({ text, path }) => (
          <Link key={path} text={text} path={path} />
        ))}
      </Stack>
    </Box>
  );
}
