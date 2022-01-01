import type { NextPage } from 'next';
import mdxComponents from '../components/mdxComponents';
import Page from '../components/Page';
import GardenContent from '../content/garden.mdx';

const Garden: NextPage = () => {
  return (
    <Page>
      <GardenContent components={mdxComponents} />
    </Page>
  );
};

export default Garden;
