import Page from '../components/Page';
import type { NextPage } from 'next';
import '@fontsource/sora/800.css';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';

const About: NextPage = () => {
  return (
    <Page>
      <Title text="about me" />
      <Paragraph>wip :)</Paragraph>
    </Page>
  );
};

export default About;
