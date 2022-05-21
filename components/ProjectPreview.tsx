import { Image } from '@chakra-ui/react';
import NextLink from 'next/link';

const ProjectPreview = ({ imgSrc, href }: { imgSrc: string; href: string }) => (
  <NextLink href={href} passHref>
    <a>
      <Image
        src={imgSrc}
        fit="cover"
        alt="alt text"
        height="28rem"
        _hover={{
          transition: 'opacity 0.2s',
          opacity: 0.7,
        }}
      />
    </a>
  </NextLink>
);

export default ProjectPreview;
