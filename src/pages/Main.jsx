import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <header className="align-middle bg-indigo-500 h-24 px-[8%] py-4 z-10 top-0 sticky w-[100%]">
        <Link to="/" className="text-2xl md:text-4xl py-2">
          Learning Path
        </Link>
        <div className="text-sm md:text-l">
          A New Journey of Knowledge Awaits
        </div>
      </header>
      <Outlet />
    </div>
  );
};
export default Main;
