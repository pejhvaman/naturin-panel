import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import useRecentStays from "./useRecentStays";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import { useCabins } from "../cabins/useCabins";
import DurationChart from "./DurationChart";

const StyledDashboardLayout = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 2rem;
`;

const StyledStaysSummary = styled.div`
  grid-column: 1/-1;
  display: flex;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const {
    stays,
    confirmedStays,
    isLoading: isLoading2,
    numDays,
  } = useRecentStays();

  const { cabins, isCabinsLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;
  console.log(stays);

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <StyledStaysSummary>
        <div style={{ width: "40%" }}>today&apos;s staty</div>
        <DurationChart confirmedStays={confirmedStays} />
      </StyledStaysSummary>
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
