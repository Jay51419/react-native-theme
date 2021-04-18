import React from "react";
import { ThemeContext } from "./ThemeProvider";
export default function useColorScheme() {
  const context = React.useContext(ThemeContext);
  const { theme, dispatch } = context;
  const setLightTheme = () => dispatch({ type: "light" });
  const setDarkTheme = () => dispatch({ type: "dark" });

  return { theme, setDarkTheme, setLightTheme };
}
