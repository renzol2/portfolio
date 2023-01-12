import { Image, ScaleFade } from "@chakra-ui/react";
import NextLink from "next/link";

const ProjectPreview = ({
  imgSrc,
  href,
  alt,
}: {
  imgSrc: string;
  href: string;
  alt: string;
}) => (
  <NextLink href={href}>
    <ScaleFade in>
      <Image
        width="100%"
        height="28rem"
        src={imgSrc}
        fit="cover"
        alt={alt}
        _hover={{
          transition: "opacity 0.2s",
          opacity: 0.7,
        }}
        boxShadow="lg"
        borderRadius={2}
      />
    </ScaleFade>
  </NextLink>
);

export default ProjectPreview;
