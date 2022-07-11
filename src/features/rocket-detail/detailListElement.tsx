import { Anchor } from "@mantine/core";

type DetailRocketProps = {
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
