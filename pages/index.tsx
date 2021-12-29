import { Heading, Link } from '@chakra-ui/react';
import Subtitle from '../components/Subtitle';
import Page from '../components/Page';
import type { NextPage } from 'next';
import '@fontsource/sora/800.css';

const Home: NextPage = () => {
  return (
    <Page>
      <Heading
        as="h1"
        fontFamily="Sora"
        fontSize={{ base: '4rem', sm: '8rem', lg: '9.5rem' }}
        mt="5rem"
        mb="0.5rem"
        color="#404040"
        lineHeight="1"
        _selection={{
          background: '#D60270',
        }}
        _hover={{
          color: 'maroon',
          textDecor: 'underline dotted',
        }}
      >
        <Link
          color="#8F8F8F"
          _selection={{
            background: '#D60270',
          }}
          _hover={{
            textDecor: 'none',
          }}
        >
          {'>'}
        </Link>
        {' renzo ledesma'}
      </Heading>
      <Subtitle
        props={{
          w: { base: '100%', lg: '50%' },
          fontSize: { base: '1rem', sm: '2rem', lg: '3.2rem' },
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
