import React from "react";
import { Anchor } from "@mantine/core";

type DetailRocketProps = {
  data: RocketDetailType;
};

type DetailUserProps = {
  userData: userType;
};

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
export const RocketDetailListELement = ({ data }: DetailRocketProps) => {
  const { name, company, cost_per_launch, country, wikipedia } = data;
  return (
    <tr>
      <td>{name}</td>
      <td>{company}</td>
      <td>{cost_per_launch}</td>
      <td>{country}</td>
      <td>
        <Anchor href={wikipedia}>{wikipedia}</Anchor>
      </td>
    </tr>
  );
};
export const Users = ({ userData }: DetailUserProps) => {
  const { name, rocket, timestamp, twitter } = userData;
  return (
    <tr>
      <td>{name}</td>
      <td>{rocket}</td>
      <td>{timestamp}</td>
      <td>{twitter}</td>
    </tr>
  );
};
