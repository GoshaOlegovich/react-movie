import React, { useState } from "react";
import MovieInfo from "./MovieInfo";
import MoviesList from "./MoviesList";

const Movies = () => {
  const [selectMovie, setSelectMovie] = useState("");

  const updateId = (data) => {
    setSelectMovie(data);
    console.log("ok" + data);
    
  };

  
  return (
    <div>
       <MovieInfo id={selectMovie} />
      <MoviesList updateId={updateId} />
     
    </div>
  );
};

export default Movies;
