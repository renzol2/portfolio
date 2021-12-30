import { Flex, Heading, Text, chakra, Box } from '@chakra-ui/react';
import Subtitle from '../components/Subtitle';
import Page from '../components/Page';
import type { NextPage } from 'next';
import '@fontsource/sora/800.css';
import {
  HIGHLIGHT_COLOR,
  INSTAGRAM,
  MUSIC,
  NEUTRAL,
  PRIMARY_ACCENT,
  TECH,
} from '../theme/colors';
import Hoverable from '../components/Hoverable';

const Home: NextPage = () => {
  const HEADER_SIZE = {
    base: '3.4rem',
    sm: '5.8rem',
    md: '8rem',
    lg: '9.5rem',
  };
  return (
    <Page>
      <Flex alignItems="center" mt="5rem" mb="0.5rem" lineHeight="1">
        {/* Main header */}
        <Text
          fontSize={HEADER_SIZE}
          color={NEUTRAL}
          _selection={{
            background: HIGHLIGHT_COLOR,
          }}
          fontFamily="Sora"
          // display={{ base: 'none', md: 'block' }}
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
          }}
          lineHeight={0.8}
        >
          {' renzo ledesma'}
        </Heading>
      </Flex>

      {/* Subtitle */}
      <Subtitle
        props={{
          w: { base: '100%', lg: '50%' },
          fontSize: { base: '1.5rem', sm: '2rem', lg: '3.2rem' },
          lineHeight: '134%',
          mt: '0',
        }}
      >
        🌱 i’m a <Hoverable color={PRIMARY_ACCENT}>creative</Hoverable> helping
        improve people’s lives through{' '}
        <Hoverable color={MUSIC}>music</Hoverable> and{' '}
        <Hoverable color={TECH}>tech</Hoverable>.
      </Subtitle>

      {/* Hero text */}
      <Box w={{ base: '100%', lg: '50%' }} float="right" my="2rem">
        <Text my="1rem">
          currently a computer science + music major at the University of
          Illinois at Urbana-Champaign studying the intersection between music,
          technology, and culture.
        </Text>
        <Text my="1rem">thanks for checking me out!</Text>
        <Text>
          <Hoverable color="gray" props={{ mr: 3 }}>
            github
          </Hoverable>
          <Hoverable color={TECH} props={{ mr: 3 }}>
            linkedin
          </Hoverable>
          <Hoverable color={INSTAGRAM} props={{ mr: 3 }}>
            instagram
          </Hoverable>
          <Hoverable color={MUSIC} props={{ mr: 3 }}>
            spotify
          </Hoverable>
        </Text>
      </Box>
    </Page>
  );
};

export default Home;
