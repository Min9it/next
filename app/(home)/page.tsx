import Link from "next/link";

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
    <div>
      <div>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </div>
    </div>
  );
};
