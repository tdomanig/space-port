import { Layout } from "./common/components/layout";
import { RocketsDetailPage } from "./features/rocket-detail/rocket-detail";
export const AppRouter = () => {
  return (
    <>
      <Layout />
      <RocketsDetailPage />
    </>
  );
};
