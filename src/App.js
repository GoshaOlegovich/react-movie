import React from "react";

import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header.jsx";
// import FavoriteMovies from "./components/movies/FavoriteMovies.jsx";
import Movies from "./components/movies/Movies.jsx";


function App() {
 
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/*" element={<Movies />} />
        {/* <Route path="/favoriteMovies" element={<FavoriteMovies />} /> */}
      </Routes>
    </div>
  );
}

export default App;
