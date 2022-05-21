import { Box, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Page from '../components/Page';
import ProjectPreview from '../components/ProjectPreview';

const PROJECTS = Array(9).fill(0);

const Home: NextPage = () => {
  const columns = useBreakpointValue({ base: 1, lg: 3 });

  return (
    <Page>
      <SimpleGrid columns={columns} spacing="1rem">
        {PROJECTS.map((_, i) => (
          <ProjectPreview key={i} />
        ))}
      </SimpleGrid>
    </Page>
  );
};

export default Home;
