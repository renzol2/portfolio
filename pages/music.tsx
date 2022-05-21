import type { NextPage } from 'next';
import MdxComponents from '../components/MdxComponents';
import Page from '../components/Page';
import MusicContent from '../content/music.mdx';

const Music: NextPage = () => {
  return (
    <Page>
      <MusicContent components={MdxComponents} />
    </Page>
  );
};

export default Music;
