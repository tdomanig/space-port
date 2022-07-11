import { RocketElement } from ".";
import { Anchor } from "@mantine/core";

type RocketListProps = {
  data: RocketElement;
};

export const RocketListELement = ({ data }: RocketListProps) => {
  const { id, name, company, cost_per_launch, country } = data;
  const test = "rocketdetail/" + id;
  return (
    <tr>
      <td>
        <Anchor href={test}>{name}</Anchor>
      </td>
      <td>{company}</td>

      <td>{cost_per_launch}</td>

      <td>{country}</td>
    </tr>
  );
};
