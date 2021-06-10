import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("Dark mode on");
  return [darkMode, setDarkMode];
};
