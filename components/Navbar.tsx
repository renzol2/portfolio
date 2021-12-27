import { Flex, Heading, Spacer, Box } from '@chakra-ui/react';
import '@fontsource/roboto-mono/200.css';
import Link from './Link';

export default function Navbar() {
  const PRIMARY_NAV = [
    { text: 'about', path: '/about' },
    { text: 'experience', path: '/experience' },
    { text: 'projects', path: '/projects' },
    { text: 'posts', path: '/posts' },
  ];

  const SECONDARY_NAV = [
    { text: 'music', path: '/music' },
    { text: 'brain', path: '/brain' },
  ];

  const NAV_SIZE = '40%';

  return (
    <Box>
      <Flex
        as="nav"
        width="95%"
        mx="auto"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          justifyContent="flex-start"
          minWidth={NAV_SIZE}
          maxWidth={NAV_SIZE}
          flexWrap="wrap"
        >
          {PRIMARY_NAV.map(({ text, path }) => (
            <Link key={path} text={text} path={path} />
          ))}
        </Flex>
        <Spacer />
        <Heading>😊</Heading>
        <Spacer />
        <Flex
          justifyContent="flex-end"
          minWidth={NAV_SIZE}
          maxWidth={NAV_SIZE}
          flexWrap="wrap"
        >
          {SECONDARY_NAV.map(({ text, path }) => (
            <Link key={path} text={text} path={path} />
          ))}
        </Flex>
      </Flex>
      <hr />
    </Box>
  );
}
