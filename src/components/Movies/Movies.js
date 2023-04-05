import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import data from "../../utils/constants/data";

import { useState} from "react";
import {nanoid} from "react";

function Movies() {

  const  [movies, setMovies] = useState(data);

  function handleClick () {
    const newFilm = {
      id : nanoid(),
      year : "Jigsaw",
      type: "movie",
      poster: "https://picsum.photos/300/400",
     };

    setMovies([...movies, newFilm]);
  }

  return (
    <div>
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
        {

        }
        {movies.map((movie)=> {
          return <Movie key={movie.id} movie={movie} />;
        })}
          
        </div>
        {

        }
        <button onClick={handleClick}> Add Movie</button>
      </section>
      </div>
    </div>
  );
}

export default Movies;
