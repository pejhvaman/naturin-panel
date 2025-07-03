import styled from "styled-components";

const FormRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 0.5rem;

  padding: 1rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  @media (width>576px) {
    flex-direction: row;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRowValid({ label, children, error }) {
  return (
    <FormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </FormRow>
  );
}

export default FormRowValid;
