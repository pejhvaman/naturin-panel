import styled from "styled-components";

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 0;

  /* @media (width>768px) {
    flex-direction: row;
  } */
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRowVertical({ label, children, error }) {
  return (
    <FormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </FormRow>
  );
}

export default FormRowVertical;
