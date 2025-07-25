import styled, { css } from "styled-components";

const Form = styled.form`
  ${({ type }) =>
    type === "regular" &&
    css`
      padding: 2.4rem 4rem;
      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${({ type }) =>
    type === "modal" &&
    css`
      width: 100%;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
  padding: 0.5rem;
`;

export default Form;
