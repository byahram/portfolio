import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";

const ThemeBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed cursor-pointer right-5 bottom-5 w-12 h-12 rounded-full bg-white text-dark dark:bg-light flex items-center justify-center shadow-xl z-10 md:w-auto md:h-auto md:rounded-none md:bg-none md:shadow-none md:relative md:right-auto md:bottom-auto md:dark:bg-dark md:dark:text-light"
    >
      {theme === "dark" ? (
        <AiOutlineMoon size={23} />
      ) : (
        <AiOutlineSun size={23} />
      )}
    </button>
  );
};

export default ThemeBtn;
