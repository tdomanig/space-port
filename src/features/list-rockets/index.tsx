import { Text, Table } from "@mantine/core";
import { useRockets } from "../../common/hooks/useRockets";
import { RocketListELement } from "./RocketListElement";

export type RocketElement = {
  company: string;
  cost_per_launch: number;
  name: string;
  country: string;
  id: string;
};

export const RocketsPage = () => {
  const { data } = useRockets();

  return data ? (
    <Table striped highlightOnHover verticalSpacing="xs">
      <thead>
        <tr>
          <th>Name</th>
          <th>Comapny</th>
          <th>CostbyLaunch</th>

          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {" "}
        {data.map((element: RocketElement) => {
          return <RocketListELement data={element} key={element.id} />;
        })}
      </tbody>
    </Table>
  ) : (
    <Text color="red">No Data</Text>
  );
};
