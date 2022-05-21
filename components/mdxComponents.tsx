import {
  Text,
  UnorderedList,
  OrderedList,
  ListItem,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import Hoverable from './Hoverable';
import { HIGHLIGHT_COLOR, PRIMARY_ACCENT, TEXT } from '../theme/colors';

const TEXT_SIDE_MARGINS = { base: '7%', lg: '25%' };

const MdxComponents = {
  h1: (props: any) => (
    <Heading
      as="h1"
      size="4xl"
      color="black"
      fontWeight="black"
      letterSpacing="-0.35rem"
      pt="2rem"
      pb="0.5rem"
      textAlign="center"
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
      {...props}
    />
  ),
  h2: (props: any) => (
    <Heading
      as="h2"
      size="2xl"
      color="black"
      letterSpacing="-0.28rem"
      mx={TEXT_SIDE_MARGINS}
      pt="2rem"
      pb="0.5rem"
      textAlign="left"
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
      {...props}
    />
  ),
  h3: (props: any) => (
    <Heading
      as="h3"
      size="2xl"
      color="black"
      fontWeight="thin"
      letterSpacing="-0.2rem"
      pb="2rem"
      textAlign="center"
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
      {...props}
    />
  ),
  p: (props: any) => (
    <Text
      my="1rem"
      mx={TEXT_SIDE_MARGINS}
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
      color={TEXT}
      {...props}
    />
  ),
  ul: UnorderedList,
  ol: OrderedList,
  li: (props: any) => (
    <ListItem
      mx={TEXT_SIDE_MARGINS}
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
      {...props}
    />
  ),
  a: (props: any) => <Hoverable externalHref={props.href} isLink {...props} />,
};

export default MdxComponents;
