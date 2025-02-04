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

  if (theme === "dark") {
    return (
      <AiOutlineMoon
        className="cursor-pointer"
        size={23}
        onClick={() => setTheme("light")}
      />
    );
  } else if (theme === "light") {
    return (
      <AiOutlineSun
        className="cursor-pointer"
        size={23}
        onClick={() => setTheme("dark")}
      />
    );
  }
};

export default ThemeBtn;
