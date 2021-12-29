import { chakra } from '@chakra-ui/react';

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
    >
      {children}
    </chakra.span>
  );
}
