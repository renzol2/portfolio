import { Link as ChakraLink } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/assets/logo.svg';

export default function Logo() {
  return (
    <Link href="/" passHref>
      <ChakraLink>
        <Image src={logo} alt="logo" placeholder="blur" blurDataURL={logo} />
      </ChakraLink>
    </Link>
  );
}
