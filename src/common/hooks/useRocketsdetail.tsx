import { useQuery } from "react-query";

export const useRockets = () => {
  return useQuery({
    queryKey: "users",
    queryFn: getUsers,
  });
};

export const Rocketdetail = () => {
  return useQuery({
    queryKey: "rocket",
    queryFn: getRocket,
  });
};

const getUsers = async () => {
  const url = "https://api.spacex.land/graphql";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query Users {
          users(where: {rocket:{eq: "falcon1"}}) {
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
  return responseJson.data.rockets;
};

const getRocket = async () => {
  const url = "https://api.spacex.land/graphql";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query Rocket {
            rocket(id:"falcon1") {
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
};
