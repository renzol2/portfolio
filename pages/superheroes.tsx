import type { NextPage } from 'next';
import MdxComponents from '../components/MdxComponents';
import Page from '../components/Page';
import SuperheroesContent from '../content/superheroes.mdx';

const Superheroes: NextPage = () => {
  return (
    <Page>
      <SuperheroesContent components={MdxComponents} />
    </Page>
  );
};

export default Superheroes;
