import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      // exercisesCategoryData will hold array of categories.
      const exercisesCategoryData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      // console.log(exercisesCategoryData);
      // using spread operator creating a new array.
      // setting up new value for bodyparts state.
      // console.log(["all", ...exercisesCategoryData]);
      setBodyParts(["all", ...exercisesCategoryData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      // console.log(exercisesData);
      // exercisesData is an array of objects.
      const searchedExercises = await exercisesData.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
        );
      });
      setSearch("");
      // Updating exercises state value from this component.
      setExercises(searchedExercises);
      // console.log(searchedExercises);
      document.getElementById("exercises").scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
          mb: "50px",
          textAlign: "center",
        }}
      >
        Awesome Exercises You <br />
        Should Know.
      </Typography>
      <Box position="relative" mb="72px" sx={{ mx: "auto", display: "flex" }}>
        <TextField
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          type="text"
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "40px 0",
            },
            width: { lg: "700px", xs: "auto", sm: "350px" },
            backgroundColor: "white",
            borderRadius: "40px",
          }}
        />
        <Button
          className="search-btn"
          variant="outlined"
          sx={{
            backgroundColor: "#ff2625",
            borderColor: "#ff2625",
            textTransform: "none",
            color: "#ffffff",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
