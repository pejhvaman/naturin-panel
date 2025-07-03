import styled from "styled-components";

const Tag = styled.span`
  max-width: 7rem;
  overflow-wrap: break-word;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 100px;
  text-align: center;
  padding: 0.3rem;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);

  @media (width>443px) {
    font-size: 1rem;
    padding: 0.4rem 1rem;
    max-width: fit-content;
  }
`;

export default Tag;
