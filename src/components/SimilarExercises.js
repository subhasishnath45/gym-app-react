import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  // console.log(targetMuscleExercises);
  // console.log(equipmentExercises);
  return (
    <Box>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          position: "relative",
          width: "100%",
          padding: "20px",
          mb: { lg: "100px", xs: "50px" },
        }}
        className="target-muscle-exercise-wrapper"
      >
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ): <Loader />}
      </Stack>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          equipment
        </span>{" "}
        exercises
      </Typography>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          position: "relative",
          width: "100%",
          padding: "20px",
        }}
        className="target-equipment-exercise-wrapper"
      >
        {equipmentExercises.length !== 0 ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : <Loader />}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
