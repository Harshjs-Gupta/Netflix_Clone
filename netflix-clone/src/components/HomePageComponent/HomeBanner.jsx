import { useEffect, useState } from "react";
import netflixLogo from "../../assets/images/netflixLogo.png";
import add from "../../assets/icons/open.png";
import play from "../../assets/icons/play.png";
import { Link } from "react-router-dom";

function HomeBanner() {
  const [homeScreenMovie, setHomeScreenMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzliMzZhN2ZkOGNhYTdmZmEyOGM2MGQzZWVmNGM3OCIsIm5iZiI6MTc2MjY3MTkwOC4xMzUsInN1YiI6IjY5MTAzZDI0MTQxNmUxMTFiNmNlODY5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.amtFdG7qC1ih0UsWCyMCMpgr9PRxZHPpD5ouXuEzlkQ",
    },
  };

  useEffect(() => {
    async function getHomeScreenMovie() {
      try {
        setLoading(true);
        const searchMovieRes = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
          options
        );
        const movies = await searchMovieRes.json();

        if (movies.results && movies.results.length > 0) {
          // Get a random movie from results
          const randomIndex = Math.floor(Math.random() * movies.results.length);
          const movie = movies.results[randomIndex];
          setHomeScreenMovie(movie);
        }
      } catch (error) {
        console.error("Error fetching movie:", error);
      } finally {
        setLoading(false);
      }
    }

    getHomeScreenMovie();
  }, []);

  // Truncate overview to specified length
  const truncateText = (text, maxLength) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  if (loading) {
    return (
      <div className="relative w-full h-[450px] lg:h-[500px] overflow-hidden bg-black flex items-center justify-center">
        <div className="text-xl text-white">Loading...</div>
      </div>
    );
  }

  if (!homeScreenMovie) {
    return (
      <div className="relative w-full h-[450px] lg:h-[500px] overflow-hidden bg-black flex items-center justify-center">
        <div className="text-xl text-white">No movie found</div>
      </div>
    );
  }

  const backdropUrl = homeScreenMovie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${homeScreenMovie.backdrop_path}`
    : "";

  return (
    <div className="relative w-full h-[450px] lg:h-[500px] overflow-hidden">
      <div className="absolute z-10 top-20 lg:top-40 left-1">
        <div className="flex gap-[0.5px] items-center">
          <img src={netflixLogo} alt="netflix_logo" className="h-6 lg:h-8" />
          <span className="font-semibold tracking-widest uppercase">Movie</span>
        </div>

        <div className="flex flex-col mt-3 ml-3 w-[200px] lg:w-[400px]">
          <h1 className="text-3xl font-bold uppercase lg:text-4xl font-basker drop-shadow-lg">
            {homeScreenMovie.title}
          </h1>
        </div>

        <div className="flex items-center gap-3 mt-3 ml-3">
          <span className="font-semibold text-green-400">
            {Math.round(homeScreenMovie.vote_average * 10)}% Match
          </span>
          <span className="text-gray-300">
            {homeScreenMovie.release_date?.split("-")[0]}
          </span>
        </div>

        <p className="w-80 lg:w-[550px] text-base lg:text-lg mt-4 ml-3 drop-shadow-md">
          {truncateText(homeScreenMovie.overview, 200)}
        </p>

        <div className="flex gap-2 mt-4 ml-3">
          <Link
            to={`/movie-player/${homeScreenMovie.id}`}
            className="flex items-center justify-center h-10 gap-2 p-3 transition-colors bg-white rounded-sm cursor-pointer hover:bg-gray-200 active:bg-gray-300"
          >
            <img src={play} alt="playIcon" className="h-8 text-black" />
            <span className="font-semibold text-black">Play</span>
          </Link>
          <button className="flex items-center justify-center h-10 gap-2 p-3 transition-colors rounded-sm cursor-pointer bg-gray-400/50 hover:bg-gray-400/70 active:bg-gray-400/100">
            <img src={add} alt="addIcon" className="h-8" />
            <span className="font-semibold">My List</span>
          </button>
        </div>
      </div>

      <div className="absolute top-0 w-full h-[450px] lg:h-[500px] shadow-inner-bottom bg-gradient-to-r from-black via-black/50 to-transparent"></div>

      {backdropUrl ? (
        <img
          src={backdropUrl}
          alt={homeScreenMovie.title}
          className="w-full h-[450px] lg:h-[500px] object-cover"
        />
      ) : (
        <div className="w-full h-[450px] lg:h-[500px] bg-gray-800"></div>
      )}
    </div>
  );
}

export default HomeBanner;
