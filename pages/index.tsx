import { Box, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>renzo ledesma</title>
        <meta name="description" content="i write code and music :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading as="h1">hi, i&apos;m renzo!</Heading>
        <Heading as="h2">i write code and music :)</Heading>
      </main>
    </Box>
  );
};

export default Home;
