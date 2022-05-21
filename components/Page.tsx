import { Box } from '@chakra-ui/react';
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
      <Box px={{ base: '7%', md: '2.5%' }} pt={{ base: '5%', md: '2%' }}>
        <Navbar />
        {children}
      </Box>
    </>
  );
}
