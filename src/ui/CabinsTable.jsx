import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
  padding: 1.2rem;

  @media (width <=768px) {
    grid-template-columns: 3fr 5fr 3fr 0.6fr;
  }
`;

const StyledHeader = styled(CommonRow)`
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const StyledRow = styled(CommonRow)`
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const CabinsTableContext = createContext();

function CabinsTable({ columns, children }) {
  return (
    <CabinsTableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </CabinsTableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(CabinsTableContext);

  return <StyledHeader $columns={columns}>{children}</StyledHeader>;
}

function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment!</Empty>;

  return <StyledBody>{data.map(render)}</StyledBody>;
}

function Row({ children }) {
  const { columns } = useContext(CabinsTableContext);

  return (
    <StyledRow role="row" $columns={columns}>
      {children}
    </StyledRow>
  );
}

CabinsTable.Header = Header;
CabinsTable.Body = Body;
CabinsTable.Row = Row;
CabinsTable.Footer = Footer;

export default CabinsTable;
