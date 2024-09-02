function MovieList({ id, imgUrl, movieName }) {
  return (
    <div className="flex-none ml-2">
      <img
        src={imgUrl}
        alt="movie"
        className="cursor-pointer h-36 lg:h-[180px] w-[130px] object-cover"
      />
    </div>
  );
}

export default MovieList;
