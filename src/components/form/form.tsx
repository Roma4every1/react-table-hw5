import {Box, Modal, Rating, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from "@mui/material";
import React, { useState } from "react";
import { FormButton } from "../button/button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setFilms } from "../../store/reducers/filmReducer/actions";
export type Film = {
  label: string;
  year: number;
  rating: number;
};

const years = Array.from(
  new Array(126),
  (val, index) => index + 1900
).reverse();

export const Form: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const { films } = useAppSelector((state) => state);
  const [value, setValue] = useState<Film>({ label: "", year: 0, rating: 0 });
  const [newFilm, setNewFilm] = useState<Film>({ label: "", year: 0, rating: 0 });
  const [open, setOpen] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenDialog(false);
  };
  const handleAddFilm = () => {
    if (value.label && value.rating && value.year) {
      dispatch(setFilms([...films, value]));
      setNewFilm(value);
      handleClose();
      setOpenDialog(true);
      setValue({ label: "", year: 0, rating: 0 });
    }
  };

  return (
    <>
      <Button
        variant="outlined"
        size="large"
        sx={{
          height: "3rem",
          borderRadius: "0",
          fontWeight: "bold",
          "&:hover": {
            background: "#599ee2",
            color: "white",
            transition: "1s",
          },
        }}
        onClick={handleOpen}
      >
        + Add Film
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "30rem",
            border: "3px solid #28282B",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem auto",
            gap: "1rem",
            paddingBottom: "1rem",
            background: "#f4f6f7",
          }}
        >
          <h2>Add Film</h2>
          <TextField
            label={"Name"}
            value={value.label}
            onChange={(e) => setValue({ ...value, label: e.target.value })}
          />
          <Autocomplete
            options={years}
            onInputChange={(e, newValue) =>
              setValue({ ...value, year: +newValue })
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Year"
                variant="outlined"
                value={value.year}
                sx={{ minWidth: "14rem" }}
                onChange={(e) => setValue({ ...value, year: +e.target.value })}
              />
            )}
          />
          <Typography>Your rate:</Typography>
          <Rating
            sx={{ color: "#1976d2" }}
            name="Yr rate"
            size="large"
            value={value.rating}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue({ ...value, rating: newValue! });
            }}
          />
          <FormButton onClick={handleAddFilm}>Add</FormButton>
        </Box>
      </Modal>
      <Dialog
        open={openDialog}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>"New movie added!"</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {`Фильм ${newFilm.label} выпущен в ${newFilm.year} году.`}
          </DialogContentText>
          <DialogContentText>{`Оценка: ${newFilm.rating}/5.`}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK!</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
