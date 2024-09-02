function BannerSkeleton() {
  return (
    <div className="relative w-full h-[450px] lg:h-[500px] overflow-hidden">
      <div className="absolute top-20 lg:top-40 left-1">
        <div className="flex gap-[0.5px] items-center">
          <div className="skeleton-box h-6 w-6 lg:h-8"></div>
          <span className="skeleton-box h-6 w-14"></span>
        </div>
        <div className="skeleton-box flex flex-col mt-3 ml-3 h-24 w-[200px] ">
          <span className="uppercase text-4xl font-semibold font-basker"></span>
          <span className=" text-center"></span>
        </div>
        <p className="skeleton-box w-80 lg:w-[550px] text-xl mt-5 ml-3"></p>
        <div className="flex gap-2 mt-4 ml-3">
          <button className="skeleton-box flex items-center justify-center gap-2 h-10 w-[80px] bg-white active:bg-gray-200/50 rounded-sm p-3 cursor-pointer"></button>
          <button className="skeleton-box flex items-center justify-center gap-2 h-10 w-[80px] bg-gray-400/50 rounded-sm p-3 cursor-pointer active:bg-gray-400/100"></button>
        </div>
      </div>

      <div className="skeleton-box w-full h-[450px] lg:h-[500px] z-0 bg-gray-200/50"></div>
    </div>
  );
}

export default BannerSkeleton;
