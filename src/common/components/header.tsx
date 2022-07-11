import { AppShell, Header } from "@mantine/core";

export const Head = () => {
  return (
    <AppShell
      header={
        <Header height={60} p="xs">
          {<h1>Welcome</h1>}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {}
    </AppShell>
  );
};
