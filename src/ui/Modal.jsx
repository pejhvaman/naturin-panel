import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { GoX } from "react-icons/go";
import useClickOutside from "../hooks/useClickOutside";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 2rem;
  padding-top: 3rem;
  transition: all 0.5s;
  border: 1px solid var(--color-grey-400);
  width: 90%;
  max-height: 90svh;
  overflow-y: scroll;

  @media (width>768px) {
    width: 70%;
    padding: 3rem;
    padding-top: 4rems;
  }

  @media (width>1024px) {
    width: 50%;
  }
`;

// exported to use with open sidebar!
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 0.7rem;
  right: 1rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  // to track for which part, this modal is open:
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");

  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }) {
  // open is the setter function of the current part that the modal is open for, and frst we click this ot open a modal
  const { open } = useContext(ModalContext);

  // cloneElement(element, props, ...children)->uncommon and to create a react element using another element as a start point
  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext); // name is the part name that we pass to this component when we call it, and it should be the same as the currently open part(openName)

  const ref = useClickOutside(close);

  if (name !== openName) return null;

  // createPortal: to render a element outside of the parent's DOM structure but keeping it in the same position in the component tree, to avoid css conflicts with overflow:hidden in the parent (usefull for modals, menus, tooltips...)
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button>
          <GoX onClick={close} />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body // DOM node we want to render this JSX in first arg
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
