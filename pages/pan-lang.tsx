import type { NextPage } from 'next';
import Image from 'next/image';
import mdxComponents from '../components/mdxComponents';
import Page from '../components/Page';
import PanLangContent from '../content/pan-lang.mdx';

const PanLang: NextPage = () => {
  return (
    <Page>
      <Image
        src="/images/pan_lang.png"
        alt="Pan-Lang logo"
        width={1896}
        height={1080}
      />
      <PanLangContent components={mdxComponents} />
    </Page>
  );
};

export default PanLang;
