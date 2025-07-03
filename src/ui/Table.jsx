import { createContext, useContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.2rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  width: 100%;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  column-gap: 1rem;
  align-items: center;
  transition: none;
  padding: 1.2rem;

  @media (width<567px) {
    padding-right: 0.5rem;
    & div:nth-child(1),
    & div:nth-child(5) {
      display: none;
    }

    & div:nth-child(3) {
      min-width: 10rem;
    }
    & div:nth-child(6) {
      max-width: 1.75rem;
    }
  }
`;

const StyledHeader = styled(CommonRow)`
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);

  @media (width<567px) {
    grid-template-columns: 3fr 5fr 3fr 0.6fr;
  }
`;

const StyledRow = styled(CommonRow)`
  & div:nth-child(3) {
  }
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media (width<567px) {
    grid-template-columns: 3fr 5fr 3fr 0.6fr;
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

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return <StyledHeader $columns={columns}>{children}</StyledHeader>;
}

function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment!</Empty>;

  return <StyledBody>{data.map(render)}</StyledBody>;
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledRow role="row" $columns={columns}>
      {children}
    </StyledRow>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
