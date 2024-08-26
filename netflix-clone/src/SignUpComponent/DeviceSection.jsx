import devices from "../signUpPageImages/device-pile-in.png";

function DeviceSection() {
  return (
    <>
      <div>
        <div className="bg-black w-full h-[550px] lg:h-[500px] flex lg:flex-row flex-col lg:items-center lg:justify-center relative">
          <div className="lg:absolute lg:left-[130px] text-center lg:text-left">
            <h1 className="font-[900] text-3xl lg:text-[45px] lg:font-extrabold mt-10 lg:mt-0 ">
              Watch everywhere
            </h1>
            <p className="w-[90%] lg:w-[500px] mx-auto lg:mx-0 text-[23px] font-[400] mt-7 lg:mt-7 ">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="lg:absolute lg:right-[100px] mt-7 lg:mt-0">
            <img
              src={devices}
              alt="devices"
              className="devices_image h-[250px] lg:h-[400px] mb-10 lg:mb-10 mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
      <hr className="border-4 w-full border-gray-700 border-solid"></hr>
    </>
  );
}

export default DeviceSection;
