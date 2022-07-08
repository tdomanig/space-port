import { useQuery } from "react-query";

export const useRockets = () => {
  return useQuery({
    queryKey: "users",
    queryFn: getUsers,
  });
};

export const Rocketdetail = () => {
  return useQuery({
    queryKey: "rockets",
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
          users {
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
          query Rockets {
            rocket(id:"falcon1") {
                id
                active
                company
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
  console.log(responseJson.data.rocket);
  return responseJson.data.rocket;
};
