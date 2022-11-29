import React from 'react'
import './MoviesCard.css'


function MovieCard({movie}) {
  return (

    <div className='card'>
      <img src={movie.poster} />
      <div className='card__info'>
        <h2>{movie.name}</h2>
        <h3>{movie.y}</h3>
        {/* <h4>Rank : {movie.rank}</h4> */}
      </div>
    </div>

  )
}
export default MovieCard