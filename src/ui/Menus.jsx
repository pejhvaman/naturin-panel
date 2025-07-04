import { createContext, useContext, useState } from "react";
import styled from "styled-components";
import useClickOutside from "../hooks/useClickOutside";
import { createPortal } from "react-dom";
import { GoKebabHorizontal } from "react-icons/go";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  right: ${(props) => props.$position.x}px;
  top: ${(props) => props.$position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState(""); // to track for which row the menu is open
  const [position, setPosition] = useState(null); // to set the popup menu position

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, position, open, close, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { openId, setPosition, open, close } = useContext(MenusContext);

  const handleClick = (e) => {
    e.stopPropagation(); //to stop bubbling (to stop closing the menu or modal that is being portal) (in the useClickOutside we used capturing in bubbling phase for this compound components)

    const rect = e.target.closest("button").getBoundingClientRect(); // closest button is itself!

    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  };

  return (
    <StyledToggle onClick={handleClick}>
      <GoKebabHorizontal style={{ width: "2rem" }} />
    </StyledToggle>
  );
}

function List({ children, id }) {
  const { openId, position, close } = useContext(MenusContext);

  const ref = useClickOutside(close, false);

  if (openId !== id) return null;

  return createPortal(
    <StyledList ref={ref} $position={position}>
      {children}
    </StyledList>,
    document.body
  );
}

function Button({ children, onClick, icon }) {
  const { close } = useContext(MenusContext);

  const handleClick = () => {
    onClick?.(); // to perform an action when it's needed
    close();
  };

  return (
    <StyledButton onClick={handleClick}>
      {icon} {children}
    </StyledButton>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
