import { useState } from "react";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";

const Chapter = () => {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(true);
  const hideSideBar = () => setSideBar(false);
  return (
    <div className="px-8">
      <Sidebar visible={sideBar} hideSideBar={hideSideBar} />
      <Content showSideBar={showSideBar} />
    </div>
  );
};

export default Chapter;
