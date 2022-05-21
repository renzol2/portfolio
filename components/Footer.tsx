import { Flex, Spacer } from '@chakra-ui/react';
import Hoverable from './Hoverable';
import Link from './Link';
import Socials from './Socials';

const Footer = () => {
  return (
    <Flex flexDir="row" alignItems="center" py="2rem">
      <Hoverable
        isLink
        isExternal="false"
        href="mailto:renzomledesma@gmail.com"
      >
        renzomledesma@gmail.com
      </Hoverable>
      <Spacer />
      <Socials />
    </Flex>
  );
};

export default Footer;
