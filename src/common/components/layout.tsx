import { Stack } from "@mantine/core";
import React from "react";
import { Head } from "./header";
import { RocketsPage } from "../../features/list-rockets";
import { Foo } from "./footer";

export const Layout = () => {
  return (
    <div min-height="100vh">
      <Head />
      <RocketsPage />
      <Foo />
    </div>
  );
};
