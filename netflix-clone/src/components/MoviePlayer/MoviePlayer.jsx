import React, { useEffect, useState } from "react";
import LeftArrow from "../../assets/icons/leftArrow.png";
import { useParams } from "react-router-dom";

const MoviePlayer = () => {
  const [movieVideo, setMovieVideo] = useState(null);
  const [anotherVideo, setAnotherVideo] = useState(null);
  const { id } = useParams();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzliMzZhN2ZkOGNhYTdmZmEyOGM2MGQzZWVmNGM3OCIsIm5iZiI6MTc2MjY3MTkwOC4xMzUsInN1YiI6IjY5MTAzZDI0MTQxNmUxMTFiNmNlODY5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.amtFdG7qC1ih0UsWCyMCMpgr9PRxZHPpD5ouXuEzlkQ",
    },
  };

  useEffect(() => {
    async function fetchMovieVideos() {
      const videoRes = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
      );
      const movieVideoData = await videoRes.json();
      // console.log(movieVideoData);
      setMovieVideo(movieVideoData.results[0] || []);
      setAnotherVideo(movieVideoData.results || []);
    }
    fetchMovieVideos();
  }, []);

  return (
    <section className="flex flex-col w-screen h-screen gap-4 p-3 overflow-y-scroll text-black bg-black sm:p-8 sm:flex-row custom-scrollbar">
      <div className="flex flex-col w-screen">
        <div className="flex items-center gap-3 mb-6 text-lg">
          <a
            href="/home"
            className="flex items-center justify-center border-2 border-white rounded-full cursor-pointer w-7 h-7"
          >
            <img src={LeftArrow} alt="Back arrow" className="w-5" />
          </a>
          Back
        </div>
        <iframe
          src={
            `https://www.youtube.com/embed/${movieVideo?.key}` ||
            `https://www.youtube.com/embed/5UD6i8EaLQU`
          }
          width="100%"
          height="70%"
          control="true"
          title={movieVideo?.name}
          allowFullScreen
        ></iframe>
        <h2 className="mt-4 text-3xl">{movieVideo?.name}</h2>
        <p>{movieVideo?.published_at?.slice(0, 10)}</p>
      </div>
      <div className="flex flex-col h-auto gap-3 pb-8 mt-7">
        {anotherVideo?.map((video) => (
          <div className="w-full h-auto p-4" key={video.id}>
            <div className="relative w-full pb-[56.25%]">
              <iframe
                src={
                  `https://www.youtube.com/embed/${video?.key}` ||
                  `https://www.youtube.com/embed/5UD6i8EaLQU`
                }
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                title={video?.name}
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="mt-2 text-lg">{video?.name}</h2>
            <p>{video?.published_at?.slice(0, 10)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoviePlayer;
