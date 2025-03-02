import Form from "../../ui/Form";
import FormRowValid from "../../ui/FormRowValid";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { updateSetting } from "../../services/apiSettings";

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

  const handleUpdateSetting = (e, field) => {
    const { value } = e.target;

    if (!value) return;

    updateSetting({ [field]: value });
  };

  return (
    <Form>
      <FormRowValid label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdateSetting(e, "minBookingLength")}
        />
      </FormRowValid>
      <FormRowValid label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleUpdateSetting(e, "maxBookingLength")}
        />
      </FormRowValid>
      <FormRowValid label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleUpdateSetting(e, "maxGuestsPerBooking")}
        />
      </FormRowValid>
      <FormRowValid label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdateSetting(e, "breakfastPrice")}
        />
      </FormRowValid>
    </Form>
  );
}

export default UpdateSettingsForm;
