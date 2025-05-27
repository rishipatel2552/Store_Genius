import React from "react";
import { Box } from "@mui/material";
import logo from '../img/7e-logo-color.svg';

export default function Header() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 3, alignItems: "center", justifyContent: "center" }}>
      <img src={logo} alt="7-Eleven" style={{ height: 52, marginBottom: 4, backgroundColor: "White" }} />
      <h1 style={{
        margin: 0,
        fontSize: "1.5rem",
        fontWeight: 700,
        color: "#000",
        letterSpacing: 1,
      }}>
        7-Eleven Store Genius
      </h1>
    </Box>
  );
}
