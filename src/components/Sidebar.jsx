import React from "react";
import { chapters } from "../constants/constants";
import { NavLink } from "react-router-dom";

const Sidebar = ({ slug, visible, hideSideBar, completed }) => {
  return (
    <aside
      className={`bg-[#242424] z-20 fixed top-[120px] md:flex flex-col justify-start items-center min-w-max w-[60%] md:w-[16.2%] left-0 md:left-8 p-2 rounded-lg ${
        visible ? `flex` : `hidden`
      }`}
    >
      <div
        className="cursor-pointer z-50 pb-2 ml-[96%] md:hidden"
        onClick={hideSideBar}
      >
        <svg
          className="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
      </div>
      {chapters.map(({ id }) => (
        <NavLink
          to={`/${slug}/${id}`}
          className={`p-2 w-full text-center text-xl rounded-lg ${
            completed[id - 1] ? `bg-green-500` : ``
          }`}
          key={id}
        >
          Chapter {id}
        </NavLink>
      ))}
    </aside>
  );
};

export default Sidebar;
