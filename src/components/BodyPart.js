import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  const handleCategoryClick = () => {
    // to highlight the category that clicked on.
    setBodyPart(item);

    // scroll to exercises section.
    document.getElementById("exercises").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Stack
      type="button"
      direction="column"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart == item ? "4px solid #ff2625" : "none",
        backgroundColor: "#ffffff",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={handleCategoryClick}
    >
      <img
        src={Icon}
        alt="Gym Logo"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#3a1212",
          textTransform: "capitalize",
        }}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
