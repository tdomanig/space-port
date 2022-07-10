import React from "react";
import { Text, Table } from "@mantine/core";
import { Rocketdetail } from "../../common/hooks/useRocketsdetail";
import { RocketDetailListELement } from "./detailListElement";

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
          <th>Wikipedia</th>
        </tr>
      </thead>
      <tbody>
        {" "}
        <RocketDetailListELement data={data} />
      </tbody>
    </Table>
  ) : (
    <Text color="red">No Data</Text>
  );
};
