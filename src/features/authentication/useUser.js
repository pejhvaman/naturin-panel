import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

function useUser() {
  const { data: userData, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    userData,
    isLoading,
    isAuthenticated: userData?.role === "authenticated",
  };
}

export default useUser;
