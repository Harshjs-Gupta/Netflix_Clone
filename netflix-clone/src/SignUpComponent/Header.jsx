import netflixLogo from "../signUpPageImages/netflix.png";
import translate from "../SignUpPageIcons/translate.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="navbar w-full">
      <img
        src={netflixLogo}
        alt="netflix_Logo"
        className="w-24 absolute left-5 top-5 lg:left-40 lg:w-36 z-10"
      />
      <div className="absolute right-3 top-3 lg:right-36 p-2 gap-3 flex items-center justify-center ">
        <div className=" h-8 w-28 rounded-md flex items-center justify-center border-[1.5px] border-solid border-white">
          <img
            src={translate}
            alt="translate_icon"
            className="w-[15px] h-[15px] font-medium"
          />
          <select className="bg-transparent text-lg font-medium focus:outline-none">
            <option value="English" key="English">
              English
            </option>
            <option value="Hindi" key="Hindi" className="text-black">
              Hindi
            </option>
          </select>
        </div>
        <button className="h-8 w-[70px] bg-[rgb(229,9,20)] font-medium text-lg rounded-md">
          <Link to="/home">Sign In</Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
