import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import mdxComponents from '../components/mdxComponents';
import Page from '../components/Page';
import Me from '../content/me.mdx';

const About: NextPage = () => {
  return (
    <Page>
      <Box w="100%">
        <Me components={mdxComponents} />
      </Box>
    </Page>
  );
};

export default About;
