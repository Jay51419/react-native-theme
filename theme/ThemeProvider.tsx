import React, { createContext, useReducer } from "react";

const state = "light";
function reducer(state: string, action: any) {
  switch (action.type) {
    case "light":
      return "light";
    case "dark":
      return "dark";
    default:
      throw new Error();
  }
}
interface ThemeProps {
  theme: string;
  dispatch: (value: any) => void;
}
const ThemeContext = createContext({} as ThemeProps);

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, dispatch] = useReducer(reducer, state);
  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider as default, ThemeContext };
