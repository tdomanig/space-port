import { RocketDetailType } from "./rocket-detail";
import React from "react";
import { Anchor } from "@mantine/core";

type DetailListProps = {
  data: RocketDetailType;
};
export const RocketDetailListELement = ({ data }: DetailListProps) => {
  return (
    <tr>
      <td>
        <Anchor>{data.name}</Anchor>
      </td>
      <td>{data.company}</td>

      <td>{data.cost_per_launch}</td>

      <td>{data.country}</td>
    </tr>
  );
};
