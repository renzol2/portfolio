import type { NextPage } from 'next';
import Image from 'next/image';
import mdxComponents from '../components/mdxComponents';
import Page from '../components/Page';
import PanLangContent from '../content/pan-lang.mdx';

const PanLang: NextPage = () => {
  const IMAGE_SOURCE = '/images/pan_lang.png';
  return (
    <Page>
      <Image
        src={IMAGE_SOURCE}
        alt="Pan-Lang logo"
        width={1896}
        height={1080}
        placeholder="blur"
        blurDataURL={IMAGE_SOURCE}
      />
      <PanLangContent components={mdxComponents} />
    </Page>
  );
};

export default PanLang;
