import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

function Account() {
  return (
    <>
      <Row style={{ marginBottom: "4rem" }}>
        <Heading style={{ marginInline: "auto" }} as="h2">
          Update user data
        </Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading style={{ marginInline: "auto" }} as="h2">
          Update password
        </Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
