import { Box, Flex, Spacer } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
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
      <Flex flexDir="column" alignItems="center" minH="100vh" px="2.5%" pt="2%">
        <Navbar />
        {children}
        <Spacer />
        <Footer />
      </Flex>
    </>
  );
}
