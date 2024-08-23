import { useState } from "react";
import AnswerComponent from "./AnswerComponent";

const questions = [
  {
    id: 1,
    question: "What is Netflix?",
    answer1:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
    answer2:
      "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  },
  {
    id: 2,
    question: "How much does Netflix cost?",
    answer1:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
  },
  {
    id: 3,
    question: "Where can I watch?",
    answer1:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    answer2:
      "You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    id: 4,
    question: "How do I cancel?",
    answer1:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    id: 5,
    question: "What can I watch on Neflix?",
    answer1:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    id: 6,
    question: "Is Netflix good for kids?",
    answer1:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
    answer2:
      "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

function AnswerSection() {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);

  const handleAnswerToggle = () => {
    setIsAnswerOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`bg-black w-full ${
          isAnswerOpen ? "h-[900px]" : "h-[700px]"
        } flex flex-col px-5 py-5 lg:px-10 relative`}
      >
        <div className="font-[900] text-2xl lg:text-[30px] lg:font-extrabold mt-7 lg:mt-10">
          <span>Frequently Asked Questions</span>
        </div>
        <div className="flex flex-col mt-5">
          {questions.map((q) => (
            <AnswerComponent
              key={q.id}
              question={q.question}
              answer1={q.answer1}
              answer2={q.answer2}
              onToggle={handleAnswerToggle}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AnswerSection;
