import { Link as ChakraLink } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/assets/logo.svg';

export default function Logo() {
  return (
    <Link href="/" passHref legacyBehavior>
      <ChakraLink>
        <Image src={logo} alt="logo" blurDataURL={logo} />
      </ChakraLink>
    </Link>
  );
}
