import { useSelector, useDispatch } from "react-redux";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useEffect } from "react";
import { toggleTheme } from "./themeSlice";

export default function ToggleTheme() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      {theme === "light" ? (
        <DarkModeIcon className="text-[#FCE7C8]" />
      ) : (
        <WbSunnyIcon className="text-[#754E1A]" />
      )}
    </button>
  );
}
