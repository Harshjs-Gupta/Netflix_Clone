import { useEffect, useState } from "react";

function useSearchData() {
  const [searchedMovie, setSearchedMovie] = useState("");
  const [comingMovieData, setComingMovieData] = useState([]);
  const API_KEY = "d39b36a7fd8caa7ffa28c60d3eef4c78";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzliMzZhN2ZkOGNhYTdmZmEyOGM2MGQzZWVmNGM3OCIsIm5iZiI6MTc2MjY3MTkwOC4xMzUsInN1YiI6IjY5MTAzZDI0MTQxNmUxMTFiNmNlODY5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.amtFdG7qC1ih0UsWCyMCMpgr9PRxZHPpD5ouXuEzlkQ",
    },
  };

  useEffect(() => {
    // Only proceed if there's a search term
    if (!searchedMovie) {
      setComingMovieData([]);
      return;
    }

    // Debounce timer - waits 500ms after user stops typing
    const debounceTimer = setTimeout(async () => {
      const searchMovieRes = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchedMovie}`,
        options
      );
      const movies = await searchMovieRes.json();
      setComingMovieData(movies.results || []);
      // console.log(movies.results);
    }, 500);

    // Cleanup function - clears the timer if searchedMovie changes before 500ms
    return () => clearTimeout(debounceTimer);
  }, [searchedMovie, options]);

  return { searchedMovie, setSearchedMovie, comingMovieData };
}

export default useSearchData;
