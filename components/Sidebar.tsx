import { Box, Input } from "@chakra-ui/react";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <Box w="20%" borderRight="1px" borderColor="pink">
      <Box px="12px" py="16px" bg="white" position="sticky" top="0">
        <Input
          focusBorderColor="pink.100"
          placeholder="Search for a pokemon!"
        />
      </Box>
      <SidebarItem label="pikachu" />
      <SidebarItem label="pikachu" />
      <SidebarItem label="pikachu" />
      <SidebarItem label="pikachu" />
    </Box>
  );
}

export default Sidebar;
