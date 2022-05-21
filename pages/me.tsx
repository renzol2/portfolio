import type { NextPage } from 'next';
import MdxComponents from '../components/MdxComponents';
import Page from '../components/Page';
import Me from '../content/me.mdx';

const About: NextPage = () => {
  return (
    <Page>
      <Me components={MdxComponents} />
    </Page>
  );
};

export default About;
