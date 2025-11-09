import { useState, useEffect } from "react";

function useMovieData() {
  const [topRatedData, setTopRatedData] = useState([]);
  const [comedyMovieData, setComedyMovieData] = useState([]);
  const [horrorMovieData, setHorrorMovieData] = useState([]);
  const [romanceMovieData, setRomanceMovieData] = useState([]);
  const [sciFiMovieData, SetSciFiMovieData] = useState([]);
  const [familyMovieData, SetFamilyMovieData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzliMzZhN2ZkOGNhYTdmZmEyOGM2MGQzZWVmNGM3OCIsIm5iZiI6MTc2MjY3MTkwOC4xMzUsInN1YiI6IjY5MTAzZDI0MTQxNmUxMTFiNmNlODY5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.amtFdG7qC1ih0UsWCyMCMpgr9PRxZHPpD5ouXuEzlkQ",
    },
  };
  /*
fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/
  const API_KEY = "d39b36a7fd8caa7ffa28c60d3eef4c78"; // Replace with your actual OMDB API key

  useEffect(() => {
    const getData = async function () {
      // Fetch comedy movies using the OMDB API

      //! Top Rated Movies
      const topRatedRes = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );
      const topRated = await topRatedRes.json();
      setTopRatedData(topRated.results || []);

      //! Comedy Movies
      const comedyRes = await fetch(
        `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=35&api_key=${API_KEY}`,
        options
      );
      const comedyMovies = await comedyRes.json();
      // console.log(comedyMovies);
      setComedyMovieData(comedyMovies.results || []);

      //!  Horror Movies
      const horrorRes = await fetch(
        `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=27&api_key=${API_KEY}`
      );
      const horrorMovies = await horrorRes.json();
      setHorrorMovieData(horrorMovies.results || []);

      //! Romance Movies
      const romanceMovieRes = await fetch(
        `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=10749&api_key=${API_KEY}`
      );
      const RomanceMovies = await romanceMovieRes.json();
      // console.log(RomanceMovies.results);
      setRomanceMovieData(RomanceMovies.results || []);

      //! Sci-Fi Movies
      const sciFiMovieRes = await fetch(
        `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=878&api_key=${API_KEY}`
      );
      const SciFiMovies = await sciFiMovieRes.json();
      SetSciFiMovieData(SciFiMovies.results || []);

      //! Family Movies
      const familyMovieRes = await fetch(
        `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=10751&api_key=${API_KEY}`
      );
      const familyMovie = await familyMovieRes.json();
      SetFamilyMovieData(familyMovie.results || []);
    };
    getData();
  }, []);

  return {
    comedyMovieData,
    topRatedData,
    horrorMovieData,
    romanceMovieData,
    sciFiMovieData,
    familyMovieData,
  };
}

export default useMovieData;
