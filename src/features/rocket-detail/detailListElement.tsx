import React from "react";
import { Anchor } from "@mantine/core";

type DetailListProps = {
  data: RocketDetailType;
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
export const RocketDetailListELement = ({ data }: DetailListProps) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.company}</td>
      <td>{data.cost_per_launch}</td>
      <td>{data.country}</td>
      <td>
        <Anchor href={data.wikipedia}>{data.wikipedia}</Anchor>
      </td>
    </tr>
  );
};
export const RocketDetailListELement = ({ userdata }: DetailListProps) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.company}</td>
      <td>{data.cost_per_launch}</td>
      <td>{data.country}</td>
      <td>
        <Anchor href={data.wikipedia}>{data.wikipedia}</Anchor>
      </td>
    </tr>
  );
};
