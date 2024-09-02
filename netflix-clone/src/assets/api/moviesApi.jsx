import { useState, useEffect } from "react";

function useMovieData() {
  const [comedyMovieData, setComedyMovieData] = useState([]);
  const [classicMovieData, setClassicMovieData] = useState([]);
  const [horrorMovieData, setHorrorMovieData] = useState([]);
  const [westernMovieData, setWesternMovieData] = useState([]);
  const [familyMovieData, setFamilyMovieData] = useState([]);
  const [mysteryMovieData, setMysteryMovieData] = useState([]);

  const API_KEY = "13d12680"; // Replace with your actual OMDB API key

  const getData = async function () {
    // Fetch comedy movies using the OMDB API
    const comedyRes = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=avenger`
    );
    const comedyMovies = await comedyRes.json();
    console.log(comedyMovies);
    setComedyMovieData(comedyMovies.Search || []);

    const classicRes = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=classic`
    );
    const classicMovies = await classicRes.json();
    setClassicMovieData(classicMovies.Search || []);

    const horrorRes = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=horror`
    );
    const horrorMovies = await horrorRes.json();
    setHorrorMovieData(horrorMovies.Search || []);

    const westernRes = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=western`
    );
    const westernMovies = await westernRes.json();
    setWesternMovieData(westernMovies.Search || []);

    const familyRes = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=family`
    );
    const familyMovies = await familyRes.json();
    setFamilyMovieData(familyMovies.Search || []);

    const mysteryRes = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=mystery`
    );
    const mysteryMovies = await mysteryRes.json();
    setMysteryMovieData(mysteryMovies.Search || []);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    comedyMovieData,
    classicMovieData,
    horrorMovieData,
    westernMovieData,
    familyMovieData,
    mysteryMovieData,
  };
}

export default useMovieData;
