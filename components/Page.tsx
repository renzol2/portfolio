import { Box, Center, Fade, Grid } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { TEXT } from '../theme/colors';
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
      <Grid
        templateColumns={{ base: '100%', md: '20% 80%' }}
        px={{ base: '7%', md: '2.5%' }}
        pt={{ base: '6%', md: '3%' }}
        pb="7rem"
      >
        <Navbar />
        <Box color={TEXT}>{children}</Box>
      </Grid>
    </>
  );
}
