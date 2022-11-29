import React, { useState, useEffect } from "react"
import { MovieContext } from "./shared/context/MovieContext"
import Movies from "./shared/pages/Movies"
import Nav from "./shared/components/Nav"
import "./App.css"
import { Button, TextField } from "@mui/material"
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  
  const [moviesdata, setMoviesdata] = useState([])
  const [endPoint, setEndPoint] = useState('Search Movie ..')

const onChangeHandler =(e) =>{
  setEndPoint(e.target.value)
}

const submitHandler = e =>{
 e.preventDefault()
}



  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5d6c789ad9msh1dff3740d28cab1p1a2c18jsn655bfe2fabe6',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };

  useEffect(() => {
    ; (async () => {
      const res = await  fetch('https://imdb8.p.rapidapi.com/auto-complete?q='+endPoint, options)
      const data = await res.json()
      console.log(data.d);
      setMoviesdata(
        data.d.map((item) => ({
            id : item?.id,
            name: item?.l,
            rank: item?.rank,
            poster: item.i?.imageUrl,
        })),
      )
    })()
  }, [endPoint])

  return (
    <>
   
      <MovieContext.Provider
        value={{
          Movies: moviesdata,
        }}
      >
        <Nav/> 
        <div className="body">
          <form className="form" onSubmit={submitHandler}>
            <InputBase 
             sx={{ ml: 1, flex: 1 }}
             className="input" value={endPoint} onChange={onChangeHandler}/>
            <IconButton type="submit" sx={{ml:'294px', p: '15px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
          </form>
          <Movies items={moviesdata} />
        </div>
      </MovieContext.Provider>
    </>
  )
}

export default App
