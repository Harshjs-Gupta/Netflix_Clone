import background from "../signUpPageImages/background.jpg";
import goForward from "../SignUpPageIcons/rightArrow.png";

function Banner() {
  return (
    <>
      <div className="relative w-full h-[500px] lg:h-[100vh] overflow-hidden">
        <div className="absolute inset-0 top-[10%] flex items-center justify-center z-10">
          <div className="text-center">
            <h1 className="font-bold text-[30px] lg:text-[45px] lg:font-extrabold">
              Unlimited movies, TV shows and more
            </h1>
            <h2 className="text-[21px] lg:text-2xl mt-3">
              Watch anywhere. Cancel anytime.
            </h2>
            <p className="text-[21px] lg:text-2xl mt-3">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form className="lg:flex lg:flex-row flex flex-col items-center justify-center mt-4">
              <input
                type="text"
                className="w-80 h-10 lg:h-[52px] rounded-[4px] lg:w-[345px] bg-[rgba(0,0,0,.4)] p-3 lg:p-3 border border-solid border-stone-400 placeholder:font-medium placeholder:text-gray-300"
                placeholder="Email address"
              />
              <div className="cursor-pointer mt-4 lg:mt-0 bg-[rgb(229,9,20)] rounded-[4px] h-10 w-32 flex items-center  justify-center lg:w-[195px] lg:h-[52px] p-3 lg:p-3 ml-2 lg:ml-4">
                <button className="text-sm lg:text-[23px] lg:font-[600]">
                  Get Started
                </button>
                <img
                  src={goForward}
                  alt="goForward"
                  className="h-4 w-4 lg:h-[23px] lg:w-[23px] lg:font-[600] ml-2 lg:ml-[15px]"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="shadow bg-[rgba(0,0,0,.5)] absolute top-0 w-full h-[500px] lg:h-full"></div>
        <img
          src={background}
          alt="background"
          className="w-full h-[500px] lg:h-[100vh] z-0"
        />
      </div>
      <hr className="border-4 w-full border-solid border-gray-700"></hr>
    </>
  );
}

export default Banner;
