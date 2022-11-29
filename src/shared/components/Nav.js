import React, { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import AddModal from "../UIElement/AddModal"
import logoIcon from "../images/logo.png";
import icoAccount from "../images/icons/ico1.png";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(3),
  marginLeft: theme.spacing(25),
  width: '40%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(25),
    width: '40%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


function ResponsiveAppBar() {
  const [openAdd, setOpenAdd] = useState()
  const handleOpenAddModals = () => {
    setOpenAddModals(true)
  }
  const handleCloseAddModals = () => {
    setOpenAddModals(false)
  }
  const [openAddModals, setOpenAddModals] = useState(false)

  return (
    <>
      <Modal
        open={openAddModals}
        onClose={handleCloseAddModals}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {openAdd ? (
          <></>
        ) : (
          <AddModal
            closeModal={handleCloseAddModals}
          // submitHandler={submitAddHandler}
          />
        )}
      </Modal>
      <AppBar
        position="fixed"
        style={{ height: "116px", background: "#141414"}}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters style={{ height: "116px" }}>
          <img className="sidelogo" alt="logo" src={logoIcon} width="340px" />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
              </IconButton>
            </Box>
            {/* <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search> */}
            <Typography
              variant="7"
              noWrap
              color="white"
              component="a"
              fontWeight={"bold"}
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              NATHANAEL BENICHOU
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ p: 0 }}>
               <img className="sidelogo" alt="logo" src={icoAccount} width="50px" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
export default ResponsiveAppBar
