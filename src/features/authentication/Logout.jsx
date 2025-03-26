import { GoSignOut } from "react-icons/go";
import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";
import useLogout from "./useLogout";

function Logout() {
  const { logout, isLoggingOut } = useLogout();
  return (
    <ButtonIcon disabled={isLoggingOut} onClick={logout}>
      {!isLoggingOut ? <GoSignOut /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
