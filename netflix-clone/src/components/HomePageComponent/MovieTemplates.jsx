import useMovieData from "../../assets/api/moviesApi";
import MovieDetails from "./MovieDetails";

function MovieTemplates() {
  const {
    comedyMovieData,
    classicMovieData,
    horrorMovieData,
    westernMovieData,
    familyMovieData,
    mysteryMovieData,
  } = useMovieData();

  return (
    <div className="bg-black h-full">
      <MovieDetails
        movieType={comedyMovieData}
        movieTitle={"Popular on Netflix"}
      />
      <MovieDetails movieType={horrorMovieData} movieTitle={"Horror Movies"} />
      <MovieDetails
        movieType={classicMovieData}
        movieTitle={"Classic Movies"}
      />
      <MovieDetails
        movieType={westernMovieData}
        movieTitle={"Western Movies"}
      />
      <MovieDetails
        movieType={familyMovieData}
        movieTitle={"Family Friendly Movies"}
      />
      <MovieDetails
        movieType={mysteryMovieData}
        movieTitle={"Mysterious Movies"} // Corrected the typo
      />
    </div>
  );
}

export default MovieTemplates;
