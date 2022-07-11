import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export const Rocketdetail = () => {
  const id = useParams();

  return useQuery({
    queryKey: `rocket`,
    queryFn: async () => {
      const url = "https://api.spacex.land/graphql";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
              query Rocket {
                rocket(id:"${id.rocketDetailId}") {
                    id
                    active
                    company
                    name
                    cost_per_launch
                    country
                    description
                    wikipedia
                }
              }
            `,
        }),
      });
      const responseJson = await response.json();

      return responseJson.data.rocket;
    },
  });
};
