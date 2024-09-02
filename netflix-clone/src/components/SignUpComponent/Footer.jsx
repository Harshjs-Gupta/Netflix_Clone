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
    <footer className="flex flex-col text-center h-[800px] lg:h-[600px] bg-black  py-5 px-5 lg:px-10">
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
