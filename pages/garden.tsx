import type { NextPage } from 'next';
import Image from 'next/image';
import mdxComponents from '../components/mdxComponents';
import Page from '../components/Page';
import GardenContent from '../content/garden.mdx';

const Garden: NextPage = () => {
  return (
    <Page>
      <Image
        src="/images/digital_garden.png"
        alt="Digital Garden"
        width={1920}
        height={1080}
      />
      <GardenContent components={mdxComponents} />
    </Page>
  );
};

export default Garden;
