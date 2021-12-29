import { Box, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import '@fontsource/sora/800.css';
import Subtitle from '../components/Subtitle';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>renzo ledesma</title>
        <meta name="description" content="i write code and music :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="body" bgColor="#EFD2D2" mx="2.2rem">
        <Navbar />
        <Heading as="h1" fontFamily="Sora" fontSize="9.7rem" mt="5rem" mb="0.5rem">
          {'> renzo ledesma'}
        </Heading>
        <Subtitle
          props={{
            w: '45%',
            fontSize: '3.2rem',
            lineHeight: '134%',
            mt: '0',
          }}
        >
          🌱 i’m a creative helping improve people’s lives through music and
          tech.
        </Subtitle>
      </Box>
    </>
  );
};

export default Home;
