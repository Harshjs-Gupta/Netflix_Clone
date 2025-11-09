import useMovieData from "../../api/moviesApi";
import MovieDetails from "./MovieDetails";

function MovieTemplates() {
  const {
    comedyMovieData,
    topRatedData,
    horrorMovieData,
    romanceMovieData,
    sciFiMovieData,
    familyMovieData,
  } = useMovieData();

  return (
    <div className="h-full bg-black">
      <MovieDetails movieType={topRatedData} movieTitle={"Top Rated Movies"} />
      <MovieDetails
        movieType={romanceMovieData}
        movieTitle={"Romance Movies"}
      />
      <MovieDetails movieType={comedyMovieData} movieTitle={"Comedy Movies"} />
      <MovieDetails movieType={horrorMovieData} movieTitle={"Horror Movies"} />
      <MovieDetails movieType={sciFiMovieData} movieTitle={"Sci-Fi"} />
      <MovieDetails
        movieType={familyMovieData}
        movieTitle={"Family Friendly Movies"}
      />
    </div>
  );
}

export default MovieTemplates;
