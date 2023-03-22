import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { chapters } from "../constants/constants";
import ReactPlayer from "react-player";
import Exercise from "./Exercise";
import Footer from "./Footer";

const Content = ({ showSideBar, completed, setCompleted }) => {
  const { slug, id } = useParams();
  const { title, description, videoUrl, additionalLinks, mcqs } =
    chapters[id - 1];

  const updateCompletion = () => {
    if (!completed[id - 1]) {
      const newlyCompleted = completed.map((c, index) =>
        id - 1 === index ? true : c
      );
      setCompleted(newlyCompleted);
      localStorage.setItem(slug, JSON.stringify(newlyCompleted));
    }
  };

  return (
    <div className="px-6 md:px-12 pt-4 mt-2 md:ml-[26%] bg-white text-zinc-800 rounded">
      <div className="flex  pb-4">
        <div className="pr-2 md:hidden" onClick={showSideBar}>
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
          <div className="text-base font-bold md:text-2xl">{title}</div>
          {completed[id - 1] && (
            <div className="text-sm md:text-base w-min md:w-max flex">
              Completed
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
      <div className="py-4 text-justify ">{description}</div>
      <div className="font-bold text-xl mb-2">Relevant Links</div>
      {additionalLinks.map((link) => (
        <div className="mb-2 ">
          {"- "}
          <a className="hover:text-indigo-800 underline" href={link}>
            {link}
          </a>
        </div>
      ))}
      <Exercise mcqs={mcqs} updateCompletion={updateCompletion} />
      <hr className="mt-2" />
      <Footer lastId={chapters.length} />
    </div>
  );
};

export default Content;
