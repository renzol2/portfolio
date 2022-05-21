import {
  Flex,
  Link as ChakraLink,
  Stack,
  useBreakpointValue,
  Text,
  Spacer,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Link from './Link';
import Image from 'next/image';
import logo from '../public/assets/logo.svg';
import {
  HIGHLIGHT_COLOR,
  INSTAGRAM,
  MUSIC,
  PRIMARY_ACCENT,
  TECH,
} from '../theme/colors';
import Socials from './Socials';

export default function Navbar() {
  const logoSize = useBreakpointValue({ base: 40, md: 50 });

  return (
    <Flex flexDir="row" alignItems="center" mb="1rem" w="100%">
      {/* Logo + name */}
      <NextLink href="/" passHref>
        <ChakraLink>
          <Flex flexDir="row" alignItems="center">
            <Image
              src={logo}
              alt="two pink curly braces"
              width={logoSize}
              height={logoSize}
            />
            <Text
              fontSize={{ base: '2rem', md: '2.5rem' }}
              ml="3"
              letterSpacing="-0.2rem"
              color={PRIMARY_ACCENT}
              _hover={{
                textDecoration: 'none',
              }}
              _selection={{
                background: HIGHLIGHT_COLOR,
              }}
            >
              renzo ledesma
            </Text>
          </Flex>
        </ChakraLink>
      </NextLink>

      <Spacer />

      {/* Navigation */}
      <Socials />
    </Flex>
  );
}
