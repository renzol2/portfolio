import { Heading, HeadingProps } from '@chakra-ui/react';
import '@fontsource/sora/400.css';
import { HIGHLIGHT_COLOR } from '../theme/colors';

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
        background: HIGHLIGHT_COLOR,
      }}
      {...props}
    >
      {children}
    </Heading>
  );
}