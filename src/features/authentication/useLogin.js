import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiLogin";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      console.log(user);
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
