import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: { sm: "122px", xs: "40px" }, mt: { sm: "32px", xs: "20px" } }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          style={{
            width: "48px",
            height: "48px",
            margin: "0 20px",
            color: "#3A1212",
          }}
        />
      </Link>
      <Stack direction="row" gap="40px">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            borderBottom: "3px solid #ff2625",
            color: "#3A1212",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
