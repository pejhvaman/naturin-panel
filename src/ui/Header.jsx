import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  padding: 2rem;
  border-bottom: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
