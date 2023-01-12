import { Flex, Heading, Text } from '@chakra-ui/react';
import {
  HIGHLIGHT_COLOR,
  NEUTRAL,
  PRIMARY_ACCENT,
} from '../theme/colors';
import '@fontsource/sora/800.css';

export default function Title({ text }: { text: string }) {
  const HEADER_SIZE = {
    base: '4rem',
    sm: '5.8rem',
    md: '8rem',
    lg: '9.5rem',
  };
  return (
    <>
      <Flex alignItems="center" mt="5rem" mb="0.5rem" lineHeight="1">
        {/* Main header */}
        <Text
          fontSize={HEADER_SIZE}
          color={NEUTRAL}
          _selection={{
            background: HIGHLIGHT_COLOR,
          }}
          fontFamily="Sora"
        >
          {'>'}
        </Text>
        <Heading
          as="h1"
          fontFamily="Sora"
          fontSize={HEADER_SIZE}
          color="#404040"
          _selection={{
            background: HIGHLIGHT_COLOR,
          }}
          _hover={{
            color: PRIMARY_ACCENT,
          }}
          lineHeight={0.8}
        >
          {` ${text}`}
        </Heading>
      </Flex>
    </>
  );
}