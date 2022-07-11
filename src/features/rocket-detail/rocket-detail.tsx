import React from "react";
import { Text, Table, Space } from "@mantine/core";
import { Rocketdetail } from "../../common/hooks/useRocketsdetail";
import { UserDetails } from "../../common/hooks/use-userdetails";
import { RocketDetailListELement } from "./detailListElement";
import { Users } from "./userListElement";
export type userType = {
  name: string;
  rocket: string;
  timestamp: string;
  twitter: string;
};
export const RocketsDetailPage = () => {
  const { data: rocket } = Rocketdetail();
  const { data: userData } = UserDetails();
  return rocket ? (
    <>
      <Space h={10}></Space>
      <h3>Rocketdetails:</h3>
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
          <RocketDetailListELement data={rocket} />
        </tbody>
      </Table>
      <Space h={50}></Space>
      <h3>Users:</h3>
      <Space h={50}></Space>
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
          {userData.map((element: userType) => {
            return <Users userData={element} key={element.name} />;
          })}
        </tbody>
      </Table>
    </>
  ) : (
    <Text color="red">No Data</Text>
  );
};
