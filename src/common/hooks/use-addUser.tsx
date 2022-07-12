import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import { graphqlClient } from "../graphql-client";

export type useraddType = {
  name: string;
  rocket: string;
  twitter: string;
};

const document = gql`
  mutation InsertUser($name: String!, $rocket: String!, $twitter: String!) {
    insert_users(objects: { name: $name, rocket: $rocket, twitter: $twitter }) {
      returning {
        id
      }
    }
  }
`;

export const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (variables: useraddType) => {
      const data = await graphqlClient.request(document, variables);
      return data.insert_users.returning.id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });
};
