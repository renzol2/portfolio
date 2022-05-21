import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import mdxComponents from '../components/mdxComponents';
import Page from '../components/Page';
import GardenContent from '../content/garden.mdx';

const Garden: NextPage = () => {
  const IMAGE_SOURCE = '/images/digital_garden.png';
  return (
    <Page>
      <Box w="100%">
        <Image
          src={IMAGE_SOURCE}
          alt="Digital Garden"
          width={1920}
          height={1080}
          placeholder="blur"
          blurDataURL={IMAGE_SOURCE}
        />
        <GardenContent components={mdxComponents} />
      </Box>
    </Page>
  );
};

export default Garden;
