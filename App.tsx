import { StatusBar } from "expo-status-bar";
import React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import ApolloClient from "apollo-boost";

import Home from "./src/screens/Home";

const client = new ApolloClient({ uri: "https://rickandmortyapi.com/graphql" });

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
      <StatusBar style="auto" />
    </ApolloProvider>
  );
}
