import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { RES_PER_PAGE } from "../utils/constants";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;

  const pageCount = Math.ceil(count / RES_PER_PAGE);

  const handleGoToPrev = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  };

  const handleGoToNext = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  };

  if (pageCount <= 1) return null; // Challengy!

  return (
    <StyledPagination>
      <P>
        Showing <span>{(currentPage - 1) * RES_PER_PAGE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * RES_PER_PAGE}{" "}
        </span>{" "}
        of <span>{count}</span> results
      </P>

      <Buttons>
        <PaginationButton onClick={handleGoToPrev} disabled={currentPage === 1}>
          <GoChevronLeft />
          <span>Previous</span>
        </PaginationButton>

        <PaginationButton
          onClick={handleGoToNext}
          disabled={currentPage === pageCount}
        >
          <span>Next</span>
          <GoChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
