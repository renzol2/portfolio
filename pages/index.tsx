import { Box, Heading, SimpleGrid, chakra, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import HeadingText from "../components/HeadingText";
import Hoverable from "../components/Hoverable";
import Page from "../components/Page";
import Paragraph from "../components/Paragraph";
import ProjectPreview from "../components/ProjectPreview";
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
      <Title text="renzo ledesma" />

      {/* Subtitle */}
      <Subtitle
        props={{
          w: { base: "100%", lg: "70%" },
          fontSize: { base: "1.5rem", sm: "2rem", lg: "3.2rem" },
          lineHeight: "134%",
          mt: "0",
          textAlign: { base: 'right', lg: 'center' },
        }}
      >
        i write <Hoverable color={TECH}>code</Hoverable> and{" "}
        <Hoverable color={MUSIC}>music</Hoverable> 🌱
      </Subtitle>

      {/* Hero text */}
      <Box w={{ base: "90%", md: "60%", lg: "50%" }} float="right" mb="2rem">
        <Paragraph>
          currently a{" "}
          <chakra.span
            textDecor="underline"
            _selection={{
              color: "gray.100",
              background: "black",
            }}
          >
            computer science + music
          </chakra.span>{" "}
          major at the{" "}
          <chakra.span
            fontWeight="black"
            _selection={{
              color: "gray.100",
              background: "black",
            }}
          >
            University of Illinois at Urbana-Champaign
          </chakra.span>{" "}
          studying the intersection between music, technology, and culture.
        </Paragraph>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="1rem">
        {PROJECTS.map(({ imgSrc, href, alt }, i) => (
          <ProjectPreview key={i} imgSrc={imgSrc} href={href} alt={alt} />
        ))}
      </SimpleGrid>
    </Page>
  );
};

export default Home;
