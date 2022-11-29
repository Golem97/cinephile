import React, { useState, useContext } from "react"
import Box from "@mui/material/Box"
import { Button, IconButton, Stack, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import Container from "@mui/material/Container"
import { MovieContext } from "../context/MovieContext"
import TextField from "@mui/material/TextField"
import { v4 as uuidv4 } from "uuid"

const AddModal = (props) => {
  const style_form = {
    paperContainer: {
      padding: "20px",
      marginTop: 13,
      borderRadius: "25px",
      boxShadow: "9px 9px 9px 3px #202020",
      backgroundColor: "#2D2D2D",
      maxWidth: 540,
      minHeight: 200,
    },
  }

  const handleClose = () => {
    props.closeModal(false)
  }
  const userContext = useContext(MovieContext)

  const [title, setTitle] = useState("")
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [street, setStreet] = useState("")

  const titleHandler = (event) => {
    setTitle(event.target.value)
  }
  const firstHandler = (event) => {
    setFirst(event.target.value)
  }
  const lastHandler = (event) => {
    setLast(event.target.value)
  }
  const emailHandler = (event) => {
    setEmail(event.target.value)
  }
  const countryHandler = (event) => {
    setCountry(event.target.value)
  }
  const cityHandler = (event) => {
    setCity(event.target.value)
  }
  const streetHandler = (event) => {
    setStreet(event.target.value)
  }

  const userAddSubmitHandler = (event) => {
    event.preventDefault()
    const newUser = {
      id: uuidv4(),
      name: {
        title: title,
        first: first,
        last: last,
      },
      email: email,
      location: {
        country: country,
        city: city,
        street: street,
      },
      image: "https://www.w3schools.com/howto/img_avatar.png",
    }
    userContext.add(newUser)
    props.closeModal()
  }

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
          variant="h5"
          fontWeight="bold"
          style={{ padding: "20px", color: "white" }}
        >
          New User
        </Typography>
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
          <TextField
            id="title"
            placeholder="Title*"
            onChange={titleHandler}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          ></TextField>
          <TextField
            id="first"
            placeholder="First*"
            onChange={firstHandler}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          ></TextField>
          <TextField
            id="last"
            placeholder="LastName*"
            onChange={lastHandler}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          ></TextField>
          <TextField
            id="email"
            placeholder="Email*"
            onChange={emailHandler}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          ></TextField>
          <TextField
            id="country"
            placeholder="Country*"
            onChange={countryHandler}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          ></TextField>
          <TextField
            id="city"
            placeholder="City*"
            onChange={cityHandler}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          ></TextField>
          <TextField
            id="street"
            placeholder="Street*"
            onChange={streetHandler}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          ></TextField>
          <Button
            // disabled={!formIsValid}
            variant="contained"
            style={{
              marginTop: "10px",
              borderRadius: "8px",
              background: "linear-gradient(to right bottom, #C30772, #615EE0)",
              fontSize: "17px",
            }}
            onClick={userAddSubmitHandler}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Container>
  )
}

export default AddModal
