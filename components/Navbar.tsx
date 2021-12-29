import { Flex, Spacer, IconButton, Button, Tooltip } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';
import Link from './Link';
import Logo from './Logo';

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
    <Flex as="nav" width="100%" alignItems="center" justifyContent="center">
      <Flex
        justifyContent="flex-start"
        minWidth={NAV_SIZE}
        maxWidth={NAV_SIZE}
        flexWrap="wrap"
      >
        {PRIMARY_NAV.map(({ text, path }) => (
          <Link key={path} text={text} path={path} props={{ mr: '1.5rem' }} />
        ))}
      </Flex>
      <Spacer />
      <Logo size={30} my="1rem" />
      <Spacer />
      <Flex
        justifyContent="flex-end"
        minWidth={NAV_SIZE}
        maxWidth={NAV_SIZE}
        flexWrap="wrap"
      >
        {SECONDARY_NAV.map(({ text, path }) => (
          <Link key={path} text={text} path={path} props={{ ml: '1.5rem' }} />
        ))}
      </Flex>
      <Tooltip
        label="i'll make dark mode soon lol"
        aria-label="dark mode not implemented"
        placement="left"
      >
        <IconButton
          variant="outline"
          aria-label="Dark mode button"
          icon={<MoonIcon />}
          ml="1.5rem"
        />
      </Tooltip>
    </Flex>
  );
}
