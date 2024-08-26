import Tv from "../signUpPageImages/tv.png";

function TvSection() {
  return (
    <>
      <div>
        <div className="bg-black w-full h-[580px] lg:h-[500px] flex lg:flex-row flex-col lg:items-center lg:justify-center relative">
          <div className="lg:absolute lg:left-[130px] text-center lg:text-left">
            <h1 className="font-[900] text-3xl lg:text-[45px] lg:font-extrabold mt-10 lg:mt-0 ">
              Enjoy on your TV
            </h1>
            <p className="w-[90%] lg:w-[500px] mx-auto lg:mx-0 text-[23px] font-[400] mt-7 lg:mt-7 ">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className="lg:absolute lg:right-[100px] mt-7 lg:mt-0">
            <img
              src={Tv}
              alt="Tv"
              className="tv_image h-[250px] lg:h-[400px] mb-10 lg:mb-10 mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
      <hr className="border-4 w-full border-gray-700 border-solid"></hr>
    </>
  );
}

export default TvSection;
