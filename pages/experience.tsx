import { Heading } from '@chakra-ui/react';
import Subtitle from '../components/Subtitle';
import Page from '../components/Page';
import type { NextPage } from 'next';
import '@fontsource/sora/800.css';

const Experience: NextPage = () => {
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
        {'> experience'}
      </Heading>
    </Page>
  );
};

export default Experience;
