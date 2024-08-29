import goForward from "../../assets/icons/rightArrow.png";
import translate from "../../assets/icons/translate.png";

const helpDetails = [
  "FAQ",
  "Help Centre",
  "Account",
  "Media Centre",
  "Investor Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
  "Contact Us",
  "Speed Test",
  "Legal Notices",
  "Only on Netflix",
];

function Footer() {
  return (
    <footer className="flex flex-col text-center h-[1000px] bg-black  py-5 px-5 lg:px-10">
      <div className="text-left">
        <p className="text-[15px] mt-3">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="flex flex-col lg:flex-row text-left mt-4 ">
          <input
            type="text"
            className="w-80 h-10 lg:h-[52px] rounded-[4px] lg:w-[720px] bg-[rgb(15,15,15,.3)] p-3 lg:p-3 border border-solid border-stone-400 placeholder:font-medium placeholder:text-gray-400"
            placeholder="Email address"
          />
          <div className="cursor-pointer mt-4 lg:mt-0 bg-[rgb(229,9,20)] rounded-[4px] h-10 w-32 flex items-center  justify-between text-left lg:w-[195px] lg:h-[52px] p-3 lg:p-3 ml-0 lg:ml-4">
            <button className="text-[16px] lg:text-[23px] lg:font-[600]">
              Get Started
            </button>
            <img
              src={goForward}
              alt="goForward"
              className="h-6 lg:h-[23px] lg:font-[600] ml-[10px] lg:ml-[15px]"
            />
          </div>
        </form>
      </div>
      <p className="space-x-2 text-left mt-6 ml-5">
        <span className="text-gray-400">Questions? Call</span>
        <span className="underline font-medium text-gray-400">
          000-800-919-1694
        </span>
      </p>
      <div className="lg:grid lg:grid-cols-4 lg:grid-rows-4 flex flex-col items-start gap-3 mt-9 ml-5 text-left">
        {helpDetails.map((item) => (
          <Help detail={item} key={item} />
        ))}
      </div>
      <div className="text-left mt-9 ml-5">
        <div className="h-8 w-28 rounded-md flex bg-[rgb(15,15,15,.3)] items-center justify-center border-[1.5px] border-solid border-gray">
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
      <span className="text-left mt-9 ml-5 text-gray-400">Netflix India</span>
    </footer>
  );
}

export default Footer;

function Help({ detail }) {
  return <span className="underline text-gray-400 text-[15px]">{detail}</span>;
}
