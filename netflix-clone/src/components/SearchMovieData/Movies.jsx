import { Link } from "react-router-dom";
import HomeHeader from "../HomePageComponent/HomeHeader";
import { useParams } from "react-router-dom";

function Movies({ comingMovieData }) {
  const { id } = useParams();
  return (
    <>
      {comingMovieData && (
        <div
          className={`${
            comingMovieData.length > 0 ? "block" : "hidden"
          } absolute z-5 top-[55px] right-7 flex h-[350px] w-[200px]  lg:h-[420px] lg:w-[300px] bg-black py-3 px-2`}
          key={comingMovieData.id}
        >
          <div className="flex flex-col gap-4 overflow-hidden hover:overflow-y-scroll custom-scrollbar">
            {comingMovieData &&
              comingMovieData.map((movie) => (
                <Link
                  to={`/movie-player/${movie.id}`}
                  className="z-50 flex gap-2"
                  key={movie.id}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path} || ${movie.posterUrl}`}
                    alt="movie"
                    className="cursor-pointer h-[80px] w-[50px] lg:h-[140px] lg:w-[90px] object-cover ml-4"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium ml-2 text-sm lg:text-[18px]">
                      {movie.title}
                    </span>
                    <span className="font-medium ml-2 text-sm lg:text-[18px]">
                      {movie.release_date}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Movies;
