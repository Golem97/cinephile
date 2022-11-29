import React from 'react';
import MovieCard from '../components/MovieCard';
import LoadingSpinner from '../UIElement/LoadingSpinner';
import './Movies.css';


const Movies = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <LoadingSpinner/>
        <h2>No Movies found.</h2>
      </div>
    );
  }

  return (
      <>
        <div className="movies_section" >
                {props.items.map(movie => (
                <MovieCard
                movie={movie}
                />
            ))}
        </div>
      
      </>
  );
};

export default Movies;
