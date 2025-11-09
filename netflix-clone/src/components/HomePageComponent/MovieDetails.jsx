import { Link } from "react-router-dom";
import MovieList from "./MovieList";
import { useParams } from "react-router-dom";

function MovieDetails({ movieType, movieTitle }) {
  const { id } = useParams();
  // console.log(movieType);
  return (
    <>
      <div className="pt-3 ml-3 text-xl font-semibold">{movieTitle}</div>
      <div className="flex gap-2 mt-2 ml-4 overflow-x-hidden hover:overflow-x-auto whitespace-nowrap custom-scrollbar">
        {movieType?.map((movie) => (
          <Link
            to={`/movie-player/${movie.id}`}
            className="flex-none ml-2"
            key={movie.id}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="cursor-pointer h-36 lg:h-[180px] w-[130px] object-cover"
            />
            <p className="mt-2 text-sm text-center w-[130px] overflow-hidden text-ellipsis whitespace-nowrap">
              {movie.title || movie.name}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default MovieDetails;
