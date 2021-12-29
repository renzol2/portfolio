import { Box } from '@chakra-ui/react';
import Image from 'next/image';

interface LogoProps {
  size: number;
  my?: number | string;
  mx?: number | string;
}

export default function Logo({ size, my = 0, mx = 0 }: LogoProps) {
  return (
    <Box my={my} mx={mx}>
      <Image src="/assets/logo.svg" alt="logo" width={size} height={size} />
    </Box>
  );
}
