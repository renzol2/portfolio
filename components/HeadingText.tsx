import React from "react";
import { As, Heading } from "@chakra-ui/react";
import { TEXT_SIDE_MARGINS } from "../pages/_app";
import { HIGHLIGHT_COLOR } from "../theme/colors";

const HeadingText = ({ as, children }: { as: As, children: React.ReactNode }) => (
  <Heading
    as={as}
    size="2xl"
    color="black"
    letterSpacing={{ base: "-0.15rem", md: "-0.28rem" }}
    mx={TEXT_SIDE_MARGINS}
    pt="2rem"
    pb="0.5rem"
    textAlign="left"
    _selection={{
      background: HIGHLIGHT_COLOR,
    }}
  >
    {children}
  </Heading>
);

export default HeadingText;
