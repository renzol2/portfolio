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
import Hoverable from './Hoverable';
import { INSTAGRAM, MUSIC, PRIMARY_ACCENT, TECH } from '../theme/colors';
import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from '../constants/urls';
import Socials from './Socials';

export default function Navbar() {
  const logoSize = useBreakpointValue({ base: 40, md: 50 });

  return (
    <Flex flexDir="row" alignItems="center" mb="1rem">
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
              fontSize="2.5rem"
              ml="3"
              letterSpacing="-0.2rem"
              color={PRIMARY_ACCENT}
              _hover={{
                textDecoration: 'none',
              }}
            >
              Renzo Ledesma
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
