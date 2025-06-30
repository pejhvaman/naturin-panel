import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { GoListUnordered, GoPerson } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (width >= 768px) {
    justify-content: end;
  }
`;

const StyledHeaderMenuLeft = styled.ul`
  display: flex;
  gap: 2rem;

  @media (width >= 768px) {
    display: none;
  }
`;

const StyledHeaderMenuRight = styled.ul`
  display: flex;
  gap: 2rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <StyledHeaderMenuLeft>
        <li>
          <ButtonIcon>
            <GoListUnordered />
          </ButtonIcon>
        </li>
      </StyledHeaderMenuLeft>
      <StyledHeaderMenuRight>
        <li>
          <ButtonIcon onClick={() => navigate("/account")}>
            <GoPerson />
          </ButtonIcon>
        </li>
        <li>
          <DarkModeToggle />
        </li>
        <li>
          <Logout />
        </li>
      </StyledHeaderMenuRight>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
