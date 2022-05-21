import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';
import mdxComponents from '../components/mdxComponents';
import Page from '../components/Page';
import OutOfTimeContent from '../content/out-of-time.mdx';

const OutOfTime: NextPage = () => {
  const IMAGE_SOURCE = '/images/out_of_time.png';
  return (
    <Page>
      <Image
        src={IMAGE_SOURCE}
        alt="Out of Time"
        width={1920}
        height={999}
        placeholder="blur"
        blurDataURL={IMAGE_SOURCE}
      />
      <OutOfTimeContent components={mdxComponents} />
      <Box w={{ base: '90%', md: '60%' }} my="2rem">
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1298875126&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div
          style={{
            fontSize: '10px',
            color: '#CCCCCC',
            lineBreak: 'anywhere',
            wordBreak: 'normal',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            fontFamily: 'sans-serif',
            fontWeight: '100',
          }}
        >
          <a
            href="https://soundcloud.com/user-967986463"
            title="Zo"
            target="_blank"
            style={{
              color: '#CCCCCC',
              textDecoration: 'none',
            }}
            rel="noreferrer"
          >
            Zo
          </a>{' '}
          ·{' '}
          <a
            href="https://soundcloud.com/user-967986463/sets/out-of-time-soundtrack"
            title="Out Of Time Soundtrack"
            target="_blank"
            style={{
              color: '#CCCCCC',
              textDecoration: 'none',
            }}
            rel="noreferrer"
          >
            Out Of Time Soundtrack
          </a>
        </div>
      </Box>
    </Page>
  );
};

export default OutOfTime;
