import type { NextPage } from 'next';
import Image from 'next/image';
import mdxComponents from '../components/mdxComponents';
import Page from '../components/Page';
import KapitBisigContent from '../content/kapit-bisig.mdx';

const KapitBisig: NextPage = () => {
  return (
    <Page>
      <Image
        src="/images/kapit_bisig.png"
        alt="Kapit Bisig"
        width={1896}
        height={1080}
      />
      <KapitBisigContent components={mdxComponents} />
    </Page>
  );
};

export default KapitBisig;
