import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import { MovieContext } from "../context/MovieContext";

const DeleteModal = (props) => {
  const userContext = useContext(MovieContext);

  const style_form = {
    paperContainer: {
      marginTop: "10%",
      borderRadius: "25px",
      boxShadow: "9px 9px 9px 3px #202020",
      backgroundColor: "#2D2D2D",
      maxWidth: 390,
      minHeight: 400,
    },
  };

  const handleClose = () => {
    props.closeModal(false);
  };

  return (
    <Container component="main" maxWidth="xs" style={style_form.paperContainer}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2 },
        }}
        noValidate
        autoComplete="off"
      >
        <IconButton onClick={handleClose}>
          <CloseIcon style={{ color: "white" }} />
        </IconButton>

        <Typography
          variant="h4"
          fontWeight="bold"
          //   textAlign={"center"}
          style={{ padding: "50px", color: "white" }}
        >
          Are you sure that you want to delete this User ?
        </Typography>
        <div>
          <Stack
            component="form"
            sx={{
              width: "100%",
              height: "100%",
            }}
            noValidate
            autoComplete="off"
            alignItems="center"
          >
            <div
              style={{
                flexDirection: "row",
                display: "flex",
              }}
            >
              <Button
                variant="outlined"
                style={{
                  borderColor: "white",
                  display: "flex",
                  marginTop: "10px",
                  marginRight: "2rem",
                  color: "white",

                }}
                onClick={handleClose}
              >
                Annuler
              </Button>
              <Button
                variant="contained"
                style={{
                  marginTop: "10px",
                  borderRadius: "8px",
                  background: "linear-gradient(to right bottom, #C30772, #615EE0)",
                  fontSize: "17px",

                }}
                onClick={(e) => props.submitHandler(e)}
              >
                YES
              </Button>
            </div>
          </Stack>
        </div>
      </Box>
    </Container>
  );
};

export default DeleteModal;
