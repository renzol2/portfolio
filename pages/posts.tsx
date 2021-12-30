import Page from '../components/Page';
import type { NextPage } from 'next';
import '@fontsource/sora/800.css';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';

const Posts: NextPage = () => {
  return (
    <Page>
      <Title text="posts" />
      <Paragraph>wip :)</Paragraph>
    </Page>
  );
};

export default Posts;
