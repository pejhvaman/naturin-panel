import { createContext, useContext, useState } from "react";

const MenuToggleContext = createContext();

function MenuToggleProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  const toggle = () => setIsOpen((is) => !is);

  return (
    <MenuToggleContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
    </MenuToggleContext.Provider>
  );
}

function useToggleMenu() {
  const value = useContext(MenuToggleContext);

  if (value === undefined)
    throw new Error("Context is beign used outside its provider!");

  return value;
}

// eslint-disable-next-line react-refresh/only-export-components
export { MenuToggleProvider, useToggleMenu };
