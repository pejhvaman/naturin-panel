import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: end;
  gap: 1.2rem;
  margin: 1rem 0;
  width: 100%;

  @media (width>=1024px) {
    flex-direction: row;
    width: fit-content;
  }
`;

export default TableOperations;
