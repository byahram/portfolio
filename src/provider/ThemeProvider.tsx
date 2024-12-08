"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
}

// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { type ThemeProviderProps } from "next-themes/dist/types";

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   return (
//     <NextThemesProvider attribute="class" defaultTheme="system" {...props}>
//       {children}
//     </NextThemesProvider>
//   );
// }
