import type { NextPage } from 'next';
import Hoverable from '../components/Hoverable';
import Page from '../components/Page';
import Paragraph from '../components/Paragraph';
import { INSTAGRAM_URL, LINKEDIN_URL, SPOTIFY_URL } from '../constants/urls';
import { INSTAGRAM, TECH, MUSIC } from '../theme/colors';

const Home: NextPage = () => {
  return (
    <Page>
      <Paragraph useMarginAbove={false}>hi i&apos;m renzo :)</Paragraph>
      <Paragraph useMarginAbove={false}>i write code and music 🌱</Paragraph>
      <Hoverable
        color="gray"
        props={{ mr: 3 }}
        isLink
        externalHref="https://github.com/renzol2"
      >
        github
      </Hoverable>
      <Hoverable
        color={TECH}
        props={{ mr: 3 }}
        isLink
        externalHref={LINKEDIN_URL}
      >
        linkedin
      </Hoverable>
      <Hoverable
        color={INSTAGRAM}
        props={{ mr: 3 }}
        isLink
        externalHref={INSTAGRAM_URL}
      >
        instagram
      </Hoverable>
      <Hoverable
        color={MUSIC}
        props={{ mr: 3 }}
        isLink
        externalHref={SPOTIFY_URL}
      >
        spotify
      </Hoverable>
    </Page>
  );
};

export default Home;
