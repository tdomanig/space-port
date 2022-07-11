import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./common/components/layout";
import { RocketsDetailPage } from "./features/rocket-detail/rocket-detail";
import { UserForm } from "./features/add-user/addUserForm";

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
        <Route path="rocketdetail/addUser/" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
};
