import React, { useState } from "react";
import { Routes, Route } from "react-router";
import MovieInfo from "./MovieInfo";
import MoviesList from "./MoviesList";

const Movies = () => {
  
  const [selectMovie, setSelectMovie] = useState("");

  const updateId = (data) => {
    setSelectMovie(data);
  };

  return (
    <div>
      <Routes>
        <Route
          path={`movie/${selectMovie}`}
          element={<MovieInfo id={selectMovie} />}
        />
        <Route path="/*" element={<MoviesList updateId={updateId}/>} />
      </Routes>
    </div>
  );
};

export default Movies;
