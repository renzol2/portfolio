import { Box, Fade, Grid } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';

export default function Page({
  title = 'renzo ledesma',
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="i write code and music :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid templateColumns="20% 80%" p="2.5%" minH="100vh">
        <Navbar />
        <Fade in>{children}</Fade>
      </Grid>
    </>
  );
}
