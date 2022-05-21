import { Stack } from '@chakra-ui/react';
import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from '../constants/urls';
import { INSTAGRAM, TECH } from '../theme/colors';
import Hoverable from './Hoverable';
import Link from './Link';

const Socials = () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} spacing="1rem">
      <Link text="me" path="/me" />
      <Hoverable color="gray" isLink href={GITHUB_URL}>
        github
      </Hoverable>
      <Hoverable color={TECH} isLink href={LINKEDIN_URL}>
        linkedin
      </Hoverable>
      <Hoverable color={INSTAGRAM} isLink href={INSTAGRAM_URL}>
        instagram
      </Hoverable>
    </Stack>
  );
};

export default Socials;
