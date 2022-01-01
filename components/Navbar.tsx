import {
  Flex,
  Box,
  Link as ChakraLink,
  Stack,
  useBreakpointValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Link from './Link';
import Image from 'next/image';
import logo from '../public/assets/logo.svg';

export default function Navbar() {
  const logoSize = useBreakpointValue({ base: 30, md: 40 });
  const NAVIGATION = [
    { text: 'me', path: '/me' },
    // { text: 'projects', path: '/projects' },
    // { text: 'posts', path: '/posts' },
    { text: 'music', path: '/music' },
  ];

  return (
    <Flex flexDir={{ base: 'row', md: 'column' }} alignItems="center" mb="3rem">
      <Box mb={{ base: 0, md: '2rem' }} mr={{ base: '2rem', md: 0 }}>
        <NextLink href="/" passHref>
          <ChakraLink>
            <Image
              src={logo}
              alt="two pink curly braces"
              width={logoSize}
              height={logoSize}
            />
          </ChakraLink>
        </NextLink>
      </Box>
      <Stack
        direction={{ base: 'row', md: 'column' }}
        spacing={{ base: '1rem', md: 0 }}
      >
        {NAVIGATION.map(({ text, path }) => (
          <Link key={path} text={text} path={path} />
        ))}
      </Stack>
    </Flex>
  );
}
