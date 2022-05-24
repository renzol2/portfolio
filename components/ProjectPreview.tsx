import { Image } from '@chakra-ui/react';
import NextLink from 'next/link';

const ProjectPreview = ({ imgSrc, href }: { imgSrc: string; href: string }) => (
  <NextLink href={href} passHref>
    <a>
      <Image
        width="100%"
        height="28rem"
        src={imgSrc}
        fit="cover"
        alt="alt text"
        _hover={{
          transition: 'opacity 0.2s',
          opacity: 0.7,
        }}
        boxShadow="lg"
        borderRadius={2}
      />
    </a>
  </NextLink>
);

export default ProjectPreview;
