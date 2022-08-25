import React, { useState, useEffect } from "react";
import { Pagination, Box, Typography, Stack } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";
const Exercises = ({ setExercises, bodyPart, exercises }) => {
  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);

  useEffect(() => {
    const fetchExercisesDataCategoryWise = async () => {
      // an array that will hold the data based on the clicked category.
      let exercisesData = [];
      // fetching the data based on bodyPart, as bodypart changes on click
      if (bodyPart == "all") {
        // fetch all exercises.
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        // fetch only those exercises matching the bodyPart
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      // finally updating exercises state value using setExercises
      setExercises(exercisesData);
    };
    fetchExercisesDataCategoryWise();
  }, [bodyPart]);

  // Pagination count
  // indexOfLastExercise counts last exercise for each page.
  // indexOfFirstExercise counts first exercise for each page.
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  // The slice() method returns selected elements in an array, as a new array. The slice() method selects from a given start, up to a (not inclusive) given end.
  // currentExercises will hold only exercises from current page.
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
    document.getElementById("exercises").scrollIntoView({
      behavior: "smooth",
    });
  };

  // console.log(exercises);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px", xs: "50px" }, p: "20px" }}>
      <Typography variant="h3" sx={{ mb: "46px", textAlign: "center" }}>
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: { lg: "110px", xs: "50px" },
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {
        currentExercises.length !== 0 ? currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        )) :
        <Loader />
      }
      </Stack>
      <Stack sx={{ mt: "100px", alignItems: "center" }}>
        {exercises.length > 9 && (
          <Pagination
            color="primary"
            variant="outlined"
            shape="rounded"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
