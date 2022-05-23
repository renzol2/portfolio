import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import mdxComponents from '../components/mdxComponents';
import Page from '../components/Page';
import FactContent from '../content/fact.mdx';

const Fact: NextPage = () => {
  const IMAGE_SOURCE = '/images/fact.png';
  return (
    <Page title="FACT 2021 | renzo ledesma">
      <Box w="100%">
        <Image
          src={IMAGE_SOURCE}
          alt="FACT"
          width={1920}
          height={999}
          placeholder="blur"
          blurDataURL={IMAGE_SOURCE}
        />
        <FactContent components={mdxComponents} />
      </Box>
    </Page>
  );
};

export default Fact;
