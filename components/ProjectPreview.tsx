import { Box } from '@chakra-ui/react';
import { RANDOM_COLORS } from '../theme/colors';

const ProjectPreview = () => (
  <Box
    bg={RANDOM_COLORS[Math.floor(Math.random() * RANDOM_COLORS.length)]}
    height="28rem"
  />
);

export default ProjectPreview;
