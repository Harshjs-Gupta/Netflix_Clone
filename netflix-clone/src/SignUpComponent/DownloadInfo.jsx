import mobile from "../signUpPageImages/mobile-0819.jpg";
import boxshot from "../signUpPageImages/boxshot.png";
import downloadGif from "../gif/download-icon.gif";

function DownloadInfo() {
  return (
    <>
      <div>
        <div className="bg-black w-full h-[580px] lg:h-[500px] flex lg:flex-row flex-col items-center justify-center relative">
          <div className="lg:absolute lg:right-16 lg:top-26 lg:w-[600px] text-center lg:text-left">
            <h1 className="font-[900] text-3xl lg:text-[45px] lg:font-extrabold mt-10 lg:mt-7">
              Download your shows to watch offline
            </h1>
            <p className="w-[90%] lg:w-[500px] mx-auto lg:mx-0 text-[23px] font-[400] mt-7 lg:mt-5q ">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
          <div className="lg:absolute lg:left-[150px] bg-transparent mt-7 lg:mt-0 flex flex-col items-center justify-center">
            <img
              src={mobile}
              alt="mobile"
              className="mobile_image h-[250px] lg:h-[400px] mb-10 lg:mb-10 mx-auto lg:mx-0"
            />
            <div className="absolute bottom-[70px] w-56 h-16 lg:w-[295px] lg:h-24 bg-black border-[1.5px] border-solid border-gray-700 flex items-center justify-center rounded-xl py-2">
              <img
                src={boxshot}
                alt="movie_thumbnail_image"
                className="w-10 h-12 lg:w-12 lg:h-[71px] absolute left-2"
              />
              <div className="absolute left-[65px] ">
                <p className="text-sm">Stranger Things</p>
                <p className="text-[rgb(0,55,220)] text-xs lg:text-[12px]">
                  Downloading...
                </p>
              </div>
              <img
                src={downloadGif}
                alt="download_gif"
                className="w-11 h-14 absolute right-2"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[4px] border-gray-700 border-solid w-full"></hr>
    </>
  );
}

export default DownloadInfo;
