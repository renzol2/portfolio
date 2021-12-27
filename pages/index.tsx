import { Box, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import '@fontsource/sora/700.css';
import '@fontsource/roboto-mono/200.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>renzo ledesma</title>
        <meta name="description" content="i write code and music :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="body" bgColor="#FFF1F1">
        <Navbar />
        <Heading as="h1" fontFamily="Sora">
          hi, i&apos;m renzo!
        </Heading>
        <Heading as="h2" fontFamily="Roboto Mono">
          i write code and music :)
        </Heading>
      </Box>
    </>
  );
};

export default Home;
