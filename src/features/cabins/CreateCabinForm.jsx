import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRowValid from "../../ui/FormRowValid";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";
import styled from "styled-components";

const FormButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;

  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const { isCreating, createCabin } = useCreateCabin();

  const { isEditing, editCabin } = useEditCabin();

  const isWorking = isCreating || isEditing;

  const onSubmit = (data) => {
    console.log(data);

    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        { newCabin: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            console.log(data);
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createCabin(
        { ...data, image },
        {
          onSuccess: (data) => {
            console.log(data);
            reset();
            onCloseModal?.();
          },
        }
      );
  };

  return (
    <Form
      type={onCloseModal ? "modal" : "regular"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRowValid label="cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required!",
          })}
        />
      </FormRowValid>

      <FormRowValid
        label="maximum capacity"
        error={errors?.maxCapacity?.message}
      >
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required!",
            min: {
              value: 1,
              message: "Each cabin has at least 1 person capacity!",
            },
          })}
        />
      </FormRowValid>

      <FormRowValid label="cabin price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required!",
            min: {
              value: 100,
              message: "Each cabin has at least 100$ price!",
            },
          })}
        />
      </FormRowValid>

      <FormRowValid label="discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required!",
            validate: (value) =>
              value <= +getValues().regularPrice ||
              "Discount should be less than cabin price!",
          })}
        />
      </FormRowValid>

      <FormRowValid label="description" error={errors?.description?.message}>
        <Textarea
          type="number"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description", {
            required: "This field is required!",
            minLength: {
              value: 8,
              message: "Describe the cabin at least a little!",
            },
          })}
        />
      </FormRowValid>

      <FormRowValid label="photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          disabled={isWorking}
          {...register("image", {
            required: isEditSession ? false : "This field is required!",
          })}
        />
      </FormRowValid>

      <FormRowValid>
        {/* type is an HTML attribute! */}
        <FormButtons>
          <Button
            onClick={() => onCloseModal?.()}
            variation="secondary"
            type="reset"
          >
            Cancel
          </Button>
          <Button disabled={isWorking}>
            {isEditSession ? "Edit Cabin" : "Create cabin"}
          </Button>
        </FormButtons>
      </FormRowValid>
    </Form>
  );
}

export default CreateCabinForm;
