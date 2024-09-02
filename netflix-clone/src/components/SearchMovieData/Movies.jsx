function Movies({ comingMovieData }) {
  return (
    <div className="absolute z-5 top-[55px] right-7 flex h-[420px] w-[300px] bg-black py-3 px-2">
      <div className="flex flex-col gap-4 hover:overflow-y-scroll overflow-hidden custom-scrollbar">
        {comingMovieData &&
          comingMovieData.map((movie) => (
            <div className="flex gap-2 z-50">
              <img
                src={movie.Poster}
                alt="movie"
                className="cursor-pointer h-30 lg:h-[140px] w-[90px] object-cover ml-4"
              />
              <div className="flex flex-col">
                <span className="font-medium ml-2 ">{movie.Title}</span>
                <span className="font-medium ml-2 ">{movie.Year}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Movies;
