import React, { useState, useContext } from "react"
import Box from "@mui/material/Box"
import { Button, IconButton, Stack, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import Container from "@mui/material/Container"
import { MovieContext } from "../context/MovieContext"
import TextField from "@mui/material/TextField"

const EditUserModal = (props) => {
  const [formIsValid, setFormIsValid] = useState(false)
  const userContext = useContext(MovieContext)
  const [title, setTitle] = useState(props.userToEdit.name.title)
  const [first, setFirst] = useState(props.userToEdit.name.first)
  const [last, setLast] = useState(props.userToEdit.name.last)
  const [email, setEmail] = useState(props.userToEdit.email)
  const [country, setCountry] = useState(props.userToEdit.location.country)
  const [city, setCity] = useState(props.userToEdit.location.city)
  const [street, setStreet] = useState(props.userToEdit.location.street)

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

  const userEditSubmitHandler = (event) => {
    event.preventDefault()
    const updatedUser = {
      id: props.userToEdit.id,
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
      image: props.userToEdit.image,
    }
    userContext.update(updatedUser)
    props.closeModal()
  }

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
          Edit User
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
            label="Title"
            value={title}
            onChange={titleHandler}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          ></TextField>
          <TextField
            id="first"
            value={first}
            onChange={firstHandler}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          ></TextField>
          <TextField
            id="last"
            value={last}
            onChange={lastHandler}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          ></TextField>
          <TextField
            id="email"
            value={email}
            onChange={emailHandler}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          ></TextField>
          <TextField
            id="country"
            value={country}
            onChange={countryHandler}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          ></TextField>
          <TextField
            id="city"
            value={city}
            onChange={cityHandler}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          ></TextField>
          <TextField
            id="street"
            value={street}
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
            onClick={userEditSubmitHandler}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Container>
  )
}

export default EditUserModal
