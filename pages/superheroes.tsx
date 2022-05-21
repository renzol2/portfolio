import type { NextPage } from 'next';
import Image from 'next/image';
import mdxComponents from '../components/mdxComponents';
import Page from '../components/Page';
import SuperheroesContent from '../content/superheroes.mdx';

const Superheroes: NextPage = () => {
  return (
    <Page>
      <Image
        src="/images/superheroes.png"
        alt="Superheroes"
        width={1896}
        height={1080}
      />
      <SuperheroesContent components={mdxComponents} />
    </Page>
  );
};

export default Superheroes;
