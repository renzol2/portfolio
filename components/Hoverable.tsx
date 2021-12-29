import { chakra } from '@chakra-ui/react';
import { PRIMARY_ACCENT } from '../theme/colors';

export default function Hoverable({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  return (
    <chakra.span
      textDecor="underline"
      color={color}
      _hover={{
        color: 'gray.200',
        background: color,
      }}
      _selection={{
        background: 'black',
      }}
    >
      {children}
    </chakra.span>
  );
}
