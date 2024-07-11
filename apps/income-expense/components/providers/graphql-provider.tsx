"use client";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import client from "../../apollo-client";

export function GraphQlProvider({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
