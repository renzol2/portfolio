import {
  Flex,
  Spacer,
  IconButton,
  Tooltip,
  Box,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Link from './Link';
import Image from 'next/image';
import Hoverable from './Hoverable';
import { FOAM_URL } from '../constants/urls';
import logo from '../public/assets/logo.svg';

export default function Navbar() {
  const PRIMARY_NAV = [
    { text: 'about', path: '/about' },
    { text: 'projects', path: '/projects' },
    { text: 'posts', path: '/posts' },
  ];

  const SECONDARY_NAV = [{ text: 'music', path: '/music' }];

  const NAV_SIZE = '40%';

  return (
    <Flex as="nav" width="100%" alignItems="center" justifyContent="center">
      <Box mr="2rem" my="1rem" width={8} height={8}>
        <NextLink href="/" passHref>
          <ChakraLink>
            <Image src={logo} alt="logo" />
          </ChakraLink>
        </NextLink>
      </Box>
      <Flex
        justifyContent="flex-start"
        minWidth={NAV_SIZE}
        maxWidth={NAV_SIZE}
        flexWrap="wrap"
        display={{ base: 'none', md: 'flex' }}
      >
        {PRIMARY_NAV.map(({ text, path }) => (
          <Link key={path} text={text} path={path} props={{ mr: '1.5rem' }} />
        ))}
      </Flex>
      <Spacer />
      <Flex
        justifyContent="flex-end"
        minWidth={NAV_SIZE}
        maxWidth={NAV_SIZE}
        flexWrap="wrap"
        display={{ base: 'none', md: 'flex' }}
      >
        {SECONDARY_NAV.map(({ text, path }) => (
          <Link key={path} text={text} path={path} props={{ ml: '1.5rem' }} />
        ))}
        <Hoverable
          color="gray"
          isLink
          externalHref={FOAM_URL}
          props={{ ml: '1.5rem' }}
        >
          foam
        </Hoverable>
      </Flex>
      <Tooltip
        label="i'll make dark mode soon lol"
        aria-label="dark mode not implemented"
        placement="left"
      >
        <IconButton
          variant="outline"
          aria-label="Dark mode button"
          icon={<MoonIcon />}
          ml="2rem"
          pos={{ base: 'absolute', md: 'relative' }}
          right={4}
        />
      </Tooltip>
    </Flex>
  );
}
