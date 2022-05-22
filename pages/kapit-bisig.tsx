import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import mdxComponents from '../components/mdxComponents';
import Page from '../components/Page';
import KapitBisigContent from '../content/kapit-bisig.mdx';

const KapitBisig: NextPage = () => {
  const IMAGE_SOURCE = '/images/kapit_bisig.png';
  return (
    <Page>
      <Box w="100%">
        <Image
          src={IMAGE_SOURCE}
          alt="Kapit Bisig"
          width={1896}
          height={1080}
          placeholder="blur"
          blurDataURL={IMAGE_SOURCE}
        />
        <KapitBisigContent components={mdxComponents} />
      </Box>
    </Page>
  );
};

export default KapitBisig;
