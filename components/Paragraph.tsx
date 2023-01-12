import { Text } from '@chakra-ui/react';
import { HIGHLIGHT_COLOR } from '../theme/colors';

export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <Text
      my="1rem"
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
    >
      {children}
    </Text>
  );
}