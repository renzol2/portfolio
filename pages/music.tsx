import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import mdxComponents from '../components/mdxComponents';
import Page from '../components/Page';
import MusicContent from '../content/music.mdx';

const Music: NextPage = () => {
  return (
    <Page title="music | renzo ledesma">
      <Box w="100%">
        <MusicContent components={mdxComponents} />
      </Box>
    </Page>
  );
};

export default Music;
