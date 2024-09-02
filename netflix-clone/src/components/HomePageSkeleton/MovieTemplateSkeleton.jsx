function MovieTemplateSkeleton() {
  return (
    <>
      <span className="skeleton-box ml-3 mt-4 mb-3 text-xl h-6 w-28 font-semibold"></span>
      <div className="ml-4 mt-2 flex gap-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            className="skeleton-box h-36 w-36 lg:h-48 lg:w-44"
            key={index}
          ></div>
        ))}
      </div>
    </>
  );
}

export default MovieTemplateSkeleton;
