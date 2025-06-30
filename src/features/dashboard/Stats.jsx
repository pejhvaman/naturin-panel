import { GoBook, GoChecklist, GoGraph, GoLog } from "react-icons/go";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
import styled from "styled-components";

const StyledStatLayout = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (576px <= width < 768px), (width > 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
`;

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkins = confirmedStays.length;

  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <StyledStatLayout>
      <Stat
        title="Bookings"
        icon={<GoBook />}
        color="blue"
        value={numBookings}
      />
      <Stat
        title="Sales"
        icon={<GoLog />}
        color="green"
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        icon={<GoChecklist />}
        color="indigo"
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        icon={<GoGraph />}
        color="yellow"
        value={Math.round(occupation * 100) + "%"}
      />
    </StyledStatLayout>
  );
}

export default Stats;
