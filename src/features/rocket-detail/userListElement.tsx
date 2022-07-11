import { userType } from "./rocket-detail";

type DetailUserProps = {
  userData: userType;
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
