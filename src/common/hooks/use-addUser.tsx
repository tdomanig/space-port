import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

export const AddUser = () => {
  const id = useParams();

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
                    insert_users(objects: {id: "", name: "", rocket: ${id.rocketDetailId}, timestamp: "", twitter: ""})
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
