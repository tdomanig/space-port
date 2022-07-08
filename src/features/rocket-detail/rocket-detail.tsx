import React from "react";
import { Text, Table } from "@mantine/core";
import { Rocketdetail } from "../../common/hooks/useRocketsdetail";
import { RocketDetailListELement } from "./detailListElement";

export type RocketDetailType = {
  company: string;
  cost_per_launch: number;
  name: string;
  country: string;
  id: string;
  wikipedia: string;
};

type userType = {
  name: string;
  rocket: string;
  timestamp: string;
  twitter: string;
};

export const RocketsDetailPage = () => {
  const { data } = Rocketdetail();

  return data ? (
    <Table striped highlightOnHover verticalSpacing="xs">
      <thead>
        <tr>
          <th>Name</th>
          <th>Comapny</th>
          <th>CostbyLaunch</th>

          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {" "}
        {data.map((element: RocketDetailType) => {
          return <RocketDetailListELement data={element} key={element.id} />;
        })}
      </tbody>
    </Table>
  ) : (
    <Text color="red">No Data</Text>
  );
};
