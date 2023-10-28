import { Film } from "../../../models/Film";
import React, { useState } from "react";
import {
  Box,
  Paper,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { ArrowDropDownCircle } from "@material-ui/icons";

interface Props {
  films: Film[];
}

const FilmsTable: React.FC<Props> = (props) => {
  const [direction, setDirection] = useState<"asc" | "desc">("asc");
  const [sortField, setSortField] = useState<"year" | "rating">("year");
  const { films } = props;
  const handleChangeArrow = (sortField: "year" | "rating") => {
    setDirection(direction === "asc" ? "desc" : "asc");
    setSortField(sortField);
    console.log(direction);
  };

  const handleSort = (a: Film, b: Film): 0 | 1 | -1 => {
    if (direction === "asc") {
      return a[sortField] === b[sortField]
        ? 0
        : a[sortField] > b[sortField]
        ? -1
        : 1;
    }
    if (direction === "desc") {
      return a[sortField] === b[sortField]
        ? 0
        : a[sortField] > b[sortField]
        ? 1
        : -1;
    }
    return 0;
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow
            sx={{
              "&>*:nth-child(n)": {
                color: "white",
                background: "#151515",
                fontWeight: "bold",
              },
            }}
          >
            <TableCell width={"50%"}>NAME</TableCell>
            <TableCell width={"25%"} onClick={() => handleChangeArrow("year")}>
              <Box sx={{ display: "flex", gap: 1, cursor: "pointer" }}>
                YEAR
                <Box
                  sx={{
                    opacity: `${sortField === "year" ? 1 : 0}`,
                    transform: `rotate(${
                      direction === "asc" ? 0 : 180
                    }deg) translateY(${direction === "asc" ? 0 : 6}px)`,
                  }}
                >
                  <ArrowDropDownCircle />
                </Box>
              </Box>
            </TableCell>
            <TableCell
              width={"25%"}
              onClick={() => handleChangeArrow("rating")}
            >
              <Box sx={{ display: "flex", gap: 1, cursor: "pointer" }}>
                RATING
                <Box
                  sx={{
                    opacity: `${sortField === "rating" ? 1 : 0}`,
                    transform: `rotate(${
                      direction === "asc" ? 0 : 180
                    }deg) translateY(${direction === "asc" ? 0 : 6}px)`,
                  }}
                >
                  <ArrowDropDownCircle />
                </Box>
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {films.sort(handleSort).map((film) => (
            <Tooltip title={film.label} arrow placement="bottom-end">
              <TableRow
                sx={{
                  "&>*:nth-child(n)": { color: "white", background: "#28282B" },
                }}
              >
                <TableCell>{film.label}</TableCell>
                <TableCell>{film.year}</TableCell>
                <TableCell>
                  <Rating
                    value={film.rating}
                    readOnly
                    precision={0.5}
                    sx={{ color: "white", stroke: "GrayText" }}
                  />
                </TableCell>
              </TableRow>
            </Tooltip>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FilmsTable;
