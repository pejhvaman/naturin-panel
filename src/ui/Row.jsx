import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${({ type = "vertical" }) =>
    type === "horizontal" &&
    css`
      align-items: center;
      justify-content: space-between;

      @media (width<=576px) {
        flex-direction: column;
      }
    `}

  ${({ type = "vertical" }) =>
    type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.3rem;
    `}
`;

export default Row;
