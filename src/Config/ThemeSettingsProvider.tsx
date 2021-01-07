import React, { useState, useEffect } from "react";
import darkmodejs from "@assortment/darkmodejs";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

export default function ThemeSettingsProvider(props) {
  const [theme, setTheme] = useState("light");

  const onChange = (activeTheme, themes) => {
    switch (activeTheme) {
      case themes.DARK:
        setTheme(themes.DARK);
        console.log(`current theme: ${themes.DARK}`);
        break;
      case themes.LIGHT:
        setTheme(themes.LIGHT);
        console.log(`current theme: ${themes.LIGHT}`);
        break;
      case themes.NO_PREF:
        setTheme(themes.NO_PREF);
        console.log(`current theme: ${themes.NO_PREF}`);
        break;
      case themes.NO_SUPP:
      default:
        setTheme(themes.NO_SUPP);
        console.log(`current theme: ${themes.NO_SUPP}`);
        break;
    }
  };

  useEffect(() => {
    const dmjs = darkmodejs({ onChange });

    return () => {
      dmjs.removeListeners();
    };
  }, []);
  return (
    <ThemeProvider
      theme={createMuiTheme({
        palette: {
          type: "dark",
          text: {
            primary: "rgb(194,188,184)",
            secondary: "rgb(155,149,147)",
          },
          background: {
            default: "rgb(29,30,34)",
            paper: "rgb(44,47,52)",
          },
        },
      })}
    >
      {props.children}
    </ThemeProvider>
  );
}
