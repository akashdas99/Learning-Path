import { Link } from "react-router-dom";
import { paths } from "../constants/constants";

const LearningPath = () => {
  return (
    // {paths.map(()=><div className="px-[10%] m-2 rounded bg-slate-100 h-24">
    //   <div className=" text-indigo-500 text-2xl py-2">
    //     DataStructure & Algorithm
    //   </div>
    //   <div className="flex items-end justify-between">
    //     <div className=" text-stone-800 text-l ">DataStructure & Algorithm</div>
    //     <div className="text-stone-800 text-[12px] p-1">8 Chapters</div>
    //   </div>
    // </div>)}
    paths.map((path) => (
      <div
        key={path.id}
        className="px-[10%] m-2 rounded bg-slate-100 md:h-32 h-36"
      >
        <Link to="chapter/1">
          <div className=" text-indigo-500 md:text-2xl py-2 text-xl">
            {path.title}
          </div>
          <div className="flex items-end justify-between">
            <div className=" text-stone-800 md:text-base ">
              {path.description}
            </div>
            <div className="text-stone-800 text-[12px] p-1">
              {path.size} Chapters
            </div>
          </div>
        </Link>
      </div>
    ))
  );
};

export default LearningPath;
