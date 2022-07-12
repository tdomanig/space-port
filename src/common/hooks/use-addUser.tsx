import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

export type useraddType = {
  name: string;

  twitter: string;
};
export const addUser = (values: useraddType) => {
  const { name, twitter } = values;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery({
    queryKey: "insert_users",
    queryFn: async () => {
      const url = "https://api.spacex.land/graphql";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
                query insert_Users {
                  insert_users{
                    insert_users(objects: {id: "Seawas", name: "${name}", rocket: "falcon1", timestamp: , twitter: "${twitter}"})
                  } {
                    name
                    rocket
                    timestamp
                    twitter
                  }
                }
              `,
        }),
      });

      const responseJson = await response.json();

      return responseJson.data.users;
    },
  });
};
