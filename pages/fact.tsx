import type { NextPage } from 'next';
import Image from 'next/image';
import mdxComponents from '../components/mdxComponents';
import Page from '../components/Page';
import FactContent from '../content/fact.mdx';

const Fact: NextPage = () => {
  return (
    <Page>
      <Image src="/images/fact.png" alt="FACT" width={1920} height={999} />
      <FactContent components={mdxComponents} />
    </Page>
  );
};

export default Fact;
