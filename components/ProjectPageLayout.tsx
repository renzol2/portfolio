import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Page from "../components/Page";

interface Metadata {
  title: string;
  imageSource: string | undefined;
  imageAlt: string | undefined;
  imageWidth: number | undefined;
  imageHeight: number | undefined;
}

interface ProjectPageLayoutProps {
  meta: Metadata;
  children: React.ReactNode;
}

const ProjectPageLayout = ({ meta, children }: ProjectPageLayoutProps) => {
  const { title, imageSource, imageAlt, imageWidth, imageHeight } = meta;
  return (
    <Page title={`${title} | renzo ledesma`}>
      <Box w="100%">
        {imageSource !== undefined && (
          <Image
            src={imageSource}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            placeholder="blur"
            blurDataURL={imageSource}
          />
        )}
      </Box>
      {children}
    </Page>
  );
};

export default ProjectPageLayout;
