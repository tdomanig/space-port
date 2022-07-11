import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "./common/components/layout";
import { RocketsDetailPage } from "./features/rocket-detail/rocket-detail";

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
      </Routes>
    </BrowserRouter>
  );
};
