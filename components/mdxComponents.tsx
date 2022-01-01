import { Text, UnorderedList, OrderedList, ListItem } from '@chakra-ui/react';
import Hoverable from './Hoverable';
import { HIGHLIGHT_COLOR, PRIMARY_ACCENT, TEXT } from '../theme/colors';

const mdxComponents = {
  p: (props: any) => (
    <Text
      my="1rem"
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
      _selection={{
        background: HIGHLIGHT_COLOR,
      }}
      {...props}
    />
  ),
  a: (props: any) => <Hoverable externalHref={props.href} isLink {...props} />,
};

export default mdxComponents;
