import { Flex } from "@chakra-ui/react";

import Sidebar from "../components/Sidebar";
import PokemonBox from "../components/PokemonBox";


function PokemonList() {
  return (
    <Flex w="100vw" h="100vh">
      <Sidebar />
      <PokemonBox />
    </Flex>
  );
}

export default PokemonList;
