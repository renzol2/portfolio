import { Box, ScaleFade } from '@chakra-ui/react';
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
      <Box
        as="body"
        mx="2.2rem"
        style={{ background: 'linear-gradient(to right, #F4DEE3, #EFD2D2)' }}
      >
        <Navbar />
        <ScaleFade in>{children}</ScaleFade>
      </Box>
    </>
  );
}
