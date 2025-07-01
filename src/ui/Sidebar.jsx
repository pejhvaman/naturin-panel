import styled from "styled-components";

import Logo from "../ui/Logo";
import MainNav from "../ui/MainNav";
import Uploader from "../data/Uploader";

import { useToggleMenu } from "../context/MenuToggleContext";

const StyledSidebar = styled.aside`
  padding: 2rem;
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  width: 300px;
  position: fixed;
  left: 0;
  height: 100svh;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (width <=768px) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
  }

  @media (width > 768px) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
  }

  @media (width > 1024px) {
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(0)")};
  }
`;

//TODO: add a button to close sidebar in small viewports
function Sidebar() {
  const { isOpen } = useToggleMenu();

  return (
    <StyledSidebar isOpen={isOpen}>
      <Logo />
      <MainNav />

      <Uploader />
    </StyledSidebar>
  );
}

export default Sidebar;
