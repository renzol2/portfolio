import { Heading, SimpleGrid } from '@chakra-ui/react';
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
  return (
    <Page>
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing="1rem">
        {PROJECTS.map(({ imgSrc, href, alt }, i) => (
          <ProjectPreview key={i} imgSrc={imgSrc} href={href} alt={alt} />
        ))}
      </SimpleGrid>
    </Page>
  );
};

export default Home;
