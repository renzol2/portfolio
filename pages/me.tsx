import type { NextPage } from 'next';
import mdxComponents from '../components/mdxComponents';
import Page from '../components/Page';
import Me from '../content/me.mdx';

const About: NextPage = () => {
  return (
    <Page>
      <Me components={mdxComponents} />
    </Page>
  );
};

export default About;