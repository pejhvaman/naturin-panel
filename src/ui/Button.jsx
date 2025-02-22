import styled from "styled-components";

const Button = styled.button`
  padding: 1.2rem 1.6rem;
  background-color: var(--color-brand-500);
  color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

export default Button;
