import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  min-height: 100svh;
  transition: all 0.3s;
  overflow-y: auto;
  width: 100%;
  display: flex;
  justify-content: end;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  width: 100%;
  min-height: 100svh;
  max-height: fit-content;

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: calc(100% - 300px);
  }
`;

const OutletLayout = styled.div`
  padding: 2rem 1rem;
  overflow-x: hidden;

  @media (width>=768px) {
    padding: 4rem;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Main>
        <Header />
        <OutletLayout>
          <Outlet />
        </OutletLayout>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
