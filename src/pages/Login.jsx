import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import LoginForm from "../features/authentication/LoginForm";
import styled from "styled-components";

const LoginLayout = styled.main`
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h2">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
