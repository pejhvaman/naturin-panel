import styled from "styled-components";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  // if there is not a use navigate to login page
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate("/login");
  //   }
  // }, [isAuthenticated, isLoading, navigate]);
  if (!isAuthenticated) navigate("/login");

  // if loading user show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // if there is authenticated user, return the app!
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
