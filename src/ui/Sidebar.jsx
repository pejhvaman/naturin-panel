import styled from "styled-components";

import Logo from "../ui/Logo";
import MainNav from "../ui/MainNav";
import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  padding: 2rem;
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  width: 300px;
  position: fixed;
  left: 0;
  height: 100svh;
  z-index: 100;
  transform: translateX(-100%);

  @media (min-width: 768px) {
    transform: translateX(0);
  }

  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />

      <Uploader />
    </StyledSidebar>
  );
}

export default Sidebar;
