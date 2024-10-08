import "react-datepicker/dist/react-datepicker.css";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./api/instance";
import { Routes } from "./routes";

const App = () => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
