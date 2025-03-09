import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export function useBookings() {
  const {
    data: bookings,
    isLoading: isBookingsLoading,
    error,
  } = useQuery({
    queryKey: ["bokkings"],
    queryFn: getBookings,
  });

  return { isBookingsLoading, bookings, error };
}
