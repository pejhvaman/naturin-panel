import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
import styled from "styled-components";
import { useToggleMenu } from "../context/MenuToggleContext";

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
  min-height: 100svh;
  display: flex;

  flex-direction: column;

  @media (width<=768px) {
    width: ${({ isOpen }) => (isOpen ? "100%" : "100%")};
  }

  @media (width > 768px) {
    width: ${({ isOpen }) => (isOpen ? "calc(100% - 300px)" : "100%")};
  }

  @media (width > 1024px) {
    width: ${({ isOpen }) =>
      isOpen ? "calc(100% - 300px)" : "calc(100% - 300px)"};
  }
`;

const OutletLayout = styled.div`
  padding: 2rem 1rem;
  padding-top: 10rem;
  overflow-x: hidden;
  width: 100%;
  max-width: 140rem;
  margin-inline: auto;

  @media (width>=768px) {
    padding: 4rem;
    padding-top: 12rem;
  }
`;

function AppLayout() {
  const { isOpen } = useToggleMenu();

  return (
    <StyledAppLayout>
      <Sidebar />
      <Main isOpen={isOpen}>
        <Header />
        <OutletLayout>
          <Outlet />
        </OutletLayout>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
