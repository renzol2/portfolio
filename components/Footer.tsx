import { Box, Flex, Spacer } from '@chakra-ui/react';
import Hoverable from './Hoverable';
import Link from './Link';
import Logo from './Logo';
import Socials from './Socials';

const Footer = () => {
  return (
    <Flex
      flexDir={{ base: 'column-reverse', lg: 'row' }}
      alignItems="center"
      pb="2rem"
      pt="10rem"
      w="100%"
    >
      <Hoverable
        isLink
        isExternal="false"
        href="mailto:renzomledesma@gmail.com"
      >
        renzomledesma@gmail.com
      </Hoverable>
      <Spacer py={{ base: '0.7rem', lg: '0' }} />
      <Socials showDropdownOnMobile={false} />
      <Box w={30} my={5} ml={{ base: 0, lg: '1rem' }}>
        <Logo />
      </Box>
    </Flex>
  );
};

export default Footer;
