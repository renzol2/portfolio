import { Box } from '@chakra-ui/react';

import { EMBEDS } from '../constants/embeds';

const EmbeddedPlaylists = () => {
  return (
    <>
      {EMBEDS.map((embed, i) => {
        return (
          <Box
            dangerouslySetInnerHTML={{ __html: embed }}
            my="3rem"
            w={{ base: '90%', md: '60%' }}
            mx="auto"
            key={i}
          />
        );
      })}
    </>
  );
};

export default EmbeddedPlaylists;
