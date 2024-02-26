import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 2));
  const res = await fetch(API_URL);
  return await res.json();
};

export default async () => {
  const movies = await getMovies();
  // console.table(movies);
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
};
