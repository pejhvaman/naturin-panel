import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";

import Row from "../ui/Row";

function Settings() {
  return (
    <Row>
      <Heading style={{ marginInline: "auto" }} as="h2">
        Update hotel settings
      </Heading>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;
