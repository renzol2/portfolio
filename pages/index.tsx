import { Box, SimpleGrid } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Page from '../components/Page';

const Home: NextPage = () => {
  return (
    <Page>
      <SimpleGrid columns={3} spacing="1rem">
        {Array(9)
          .fill(0)
          .map((x, i) => (
            <Box bg="tomato" height="28rem" key={i} />
          ))}
      </SimpleGrid>
    </Page>
  );
};

export default Home;
