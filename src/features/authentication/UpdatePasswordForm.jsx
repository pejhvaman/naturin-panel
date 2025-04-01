import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowValid from "../../ui/FormRowValid";
import Input from "../../ui/Input";

import { useUpdateUser } from "./useUpdateUser";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm({
    defaultValues: {
      password: "",
    },
  });
  const { errors } = formState;

  const { updateUser, isUpdatingUser } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser(
      { password },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowValid
        label="New password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdatingUser}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRowValid>

      <FormRowValid
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdatingUser}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRowValid>
      <FormRowValid>
        <Button
          onClick={reset}
          type="reset"
          variation="secondary"
          disabled={isUpdatingUser}
        >
          Cancel
        </Button>
        <Button disabled={isUpdatingUser}>Update password</Button>
      </FormRowValid>
    </Form>
  );
}

export default UpdatePasswordForm;
