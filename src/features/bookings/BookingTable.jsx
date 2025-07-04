import BookingRow from "./BookingRow";
import BookingsTable from "../../ui/BookingsTable";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import { useBookings } from "./useBookings";
import styled from "styled-components";

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

function BookingTable() {
  const { bookings, isBookingsLoading, count } = useBookings();

  if (isBookingsLoading) return <Spinner />;

  if (!bookings.length || !bookings) return <Empty resourceName="Bookings" />;

  return (
    <Menus>
      <TableContainer>
        <BookingsTable columns="0.6fr 2fr 2.4fr 1.4fr 1fr 0.2fr">
          <BookingsTable.Header>
            <div>Cabin</div>
            <div>Guest</div>
            <div>Dates</div>
            <div>Status</div>
            <div>Amount</div>
            <div></div>
          </BookingsTable.Header>

          <BookingsTable.Body
            data={bookings}
            render={(booking) => (
              <BookingRow key={booking.id} booking={booking} />
            )}
          />
        </BookingsTable>

        <BookingsTable.Footer>
          <Pagination count={count} />
        </BookingsTable.Footer>
      </TableContainer>
    </Menus>
  );
}

export default BookingTable;
