import { useForm } from "react-hook-form";
import { TextInput, Button, Box } from "@mantine/core";
import { useraddType } from "../../common/hooks/use-addUser";

type UserFormProps = {
  onSubmit: (values: useraddType) => void;
};

export const SendForm = ({ onSubmit }: UserFormProps) => {
  const { handleSubmit, register } = useForm<useraddType>();
  return (
    <Box sx={{ maxWidth: 340 }} mx="auto">
      <h2>Add user to : falcon1</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Name"
          placeholder="Name"
          {...register("name", { required: "Name" })}
        />

        <TextInput
          mt="sm"
          label="Twitter-Account"
          placeholder="Twitter"
          {...register("twitter", { required: "Twitter-Account" })}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};
