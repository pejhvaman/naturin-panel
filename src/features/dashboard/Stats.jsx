import { GoBook } from "react-icons/go";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkins = confirmedStays.length;

  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        icon={<GoBook />}
        color="blue"
        value={numBookings}
      />
      <Stat
        title="Sales"
        icon={<GoBook />}
        color="blue"
        value={formatCurrency(sales)}
      />
      <Stat title="Checkins" icon={<GoBook />} color="blue" value={checkins} />
      <Stat
        title="Occupation"
        icon={<GoBook />}
        color="blue"
        value={Math.round(occupation * 100)}
      />
    </>
  );
}

export default Stats;
