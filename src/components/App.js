import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

const theme = createTheme({
  typography: {
    fontFamily: ["Lato"].join(","),

    fontSize: 16,

    button: {
      textTransform: "none",
    },
  },

  input: {
    color: "white",
  },

  palette: {
    primary: {
      main: "#24248f",
    },

    secondary: {
      main: "#cc9900",
    },

    tertiary: {
      main: "#004d00",
    },

    black: {
      main: "#0d0d0d",
      light: "#404040",
      gray: "#595959",
    },

    background: {
      main: "#e6e6e6",
      secondary: "#262626",
      tertiary: "#404040",
      transparent: "#ffffff00",
      white: "#ffffff",
    },

    text: {
      white: "#ffffff",
      gray: "#bfbfbf",
      darkgray: "#808080",
    },
  },
});
