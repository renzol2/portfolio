import { chakra, ChakraProps } from '@chakra-ui/react';
import { PRIMARY_ACCENT } from '../theme/colors';

export default function Hoverable({
  color = PRIMARY_ACCENT,
  children,
  props,
}: {
  color?: string;
  children: React.ReactNode;
  props?: ChakraProps;
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
      {...props}
    >
      {children}
    </chakra.span>
  );
}
