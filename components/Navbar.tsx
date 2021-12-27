import { Flex, Heading, Spacer } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Flex as="nav" w="100vw" pos="absolute">
      <Spacer />
      <Heading>😊</Heading>
      <Spacer />
    </Flex>
  );
}
