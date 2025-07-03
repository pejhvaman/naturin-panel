import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  width: 100%;
  padding: 2rem;
  border-bottom: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
`;
const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 140rem;
  margin-inline: auto;

  @media (width>=768px) {
    padding-inline: 4rem;
  }
`;
function Header() {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <UserAvatar />
        <HeaderMenu />
      </HeaderWrapper>
    </StyledHeader>
  );
}

export default Header;
