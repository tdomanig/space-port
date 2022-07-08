import { AppShell, Navbar, Header, Button, Group } from "@mantine/core";

export const Head = () => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={100} p="xs" color="red">
          {
            <Group spacing="xs">
              <Button color="grape">Hallo</Button>
              <Button>Seawas</Button>
              <Button>Schüss</Button>
            </Group>
          }
        </Navbar>
      }
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
