import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { chapters } from "../constants/constants";
import ReactPlayer from "react-player";
import Score from "./Score";

const Content = ({ showSideBar }) => {
  const { slug, id } = useParams();
  const { title, description, videoUrl, additionalLinks, mcqs } =
    chapters[id - 1];
  const initalState = Array.from(Array(mcqs.length));
  const [answer, setAnswer] = useState(initalState);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const chooseAnswer = (i, ans) => {
    const newState = answer.map((prevAns, index) =>
      i === index ? ans : prevAns
    );
    setAnswer(newState);
  };

  const handleSubmit = (e) => {
    let newScore = 0;
    for (let i = 0; i < answer.length; i++)
      if (answer[i] === mcqs[i].correct) newScore++;
    setScore(newScore);
    setShowScore(true);
  };
  return (
    <div className="px-8 md:px-16 pt-4 mt-2 md:ml-[26%] bg-white text-zinc-800 rounded">
      <div className="flex font-bold text-2xl pb-4">
        <div className="px-2 md:hidden" onClick={showSideBar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        {title}
      </div>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player "
          width="100%"
          height="100%"
          controls
          url={videoUrl}
        />
      </div>
      <div className="py-4">{description}</div>
      <div className="font-bold text-xl ">Relevant Links</div>
      <div className="py-4">{additionalLinks}</div>
      <section>
        <div className="font-bold text-xl ">Exercise</div>
        {mcqs.map(({ id, question, answers, correct }) => (
          <div key={id}>
            <div>
              <span>{id}. </span>
              {question}
            </div>
            <div className="cursor-pointer mx-4">
              {answers.map((ans, index) => (
                <div
                  key={index}
                  onClick={() => chooseAnswer(id - 1, ans)}
                  className={
                    ans === answer[id - 1]
                      ? "bg-indigo-500 text-slate-100 rounded px-4  "
                      : "rounded px-2 hover:decoration-indigo-500 hover:underline"
                  }
                >
                  {index + 1}
                  {". "}
                  {ans}
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          className="rounded-none text-indigo-500 font-semibold"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </section>
      {showScore && (
        <Score
          score={100 * (score / answer.length)}
          close={() => setShowScore(false)}
        />
      )}
    </div>
  );
};

export default Content;
