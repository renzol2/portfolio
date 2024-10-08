import { Box, Heading, SimpleGrid, chakra, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import HeadingText from "../components/HeadingText";
import Hoverable from "../components/Hoverable";
import Page from "../components/Page";
import Paragraph from "../components/Paragraph";
import ProjectPreview from "../components/ProjectPreview";
import Link from "../components/Link";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { MUSIC, PRIMARY_ACCENT, TECH } from "../theme/colors";

const PROJECTS = [
  {
    imgSrc: "/images/kapit_bisig.png",
    alt: "Kapit Bisig",
    href: "/kapit-bisig",
  },
  {
    imgSrc: "/images/digital_garden.png",
    alt: "Digital Garden",
    href: "/garden",
  },
  {
    imgSrc: "/images/fact.png",
    alt: "FACT",
    href: "/fact",
  },
  {
    imgSrc: "/images/superheroes.png",
    alt: "Superheroes",
    href: "/superheroes",
  },
  {
    imgSrc: "/images/out_of_time.png",
    alt: "Out of Time",
    href: "/out-of-time",
  },
  {
    imgSrc: "/images/pan_lang.png",
    alt: "Pan Lang",
    href: "/pan-lang",
  },
];

const Home: NextPage = () => {
  return (
    <Page>
      <Title text="renzofrog" />

      {/* Subtitle */}
      <Subtitle
        props={{
          w: { base: "100%", lg: "70%" },
          fontSize: { base: "1.5rem", sm: "2rem", lg: "2.3rem" },
          lineHeight: "134%",
          mt: "1",
          textAlign: { base: 'center' },
        }}
      >
        writing <Hoverable color={TECH}>code</Hoverable> and{" "}
        <Hoverable color={MUSIC}>music</Hoverable> 🌱
      </Subtitle>

      {/* Hero text */}
      <Box w={{ base: "70%", md: "60%", lg: "50%" }} float="right" my="2rem">
        <Paragraph>
          currently a software engineer. also, making music, learning languages, and navigating the world.
        </Paragraph>
        <Paragraph>
         this website is a constant work in progress 🚧
        </Paragraph>
        <Link text="check out my latest post here." path="/writing/an-overdue-update" color={PRIMARY_ACCENT} />
      </Box>
      {/* <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="1rem">
        {PROJECTS.map(({ imgSrc, href, alt }, i) => (
          <ProjectPreview key={i} imgSrc={imgSrc} href={href} alt={alt} />
        ))}
      </SimpleGrid>*/}
    </Page>
  );
};

export default Home;
