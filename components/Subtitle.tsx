import { Heading, HeadingProps } from '@chakra-ui/react';
import '@fontsource/sora/400.css';

export default function Subtitle({
  props,
  children,
}: {
  props?: HeadingProps;
  children: React.ReactNode;
}) {
  return (
    <Heading
      as="h2"
      fontFamily="Sora"
      fontWeight="normal"
      _selection={{
        background: '#D60270',
      }}
      {...props}
    >
      {children}
    </Heading>
  );
}
