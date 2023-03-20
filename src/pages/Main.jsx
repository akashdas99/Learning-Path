import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <header className="bg-indigo-500 h-24 px-[10%] z-10 top-0 sticky w-[100%]">
        <div className="text-4xl py-2">Learning Path</div>
        <div>A New Journey of Knowledge Awaits</div>
      </header>
      <Outlet />
    </div>
  );
};
export default Main;
