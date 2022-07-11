import React from "react";
import { Text, Table } from "@mantine/core";
import { Rocketdetail, useRockets } from "../../common/hooks/useRocketsdetail";
import { RocketDetailListELement, Users } from "./detailListElement";

export const RocketsDetailPage = () => {
  const { data } = Rocketdetail();
  const { userData } = useRockets();
  return data && userData ? (
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
            <th>Name</th>
            <th>Rocket</th>
            <th>Timestamp</th>
            <th>Twitter</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          <Users userData={userData} />
        </tbody>
      </Table>
    </>
  ) : (
    <Text color="red">No Data</Text>
  );
};
