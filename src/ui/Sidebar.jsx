import styled from "styled-components";

const StyledSidebar = styled.aside`
  padding: 2rem;
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);

  grid-row: -1;
  transform: translateX(-100%);
  @media (min-width: 768px) {
    grid-row: 1 / -1;
    transform: translateX(0);
  }
`;

function Sidebar() {
  return <StyledSidebar>sidebar</StyledSidebar>;
}

export default Sidebar;
