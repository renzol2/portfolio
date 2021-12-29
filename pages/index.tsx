import { Box, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import '@fontsource/sora/800.css';

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
        <Heading as="h1" fontFamily="Sora" fontSize="10rem" my="1rem">
          {'> renzo ledesma'}
        </Heading>
        <Heading as="h2" fontFamily="Sora" fontWeight="100" mt="1rem">
          {
            '🌱 i’m a creative helping improve people’s lives through music and tech.'
          }
        </Heading>
      </Box>
    </>
  );
};

export default Home;
