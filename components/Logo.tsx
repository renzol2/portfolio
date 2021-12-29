import { Box, Link as ChakraLink } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/assets/logo.svg';

interface LogoProps {
  size: number;
  my?: number | string;
  mx?: number | string;
}

export default function Logo({ size, my = 0, mx = 0 }: LogoProps) {
  return (
    <Box my={my} mx={mx}>
      <Link href="/" passHref>
        <ChakraLink>
          <Image src={logo} alt="logo" width={size} height={size} />
        </ChakraLink>
      </Link>
    </Box>
  );
}
