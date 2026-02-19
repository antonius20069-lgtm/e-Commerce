/// mui
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//
// import main from './main.css'
//component
import { Outlet } from "react-router-dom";
import Header from "../../COMPONENTS/header/Header";
import Footer from "../../COMPONENTS/header/Footer/footer";
///
import { useState } from "react";

import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    ant: {
      back: string;
      tex: string;
      to: string;
    };
  }
}
export default function Main() {
  //

  const [mode, setmodee] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light",
  );

  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
           background: {
            default: "#d1c4e9", 
            paper: "#ffffff",},

            ant: {
              back: "#301b70",
              tex: "#4527a0",
              to: "#6a52b3",
            },
          }
        : {
          
            ant: {
              back: "#093170",
              tex: "#0d47a1",
              to: "#3d6bb3",
            },
          }),
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <React.Fragment>
        <CssBaseline />
        <Container
          sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        >
          <Header mode={mode} setMode={setmodee} />
          <div style={{ flex: "1", marginTop: "30px" }}>
<Outlet />

          </div>
          <Footer />
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}
