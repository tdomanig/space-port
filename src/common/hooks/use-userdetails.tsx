import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const id = useParams();

  return useQuery({
    queryKey: "users",
    queryFn: async () => {
      const url = "https://api.spacex.land/graphql";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
              query Users {
                users(where: {rocket: {_eq: "${id.rocketDetailId}"}}) {
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
