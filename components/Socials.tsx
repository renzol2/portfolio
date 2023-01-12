import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useBreakpointValue,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from '../constants/urls';
import { INSTAGRAM, TECH } from '../theme/colors';
import Hoverable from './Hoverable';
import Link from './Link';
import NextLink from 'next/link';

const Socials = ({ showDropdownOnMobile = true }) => {
  const useDropdown = useBreakpointValue({ base: true, lg: false });

  if (useDropdown && showDropdownOnMobile) {
    return (
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          borderRadius={0}
          bg="blackAlpha.300"
        />
        <MenuList borderRadius={0}>
          <NextLink href="/me" legacyBehavior>
            <MenuItem>me</MenuItem>
          </NextLink>
          <NextLink href="/music" legacyBehavior>
            <MenuItem>music</MenuItem>
          </NextLink>
          <NextLink href="/writing" legacyBehavior>
            <MenuItem>writing</MenuItem>
          </NextLink>
          <NextLink href={GITHUB_URL} legacyBehavior>
            <MenuItem>github</MenuItem>
          </NextLink>
          <NextLink href={LINKEDIN_URL} legacyBehavior>
            <MenuItem>linkedin</MenuItem>
          </NextLink>
          <NextLink href={INSTAGRAM_URL} legacyBehavior>
            <MenuItem>insta</MenuItem>
          </NextLink>
        </MenuList>
      </Menu>
    );
  }

  return (
    <Stack direction="row" spacing="1rem">
      <Link text="me" path="/me" />
      <Link text="🎶" path="/music" />
      <Link text="✍🏼" path="/writing" />
      <Hoverable color="gray" isLink href={GITHUB_URL}>
        github
      </Hoverable>
      <Hoverable color={TECH} isLink href={LINKEDIN_URL}>
        linkedin
      </Hoverable>
      <Hoverable color={INSTAGRAM} isLink href={INSTAGRAM_URL}>
        insta
      </Hoverable>
    </Stack>
  );
};

export default Socials;
