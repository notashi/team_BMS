import React, { useState } from 'react';
import "./All.css";


const MovieTimeSelection = (props) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  // const [isSubmit,setisSubmit]=useState(false)

  const handleClick = (movie) => {
    setSelectedMovie(movie);
    props.moviedata(movie)
    props.setisSubmit(true)
  };

  console.log(props.isSubmit+ " this is isSubmit of movieSelection")
  const movieOptions = [
    { id: 1, name: 'fast and furious 5' },
    { id: 2, name: 'Inception' },
    { id: 3, name: 'Dilwale Dulhania Le Jayenge' },
    { id: 4, name: 'chennai express' },
  ];

  

  return (
    <span className='sui'>
      <span className='cr'>
        <h2 className='' style={{borderRadius: 10}}>Select Movie</h2>
        <div className='d-flex flex-wrap gap-5 '>
          {movieOptions.map((option) => (
            <button
              key={option.id}
              className={`btn ${selectedMovie === option.name && props.isSubmit ? 'btn-danger' : 'btn-light'}`}
              style={{ borderRadius: 10}}
              onClick={() => handleClick(option.name)}>
              
              <div className='fs-4'>{option.name}</div>
            </button>
          ))}
        
        </div>
      </span>
    </span>
  
  );
};

export default MovieTimeSelection;
