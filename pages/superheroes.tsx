import type { NextPage } from 'next';
import mdxComponents from '../components/mdxComponents';
import Page from '../components/Page';
import SuperheroesContent from '../content/superheroes.mdx';

const Superheroes: NextPage = () => {
  return (
    <Page>
      <SuperheroesContent components={mdxComponents} />
    </Page>
  );
};

export default Superheroes;
