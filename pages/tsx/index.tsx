import { Heading } from '@chakra-ui/react';
import Subtitle from '../../components/Subtitle';
import Page from '../../components/Page';
import type { NextPage } from 'next';
import '@fontsource/sora/800.css';

const Home: NextPage = () => {
  return (
    <Page>
      <Heading
        as="h1"
        fontFamily="Sora"
        fontSize="9.5rem"
        mt="5rem"
        mb="0.5rem"
        _selection={{
          background: '#D60270',
        }}
      >
        {'> renzo ledesma'}
      </Heading>
      <Subtitle
        props={{
          w: '50%',
          fontSize: '3.2rem',
          lineHeight: '134%',
          mt: '0',
        }}
      >
        🌱 i’m a creative helping improve people’s lives through music and tech.
      </Subtitle>
    </Page>
  );
};

export default Home;
