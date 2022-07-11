import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

type useraddType = {
  id: string;
  name: string;

  twitter: string;
  timestamp: string;
};
export const AddUser = (values: useraddType) => {
  const { id, name, timestamp, twitter } = values;
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
                    insert_users(objects: {id: "${id}", name: "${name}", rocket: "falcon1", timestamp: "${timestamp}", twitter: "${twitter}"})
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
