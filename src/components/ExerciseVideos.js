import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";
const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log(exerciseVideos);
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" }, p: "20px" }}>
      <Typography variant="h3" sx={{ mb: "33px" }}>
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "50px", xs: "0px" },
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          mb: { lg: "100px", xs: "50px" },
        }}
      >
        {
          exerciseVideos.length !== 0 ?
        exerciseVideos.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ borderRadius: "20px", objectFit: "cover" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Typography
              sx={{ fontSize: { lg: "28px", xs: "18px" } }}
              fontWeight={600}
              color="#000"
            >
              {item.video.title}
            </Typography>
            <Typography fontSize="14px" color="#000">
              {item.video.channelName}
            </Typography>
          </a>
        ))
        :
        <Loader />}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
