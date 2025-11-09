import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import netflix from "../../assets/images/netflix.png";
import userProfileImage from "../../assets/userProfileImage/2.png";
import search from "../../assets/icons/search.png";
import useSearchData from "../../api/searchMovieByApi";
import Movies from "../SearchMovieData/Movies";

function HomeHeader() {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showMovies, setShowMovies] = useState(false);
  const { searchedMovie, setSearchedMovie, comingMovieData } = useSearchData();
  const [isScrolled, setIsScrolled] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(comingMovieData);
    if (searchedMovie) {
      setShowMovies(true);
    } else if (isSearchOpen === false) {
      setSearchedMovie(!searchedMovie);
    }
    setSearchedMovie("");
  }

  function handleSearchOpen() {
    setIsSearchOpen(!isSearchOpen);
  }

  function handleLogOut() {
    localStorage.clear();
    navigate("/signIn");
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`${
          isScrolled && "bg-[#000000c8] transition"
        } fixed z-20 flex items-center justify-between w-full h-16 px-4 py-2 mt-0`}
      >
        <img src={netflix} alt="netflix_logo" className="h-14" />
        <div className="absolute flex items-center justify-center gap-2 right-14">
          <img
            src={search}
            alt="search_icon"
            className="h-8 cursor-pointer"
            onClick={handleSearchOpen}
          />
          {isSearchOpen && (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search movies..."
                value={searchedMovie}
                onChange={(e) => setSearchedMovie(e.target.value)}
                className="pl-3 font-medium border border-white border-solid search-movies lg:w-72 w-36 h-7 bg-gray-400/50 focus:outline-none placeholder:text-white placeholder:font-medium"
              />
            </form>
          )}
        </div>
        {comingMovieData ? <Movies comingMovieData={comingMovieData} /> : <></>}
        <img
          src={userProfileImage}
          alt="profile_image"
          onClick={handleLogOut}
          className="h-8 cursor-pointer"
        />
      </nav>
      {/* <span className="text-[#00000069]">Hello</span> */}
      {showMovies}
    </>
  );
}

export default HomeHeader;
