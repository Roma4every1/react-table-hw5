import React from "react";
import { Box } from "@mui/material";
import FilmsTable from "./filmsTable/filmsTable";
import { Form } from "../form/form";
import { useAppSelector } from "../../store/store";

const Films: React.FC = (props) => {
  const { films } = useAppSelector((state) => state);
  const myFilms = films.slice();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Form />
      <FilmsTable films={myFilms} />
    </Box>
  );
};

export default Films;
