import styled from "styled-components";

const Input = styled.input`
  padding: 1.2rem 1.6rem;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  &::placeholder {
    color: var(--color-grey-300);
  }
`;

export default Input;
