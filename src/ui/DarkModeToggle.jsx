import { GoMoon, GoSun } from "react-icons/go";
import ButtonIcon from "../ui/ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleIsDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleIsDarkMode}>
      {isDarkMode ? <GoSun /> : <GoMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
