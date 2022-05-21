import type { NextPage } from 'next';
import mdxComponents from '../components/mdxComponents';
import Page from '../components/Page';
import MusicContent from '../content/music.mdx';

const Music: NextPage = () => {
  return (
    <Page>
      <MusicContent components={mdxComponents} />
    </Page>
  );
};

export default Music;
