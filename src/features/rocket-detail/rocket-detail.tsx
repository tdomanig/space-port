import React from "react";
import { Text, Table } from "@mantine/core";
import { Rocketdetail, useRockets } from "../../common/hooks/useRocketsdetail";
import { RocketDetailListELement } from "./detailListElement";

export const RocketsDetailPage = () => {
  const { data } = Rocketdetail();
  const { userData } = useRockets();

  return data ? (
    <>
      <Table striped highlightOnHover verticalSpacing="xs">
        <thead>
          <tr>
            <th>Name</th>
            <th>Comapny</th>
            <th>CostbyLaunch</th>
            <th>Country</th>
            <th>Wikipedia</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          <RocketDetailListELement data={data} />
        </tbody>
      </Table>
      <Table striped highlightOnHover verticalSpacing="xs">
        <thead>
          <tr>
            <th>User</th>
            <th>Rakete</th>
            <th>Twitter</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          <RocketDetailListELement data={data} />
        </tbody>
      </Table>
    </>
  ) : (
    <Text color="red">No Data</Text>
  );
};
