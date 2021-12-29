import { Flex, Heading, Text, chakra } from '@chakra-ui/react';
import Subtitle from '../components/Subtitle';
import Page from '../components/Page';
import type { NextPage } from 'next';
import '@fontsource/sora/800.css';
import {
  HIGHLIGHT_COLOR,
  MUSIC,
  NEUTRAL,
  PRIMARY_ACCENT,
  TECH,
} from '../theme/colors';
import Hoverable from '../components/Hoverable';

const Home: NextPage = () => {
  const HEADER_SIZE = { base: '3.4rem', sm: '8rem', lg: '9.5rem' };
  return (
    <Page>
      <Flex
        alignItems={{ base: 'top', lg: 'center' }}
        mt="5rem"
        mb="0.5rem"
        lineHeight="1"
      >
        <Text
          fontSize={HEADER_SIZE}
          color={NEUTRAL}
          _selection={{
            background: HIGHLIGHT_COLOR,
          }}
          fontFamily="Sora"
        >
          {'>'}
        </Text>
        <Heading
          as="h1"
          fontFamily="Sora"
          fontSize={HEADER_SIZE}
          color="#404040"
          _selection={{
            background: HIGHLIGHT_COLOR,
          }}
          _hover={{
            color: PRIMARY_ACCENT,
            textDecor: 'underline dotted',
          }}
        >
          {' renzo ledesma'}
        </Heading>
      </Flex>
      <Subtitle
        props={{
          w: { base: '100%', lg: '50%' },
          fontSize: { base: '1rem', sm: '2rem', lg: '3.2rem' },
          lineHeight: '134%',
          mt: '0',
        }}
      >
        🌱 i’m a <Hoverable color={PRIMARY_ACCENT}>creative</Hoverable> helping
        improve people’s lives through{' '}
        <Hoverable color={MUSIC}>music</Hoverable> and{' '}
        <Hoverable color={TECH}>tech</Hoverable>.
      </Subtitle>
    </Page>
  );
};

export default Home;
