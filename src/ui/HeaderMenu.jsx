import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { GoListUnordered, GoPerson, GoX } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { useToggleMenu } from "../context/MenuToggleContext";

const StyledHeaderMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (width > 1024px) {
    justify-content: end;
  }
`;

const StyledHeaderMenuLeft = styled.ul`
  display: flex;
  gap: 2rem;

  @media (width > 1024px) {
    display: none;
  }
`;

const StyledHeaderMenuRight = styled.ul`
  display: flex;
  gap: 2rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  const { isOpen, toggle } = useToggleMenu();

  return (
    <StyledHeaderMenu>
      <StyledHeaderMenuLeft>
        <li>
          <ButtonIcon onClick={toggle}>
            {isOpen ? <GoX /> : <GoListUnordered />}
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
