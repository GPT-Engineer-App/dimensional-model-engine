import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CreateModel() {
  return (
    <Box>
      <Button as={Link} to="/" colorScheme="blue">
        Back to Home
      </Button>
      {/* Put the form or content for creating a model here */}
    </Box>
  );
}

export default CreateModel;
