import { Link } from "react-router-dom";
import { paths } from "../constants/constants";

const LearningPath = () => {
  return paths.map(({ id, slug, title, description, size }) => (
    <div key={id} className="px-[10%] m-2 rounded bg-slate-100 md:h-32 h-36">
      <Link to={`${slug}/1`}>
        <div className=" text-indigo-500 md:text-2xl py-2 text-xl">{title}</div>
        <div className="flex items-end justify-between">
          <div className=" text-stone-800 md:text-base ">{description}</div>
          <div className="text-stone-800 text-[12px] p-1">{size} Chapters</div>
        </div>
      </Link>
    </div>
  ));
};

export default LearningPath;
