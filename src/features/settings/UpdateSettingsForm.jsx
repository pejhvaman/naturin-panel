import Form from "../../ui/Form";
import FormRowValid from "../../ui/FormRowValid";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";
import Spinner from "../../ui/Spinner";

function UpdateSettingsForm() {
  const {
    isSettingsLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  if (isSettingsLoading) return <Spinner />;

  console.log(minBookingLength);

  return (
    <Form>
      <FormRowValid label="Minimum nights/booking">
        <Input type="number" id="min-nights" defaultValue={minBookingLength} />
      </FormRowValid>
      <FormRowValid label="Maximum nights/booking">
        <Input type="number" id="max-nights" defaultValue={maxBookingLength} />
      </FormRowValid>
      <FormRowValid label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
        />
      </FormRowValid>
      <FormRowValid label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
        />
      </FormRowValid>
    </Form>
  );
}

export default UpdateSettingsForm;
