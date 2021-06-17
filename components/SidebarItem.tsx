import { Box } from "@chakra-ui/react";

interface Props {
  label: string;
}

function SidebarItem({ label }: Props) {
  return (
    <Box p={4} borderRadius="8px" _hover={{ bg: "pink" }}>
      {label}
    </Box>
  );
}

export default SidebarItem;
