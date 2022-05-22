import { chakra, Link } from '@chakra-ui/react';
import { PRIMARY_ACCENT } from '../theme/colors';

export default function Hoverable({
  color = PRIMARY_ACCENT,
  children,
  isLink = false,
  isExternal = true,
  href = '',
  props,
}: any) {
  const HoverableComponent = isLink ? Link : chakra.span;
  return (
    <HoverableComponent
      textDecor="underline"
      color={color}
      _hover={{
        color: 'gray.200',
        background: color,
      }}
      _selection={{
        background: 'black',
      }}
      href={href}
      isExternal={isExternal}
      {...props}
    >
      {children}
    </HoverableComponent>
  );
}
