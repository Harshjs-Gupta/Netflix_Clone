import { useState } from "react";
import { useNavigate } from "react-router-dom";
import netflix from "../../assets/images/netflix.png";
import userProfileImage from "../../assets/userProfileImage/2.png";
import search from "../../assets/icons/search.png";
import useSearchData from "../../assets/api/searchMovieByApi";
import Movies from "../SearchMovieData/Movies";

function HomeHeader({ handleLogOut }) {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showMovies, setShowMovies] = useState(false);
  const { searchedMovie, setSearchedMovie, comingMovieData } = useSearchData();

  const onLogOut = () => {
    handleLogOut();
    navigate("/signIn");
  };

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(comingMovieData);
    if (searchedMovie) {
      setShowMovies(true);
    } else {
      setShowMovies(false);
    }
    setSearchedMovie("");
  }

  function handleSearchOpen() {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchedMovie(false);
    }
  }

  return (
    <>
      <header className="absolute flex items-center justify-between h-16 w-full mt-0 py-2 px-4 z-10">
        <img src={netflix} alt="netflix_logo" className="h-14" />
        <div className="absolute right-14 flex items-center justify-center gap-2">
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
                className="search-movies lg:w-72 w-36 h-7 bg-gray-400/50 border border-solid focus:outline-none border-white font-medium pl-3 placeholder:text-white placeholder:font-medium"
              />
            </form>
          )}
        </div>
        <div>{showMovies && <Movies comingMovieData={comingMovieData} />}</div>
        <img
          src={userProfileImage}
          alt="profile_image"
          onClick={onLogOut}
          className="h-8 cursor-pointer"
        />
      </header>
    </>
  );
}

export default HomeHeader;
