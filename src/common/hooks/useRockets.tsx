import { useQuery } from "react-query";

export const useRockets = () => {
  return useQuery({
    queryKey: "rockets",
    queryFn: async () => {
      const url = "https://api.spacex.land/graphql";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query Rockets {
              rockets {
                company
                cost_per_launch
                name
                id
                country
              }
            }
          `,
        }),
      });

      const responseJson = await response.json();
      return responseJson.data.rockets;
    },
  });
};
