import { useEffect, useState } from "react";

function useSearchData() {
  const [searchedMovie, setSearchedMovie] = useState(""); // Initialized as an empty string
  const [comingMovieData, setComingMovieData] = useState([]);
  const API_KEY = "13d12680";

  async function getMovieData() {
    if (!searchedMovie) return; // Only fetch data if there is a search term

    const searchMovieRes = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchedMovie}`
    );
    const movies = await searchMovieRes.json();
    setComingMovieData(movies.Search || []); // Set the movie data or an empty array if no results
    console.log(movies.Search);
  }

  useEffect(() => {
    getMovieData();
  }, [searchedMovie]);

  return { searchedMovie, setSearchedMovie, comingMovieData };
}

export default useSearchData;
