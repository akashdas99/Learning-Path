import React from "react";
import { chapters } from "../constants/constants";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className=" h-screen fixed top-28 flex flex-col justify-start items-center w-[16.2%]">
      {chapters.map((chapter) => (
        <NavLink
          to={`/chapter/${chapter.id}`}
          className="p-2 w-full text-center border-0"
          key={chapter.id}
        >
          Chapter {chapter.id}
        </NavLink>
      ))}
    </aside>
  );
};

export default Sidebar;
