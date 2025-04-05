import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  height: 100vh;
  transition: all 0.3s;
  overflow-y: hidden;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 26rem 1fr;
  }
`;

const Main = styled.main`
  padding: 4rem 4.6rem;
  background-color: var(--color-grey-50);
  overflow-y: auto;

  width: 100%;
  @media (min-width: 768px) {
    /* width: calc(100% - 26rem); */
  }

  min-height: 100vh;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
