import styled from "styled-components";

import Logo from "../ui/Logo";
import MainNav from "../ui/MainNav";
import Uploader from "../data/Uploader";

import { useToggleMenu } from "../context/MenuToggleContext";
import ButtonIcon from "./ButtonIcon";
import { GoListUnordered, GoX } from "react-icons/go";
import { Overlay } from "./Modal";
import useClickOutside from "../hooks/useClickOutside";
import { useEffect } from "react";

const StyledSidebar = styled.aside`
  padding: 1rem;
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-200);
  width: 300px;
  position: fixed;
  left: 0;
  height: 100svh;
  z-index: 5000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* overflow-y: scroll; */
  overflow-x: hidden;

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

const SidebarToggleButton = styled.div`
  text-align: right;
  /* display: block; */

  @media (width>=768px) {
    opacity: 0;
    visibility: hidden;
  }
`;

function Sidebar() {
  const { isOpen, toggle } = useToggleMenu();

  const ref = useClickOutside(toggle);

  return (
    <>
      <StyledSidebar ref={ref} isOpen={isOpen}>
        <SidebarToggleButton>
          <ButtonIcon onClick={toggle}>
            {isOpen ? <GoX /> : <GoListUnordered />}
          </ButtonIcon>
        </SidebarToggleButton>
        <Logo />
        <MainNav />

        <Uploader />
      </StyledSidebar>
      {isOpen && <Overlay />}
    </>
  );
}

export default Sidebar;
