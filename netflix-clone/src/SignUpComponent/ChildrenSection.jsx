import children from "../signUpPageImages/children.png";

function ChildrenSection() {
  return (
    <>
      <div>
        <div className="bg-black w-full h-[580px] lg:h-[500px] flex lg:flex-row flex-col items-center justify-center relative">
          <div className="lg:absolute lg:right-16 lg:top-26 lg:w-[600px] text-center lg:text-left">
            <h1 className="font-[900] text-3xl lg:text-[45px] lg:font-extrabold mt-10 lg:mt-7">
              Create profiles for kids
            </h1>
            <p className="w-[90%] lg:w-[500px] mx-auto lg:mx-0 text-[23px] font-[400] mt-7 lg:mt-5q ">
              Send children on adventures with their favourite characters in a
              space made just for them-free with your membership.
            </p>
          </div>
          <div className="lg:absolute lg:left-[150px] bg-transparent mt-7 lg:mt-0 flex flex-col items-center justify-center">
            <img
              src={children}
              alt="children_image"
              className="mobile_image h-[250px] lg:h-[400px] mb-10 lg:mb-10 mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
      <hr className="border-[4px] border-gray-700 border-solid w-full"></hr>
    </>
  );
}

export default ChildrenSection;
