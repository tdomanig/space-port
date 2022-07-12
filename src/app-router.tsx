import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./common/components/layout";
import { RocketsDetailPage } from "./features/rocket-detail/rocket-detail";
import { SendForm } from "./features/add-user/addUserForm";
import { useraddType } from "./common/hooks/use-addUser";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Layout />
            </>
          }
        ></Route>
        <Route
          path="rocketdetail/:rocketDetailId"
          element={<RocketsDetailPage />}
        />
        <Route
          path="rocketdetail/addUser/"
          element={
            <SendForm
              onSubmit={function (values: useraddType): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
