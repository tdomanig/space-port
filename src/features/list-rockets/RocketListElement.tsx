import { RocketElement } from ".";
import React from "react";
import { Anchor } from "@mantine/core";

type RocketListProps = {
  data: RocketElement;
};
export const RocketListELement = ({ data }: RocketListProps) => {
  const test = "rocketdetail/" + data.id;
  return (
    <tr>
      <td>
        <Anchor href={test}>{data.name}</Anchor>
      </td>
      <td>{data.company}</td>

      <td>{data.cost_per_launch}</td>

      <td>{data.country}</td>
    </tr>
  );
};
