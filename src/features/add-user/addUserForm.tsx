import { useForm } from "@mantine/form";
import { TextInput, Group, Button, Box } from "@mantine/core";
import { addUser } from "../../common/hooks/use-addUser";

export const UserForm = () => {
  const form = useForm({
    initialValues: {
      id: "grüße",
      name: "",
      twitter: "",
      rocket: "falcon1",
      timestamp: "Hiaz",
    },
  });

  return (
    <Box sx={{ maxWidth: 340 }} mx="auto">
      <h2>Add user to : falcon1</h2>
      <form onSubmit={form.onSubmit((values) => {})}>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />

        <TextInput
          mt="sm"
          label="Twitter-Account"
          placeholder="Twitter"
          {...form.getInputProps("twitter")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};
