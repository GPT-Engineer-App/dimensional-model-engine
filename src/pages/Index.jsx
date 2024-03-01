import React from "react";
import { Box, Text, Center, VStack, IconButton } from "@chakra-ui/react";
import { FaCube } from "react-icons/fa";

const Index = () => {
  return (
    <Center h="100vh" bgGradient="linear(to-l, #7928CA, #FF0080)">
      <VStack spacing={5}>
        <IconButton
          aria-label="3D Model Engine"
          icon={<FaCube />}
          size="3xl"
          isRound
          bg="whiteAlpha.900"
          boxShadow="base"
          _hover={{
            bg: "whiteAlpha.800",
          }}
        />
        <Box p={5} bg="whiteAlpha.800" borderRadius="md" boxShadow="base">
          <Text fontSize="2xl" fontWeight="bold" color="gray.700">
            N-Dimensional Model Engine
          </Text>
          <Text mt={3} color="gray.500">
            A conceptual interface representing an engine capable of handling multi-dimensional models.
          </Text>
        </Box>
      </VStack>
    </Center>
  );
};

export default Index;
