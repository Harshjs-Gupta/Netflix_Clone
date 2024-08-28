import { useState } from "react";
import Close from "../../assets/icons/close.png";
import Open from "../../assets/icons/open.png";

function AnswerComponent({ question, answer1, answer2 = "", onToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
    onToggle();
  }

  return (
    <>
      <div
        className="bg-[rgb(45,45,45)] mt-2 w-80 h-20 lg:w-[855px] lg:h-[80px] active:bg-gray-700 lg:hover:bg-gray-700 flex items-center justify-between px-4"
        onClick={handleToggle}
      >
        <p className=" text-xl lg:text-2xl font-medium">{question}</p>
        <div className="cursor-pointer">
          {isOpen ? (
            <img
              src={Close}
              alt="close_icon"
              className="h-[23px] lg:h-[28px] font-semibold"
            />
          ) : (
            <img
              src={Open}
              alt="open_icon"
              className="h-[25px] lg:h-[35px] font-semibold"
            />
          )}
        </div>
      </div>
      <div className="mt-1">
        {isOpen && (
          <div className="flex flex-col items-center space-y-4 justify-center p-3 mt-1 bg-[rgb(45,45,45)] w-80 lg:w-[855px]">
            <span className="text-left">{answer1}</span>
            <span className="text-left">{answer2}</span>
          </div>
        )}
      </div>
    </>
  );
}

export default AnswerComponent;
