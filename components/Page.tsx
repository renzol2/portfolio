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
      <Grid templateColumns={{ base: '100%', md: '20% 80%' }} p="2.5%">
        <Navbar />
        <Box color={TEXT}>{children}</Box>
      </Grid>
    </>
  );
}
