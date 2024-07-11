import { gql } from "@apollo/client";

export const UPSERT_USER = gql`
  mutation UpsertUser($name: String!) {
    upsertUser(input: { name: $name }) {
      id
      name
      amount
    }
  }
`;

export const ADD_BALANCE = gql`
  mutation addBalance($userId: Int!, $amount: Int!) {
    addBalance(input: { userId: $userId, amount: $amount }) {
      id
      name
      amount
    }
  }
`;
