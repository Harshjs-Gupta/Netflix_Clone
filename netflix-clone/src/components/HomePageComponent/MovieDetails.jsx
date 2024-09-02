import MovieList from "./MovieList";

function MovieDetails({ movieType, movieTitle }) {
  return (
    <>
      <div className="ml-3 pt-3 text-xl font-semibold">{movieTitle}</div>
      <div className="ml-4 mt-2 flex gap-2 overflow-x-hidden hover:overflow-x-auto whitespace-nowrap custom-scrollbar">
        {movieType?.map((movie) => (
          <MovieList
            id={movie.imdbId}
            imgUrl={movie.Poster || movie.posterUrl}
            movieName={movie.Title || movie.title}
            key={movie.imdbID}
          />
        ))}
      </div>
    </>
  );
}

export default MovieDetails;
