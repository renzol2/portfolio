import { Box } from "@chakra-ui/react";

const EmbeddedPlaylist = ({ embed }: { embed: string }) => (
  <Box
    dangerouslySetInnerHTML={{ __html: embed }}
    my="3rem"
    w={{ base: "90%", md: "60%" }}
    mx="auto"
  />
);

export default EmbeddedPlaylist;
