import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import background from "../../assets/images/background.jpg";
import netflix from "../../assets/images/netflix.png";
import google_logo from "../../assets/images/GoogleLogo/google_logo.png";
import translate from "../../assets/icons/translate.png";
import { auth, provider } from "../../authentication/auth.web";
import { signInWithPopup } from "firebase/auth";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    if (verifyEmail === "test@123" && verifyPassword === "test123") {
      navigate("/home");
    }
  }

  const verifyE_mail = function () {
    setVerifyEmail(verifyEmail);
  };

  const password = function () {
    setVerifyPassword(verifyPassword);
  };

  const handleAuth = function () {
    signInWithPopup(auth, provider)
      .then((data) => {
        setEmail(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((err) => alert("Please click on continue its safe", err));
  };

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);

  useEffect(() => {
    if (email) {
      navigate("/home"); // Navigate to HomePage when email is set
    }
  }, [email, navigate]);

  return (
    <div className="overflow-x-hidden">
      <div className="relative w-full h-[500px] sm:h-[100vh]">
        <img
          src={netflix}
          alt="netflix_Logo"
          className="w-24 absolute left-5 sm:top-4 top-5 sm:left-40 sm:w-40 z-10"
        />
        <div className="absolute sm:inset-0 sm:top-[10%] text-left z-10 flex sm:items-center sm:justify-center items-start">
          <div className="flex flex-col h-[700px] w-full sm:h-[600px] sm:w-[450px] sm:bg-[rgba(4,3,2,.7)] p-6 sm:px-20 sm:py-16 mt-16 sm:mt-[150px]">
            <span className="text-[30px] text-left font-extrabold">
              Sign In
            </span>
            <form
              onSubmit={handleSubmit}
              className="text-left sm:text-center flex flex-col gap-4 mt-7"
            >
              <input
                type="text"
                placeholder="Email or mobile number"
                value={verifyE_mail}
                onChange={(e) => e.target.value}
                className="sm:w-[315px] w-[340px] h-14 border border-solid border-gray-700 placeholder:text-gray-400 bg-[rgba(0,0,0,.3)] pl-2 rounded-[4px] "
              />
              <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => e.target.value}
                className="sm:w-[315px] w-[340px] h-14 border border-solid border-gray-700 placeholder:text-gray-400 bg-[rgba(0,0,0,.3)] pl-2 rounded-[4px]"
              />
              <button
                // onClick={handleLogOut}
                onClick={handleSubmit}
                className="sm:w-[315px] w-[340px] h-11 text-center bg-[rgb(229,9,20)] rounded-[4px] text-[16px] font-[700] active:bg-red-200"
              >
                Sign In
              </button>
            </form>
            <span className="text-center text-gray-400 my-4">OR</span>
            {email ? (
              <div className="text-center text-gray-400">Redirecting...</div>
            ) : (
              <button
                onClick={handleAuth}
                className="sm:w-[315px] w-[340px] h-14 flex items-center justify-around border text-center border-gray-700 border-solid rounded-[4px] bg-white py-4 active:bg-gray-100"
              >
                <img
                  src={google_logo}
                  alt="google_logo"
                  className="h-10 sm:h-8"
                />
                <span className="text-gray-700 font-semibold">
                  Sign In With Google
                </span>
              </button>
            )}
            <span className="text-center text-gray-400 my-4">
              Forgot password?
            </span>
            <div className="flex items-center space-x-2 text-left">
              <input
                type="checkbox"
                className="bg-transparent border border-gray-300 border-solid"
              />
              <span>Remember me</span>
            </div>
            <p className="flex items-start space-x-2 text-left mt-4">
              <span className="text-gray-400">New to Netflix?</span>
              <span>
                <Link to="/">Sign up now.</Link>
              </span>
            </p>
            <p className="mt-4 text-left text-xs">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span className="text-blue-500 text-xs">Learn more.</span>
            </p>
          </div>
        </div>
        <div className="absolute top-0 w-full h-[680px] sm:h-full sm:bg-[rgba(0,0,0,.4)] bg-black z-0 "></div>
        <img
          src={background}
          alt="background"
          className="w-full h-[0] sm:h-[100vh] z-0"
        />
      </div>
      <div className="bg-black h-96 sm:py-72 sm:px-32 px-6 pt-10 mt-[179px] sm:mt-0">
        <p className="space-x-2 text-left mt-6">
          <span className="text-gray-400">Questions? Call</span>
          <span className="font-medium text-gray-400">000-800-919-1694</span>
        </p>
        <div className="grid sm:grid-rows-2 sm:grid-cols-3 grid-rows-3 grid-cols-2 gap-3 mt-4">
          <span className="underline text-gray-400">FAQ</span>
          <span className="underline text-gray-400">Help centre</span>
          <span className="underline text-gray-400">Term of Use</span>
          <span className="underline text-gray-400">Privacy</span>
          <span className="underline text-gray-400">Cookie Preferences</span>
          <span className="underline text-gray-400">Corporate Information</span>
        </div>
        <div className="h-8 w-28 rounded-md flex bg-[rgb(15,15,15,.3)] items-center justify-center border-[1.5px] border-solid border-gray mt-16">
          <img
            src={translate}
            alt="translate_icon"
            className="w-[15px] h-[15px] font-medium"
          />
          <select className="bg-transparent text-lg font-medium focus:outline-none ml-1">
            <option value="English" key="English">
              English
            </option>
            <option value="Hindi" key="Hindi" className="text-black">
              Hindi
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
