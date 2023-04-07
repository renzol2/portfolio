import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import Page from "../components/Page";

interface Metadata {
  title: string;
  imageSource: string | undefined;
  imageAlt: string | undefined;
  imageWidth: number | undefined;
  imageHeight: number | undefined;
}

interface WritingPageLayoutProps {
  meta: Metadata;
  children: React.ReactNode;
}

const WritingPageLayout = ({ meta, children }: WritingPageLayoutProps) => {
  const { title, imageSource, imageAlt, imageWidth, imageHeight } = meta;
  return (
    <Page title={`${title} | renzo ledesma`}>
      <Breadcrumb fontSize="md" color="gray.600">
        <BreadcrumbItem>
          <Link href="/writing" legacyBehavior passHref>
            <BreadcrumbLink>writing</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box
        w="100%"
        display="flex"
        flexDir="column"
        alignItems="stretch"
        px={{ base: "7%", lg: "25%" }}
      >
        {imageSource !== undefined &&
          imageAlt !== undefined &&
          imageWidth !== undefined &&
          imageHeight !== undefined && (
            <Image
              src={imageSource}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              blurDataURL={imageSource}
            />
          )}
        {children}
      </Box>
      <Breadcrumb fontSize="md" color="gray.600" mt="5rem" mb="3rem">
        <BreadcrumbItem>
          <Link href="/writing" legacyBehavior passHref>
            <BreadcrumbLink>writing</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Page>
  );
};

export default WritingPageLayout;
