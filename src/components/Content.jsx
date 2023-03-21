import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { chapters } from "../constants/constants";
import ReactPlayer from "react-player";
import Score from "./Score";

const Content = ({ showSideBar, completed, setCompleted }) => {
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

  const handleSubmit = () => {
    let newScore = 0;
    for (let i = 0; i < answer.length; i++)
      if (answer[i] === mcqs[i].correct) newScore++;
    setScore(newScore);
    setShowScore(true);
    if (100 * (newScore / answer.length) >= 75) updateCompletion();
  };

  const updateCompletion = () => {
    if (!completed[id - 1]) {
      const newlyCompleted = completed;
      newlyCompleted[id - 1] = true;
      setCompleted(newlyCompleted);
      localStorage.setItem(slug, JSON.stringify(newlyCompleted));
    }
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

        <div className="flex justify-between items-center w-full">
          <div>{title}</div>
          {completed[id - 1] && (
            <div className="text-sm flex">
              Congrats for Completing
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
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
        <div className="font-bold text-xl ">
          Exercise (Score more than 75% to complete this chapter)
        </div>
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
                      ? "bg-indigo-500 text-slate-100 rounded px-2  "
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
          className="w-[50%] mx-[25%] hover:bg-indigo-500 hover:text-white text-indigo-500 font-semibold px-2 mt-2 rounded-lg border-2"
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
      <hr className="mt-2" />
      <div className="flex justify-between">
        {id > 1 && (
          <Link
            to={`/${slug}/${id - 1}`}
            className="flex justify-start items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>

            <div className="text-[12px] px-2">Previous Chapter</div>
          </Link>
        )}
        {id < chapters.length && (
          <Link
            to={`/${slug}/${parseInt(id) + 1}`}
            className="flex justify-start items-center"
          >
            <div className="text-[12px] px-2">Next Chapter</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Content;
