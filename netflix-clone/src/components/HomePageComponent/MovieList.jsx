import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MovieList({ movieId, imgUrl, movieName }) {
  const { id } = useParams();
  return (
    <Link to={`/movie-player/${movieId}`} className="flex-none ml-2" key={id}>
      <img
        src={imgUrl}
        alt="movie"
        className="cursor-pointer h-36 lg:h-[180px] w-[130px] object-cover"
      />
      <p className="mt-2 text-sm text-center w-[130px] overflow-hidden text-ellipsis whitespace-nowrap">
        {movieName}
      </p>
    </Link>
  );
}

export default MovieList;
