import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
}

function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
}

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

const HorizontalScrollbar = (props) => {
  // data is the array holding all of the body parts.
  const { data, bodyPart, bodyParts, setBodyPart } = props;

  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      onWheel={onWheel}
      options={{
        ratio: 0.9,
        rootMargin: "5px",
        threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
      }}
    >
      {data.map((item, index) => {
        return (
          <Box
            key={index}
            itemId={item.id}
            title={item.id}
            sx={{
              m: "0 40px",
            }}
          >
            {bodyParts ? (
              bodyParts.length !== 0 ?
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              /> :
              <Loader />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        );
      })}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
