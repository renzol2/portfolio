import type { NextPage } from 'next';
import Image from 'next/image';
import mdxComponents from '../components/mdxComponents';
import Page from '../components/Page';
import SuperheroesContent from '../content/superheroes.mdx';

const Superheroes: NextPage = () => {
  const IMAGE_SOURCE = '/images/superheroes.png';

  return (
    <Page title="The State of Asian Superheroes in Comics | renzo ledesma">
      <Image
        src={IMAGE_SOURCE}
        alt="Superheroes"
        width={1896}
        height={1080}
        placeholder="blur"
        blurDataURL={IMAGE_SOURCE}
      />
      <SuperheroesContent components={mdxComponents} />
    </Page>
  );
};

export default Superheroes;
