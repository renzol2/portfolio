import { SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Page from '../components/Page';
import ProjectPreview from '../components/ProjectPreview';

const PROJECTS = [
  {
    imgSrc: '/images/kapit_bisig.png',
    alt: 'Kapit Bisig',
    href: '/kapit-bisig',
  },
  {
    imgSrc: '/images/digital_garden.png',
    alt: 'Digital Garden',
    href: '/garden',
  },
  {
    imgSrc: '/images/fact.png',
    alt: 'FACT',
    href: '/fact',
  },
  {
    imgSrc: '/images/superheroes.png',
    alt: 'Superheroes',
    href: '/superheroes',
  },
  {
    imgSrc: '/images/out_of_time.png',
    alt: 'Out of Time',
    href: '/out-of-time',
  },
  {
    imgSrc: '/images/pan_lang.png',
    alt: 'Pan Lang',
    href: '/pan-lang',
  },
];

const Home: NextPage = () => {
  const columns = useBreakpointValue({ base: 1, lg: 3 });

  return (
    <Page>
      <SimpleGrid columns={columns} spacing="1rem">
        {PROJECTS.map(({ imgSrc, href }, i) => (
          <ProjectPreview key={i} imgSrc={imgSrc} href={href} />
        ))}
      </SimpleGrid>
    </Page>
  );
};

export default Home;
