import { Heading, HeadingProps } from '@chakra-ui/react';
import '@fontsource/sora/400.css';
import React from 'react';

export default function Subtitle({
  props,
  children,
}: {
  props?: HeadingProps;
  children: React.ReactNode;
}) {
  return (
    <Heading as="h2" fontFamily="Sora" fontWeight="normal" {...props}>
      {children}
    </Heading>
  );
}
