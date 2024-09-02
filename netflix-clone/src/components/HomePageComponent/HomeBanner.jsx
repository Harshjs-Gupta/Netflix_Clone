import background from "../../assets/images/homeBackground/background.jpg";
import netflixLogo from "../../assets/images/netflixLogo.png";
import add from "../../assets/icons/open.png";
import play from "../../assets/icons/play.png";

function HomeBanner() {
  return (
    <div className="relative w-full h-[450px] lg:h-[500px] overflow-hidden">
      <div className="absolute top-20 lg:top-40 left-1">
        <div className="flex gap-[0.5px] items-center">
          <img src={netflixLogo} alt="netflix_logo" className="h-6 lg:h-8" />
          <span className="uppercase tracking-widest font-semibold">
            Series
          </span>
        </div>
        <div className="flex flex-col mt-3 ml-3 w-[200px] ">
          <span className="uppercase text-4xl font-semibold font-basker">
            Stranger
          </span>
          <span className="uppercase text-4xl font-semibold font-basker text-center">
            Things
          </span>
        </div>
        <p className="w-80 lg:w-[550px] text-xl mt-5 ml-3">
          When a young buy vanishes, a small town uncovers a mystery involving
          secret experiments terrifying supernatural forces and a strange little
          girl.
        </p>
        <div className="flex gap-2 mt-4 ml-3">
          <button className="flex items-center justify-center gap-2 h-10 bg-white active:bg-gray-200/50 rounded-sm p-3 cursor-pointer">
            <img src={play} alt="playIcon" className="h-8 text-black" />
            <span className="font-semibold text-black">Play</span>
          </button>
          <button className="flex items-center justify-center gap-2 h-10 bg-gray-400/50 rounded-sm p-3 cursor-pointer active:bg-gray-400/100">
            <img src={add} alt="addIcon" className="h-8" />
            <span className="font-semibold">My List</span>
          </button>
        </div>
      </div>

      <div className="absolute top-0 w-full h-[450px] lg:h-[500px] shadow-inner-bottom"></div>
      <img
        src={background}
        alt="background"
        className="w-full h-[450px] lg:h-[500px] z-0"
      />
    </div>
  );
}

export default HomeBanner;
