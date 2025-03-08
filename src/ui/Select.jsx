import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${({ type }) =>
      type === "white" ? "var(--color-grey-100)" : "var(--color-grey-800)"};
  border-radius: var(--border-radius-sm);
  background-color: ${({ type }) =>
    type === "white" ? "var(--color-grey-100)" : "var(--color-grey-500)"};
  font-weight: 500;
  color: ${({ type }) =>
    type === "white" ? "var(--color-grey-800)" : "var(--color-grey-100)"};
  box-shadow: var(--shadow-sm);
  cursor: pointer;
`;

function Select({ options, value, onChange, ...props }) {
  console.log(props);
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
