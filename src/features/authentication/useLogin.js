import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();

  // const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: () => {
      // queryClient.setQueryData(["user"], user);
      navigate("/dashboard");
    },

    onError: (err) => {
      console.error("ERROR: " + err);
      toast.error("Provided email or password is incorrect!");
    },
  });

  return { login, isLoggingIn };
}
export default useLogin;
