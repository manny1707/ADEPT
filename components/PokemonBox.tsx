import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  Image,
  Flex,
  Heading,
  Spacer,
  CircularProgress,
  CircularProgressLabel,
  Button,
  Checkbox,
  Editable, EditableInput, EditablePreview
} from "@chakra-ui/react";
import { useState } from "react";

import Showpicture from "./Showpicture";

export default function PokemonBox() {

  const [isChecked, setisChecked] = useState(false);
  const onClick = () => isChecked ? setisChecked(false) : setisChecked(true) ;


  return (
    <Box w="80%" h="80%" margin="40px" padding="20px">
      <Flex marginBottom="5px">
        <Heading size="xl">
          <Editable defaultValue="Add pokemon name here">
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Heading>
        <Spacer />
        <CircularProgress value={66} color="pink">
          <CircularProgressLabel>66</CircularProgressLabel>
        </CircularProgress>
      </Flex>
      <Button colorScheme="pink" size="xs" isActive={true} variant="ghost">
        NINETALES
      </Button>
      <Box
        marginBottom="50px"
        marginTop="100px"
        bg="white"
        borderRadius="15px"
        border="1px"
        borderColor="pink"
      >
        <Table variant="striped" colorScheme="pink">
          <Thead>
            <Th>Stat</Th>
            <Th>Value</Th>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Stuff</Td>
              <Td>Stuff</Td>
            </Tr>
            <Tr>
              <Td>Stuff</Td>
              <Td>Stuff</Td>
            </Tr>
            <Tr>
              <Td>Stuff</Td>
              <Td>Stuff</Td>
            </Tr>
            <Tr>
              <Td>Stuff</Td>
              <Td>Stuff</Td>
            </Tr>
            <Tr>
              <Td>Stuff</Td>
              <Td>Stuff</Td>
            </Tr>
          </Tbody>
          <TableCaption>Basic Stats for Ninetales</TableCaption>
        </Table>
      </Box>
      <Heading size="lg">Sprites</Heading>

      <Flex marginTop="15px">
        <Image
          //borderRadius="20px"
          border="1px"
          borderColor="pink"
          boxSize="125px"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
          alt=""
          marginRight="20px"
        />
        <Image
          borderRadius="20px"
          border="1px"
          borderColor="pink"
          boxSize="125px"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png"
          alt=""
          marginRight="20px"
        />
        <Image
          borderRadius="20px"
          border="1px"
          borderColor="pink"
          boxSize="125px"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/38.png"
          alt=""
          marginRight="20px"
        />
        <Image
          borderRadius="20px"
          border="1px"
          borderColor="pink"
          boxSize="125px"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/38.png"
          alt=""
          marginRight="20px"
        />
        <Checkbox onChange={onClick}> Show puppy </Checkbox>
        <Showpicture isShow = {isChecked} /> 
      </Flex>
    </Box>
  );
}
