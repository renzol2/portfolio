import { Text } from '@chakra-ui/react';
import { HIGHLIGHT_COLOR } from '../theme/colors';

export default function Paragraph({
  children,
  useMarginAbove = true,
}: {
  children: React.ReactNode;
  useMarginAbove?: boolean;
}) {
  return (
    <Text
      mt={useMarginAbove ? '1rem' : 0}
      mb="1rem"
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
    >
      {children}
    </Text>
  );
}
