import {
  Flex,
  Link as ChakraLink,
  Stack,
  useBreakpointValue,
  Text,
  Spacer,
  Heading,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo.svg";
import { HIGHLIGHT_COLOR, PRIMARY_ACCENT, TEXT } from "../theme/colors";
import Socials from "./Socials";

export default function Navbar() {
  const logoSize = useBreakpointValue({ base: 40, md: 50 });

  return (
    <Flex flexDir="row" alignItems="center" mb="1rem" w="100%">
      {/* Logo + name */}
      <NextLink href="/" passHref legacyBehavior>
        <ChakraLink
          _hover={{
            textDecor: "none",
          }}
        >
          <Flex flexDir="row" alignItems="center">
            {/* <Image
              src={logo}
              alt="two pink curly braces"
              width={logoSize}
              height={logoSize}
            /> */}
            <Heading
              fontWeight="bold"
              fontSize={{ base: "2rem", md: "3.5rem" }}
              ml="3"
              letterSpacing="-0.2rem"
              color={PRIMARY_ACCENT}
              fontFamily="mono"
              _hover={{
                color: TEXT,
              }}
              _selection={{
                background: HIGHLIGHT_COLOR,
              }}
            >
             {`{}`} 
            </Heading>
          </Flex>
        </ChakraLink>
      </NextLink>

      <Spacer />

      {/* Navigation */}
      <Socials />
    </Flex>
  );
}
