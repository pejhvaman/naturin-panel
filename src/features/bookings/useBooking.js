import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  const {
    data: booking,
    isLoading: isBooingLoading,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  // console.log(booking);

  return { isBooingLoading, booking, error };
}
