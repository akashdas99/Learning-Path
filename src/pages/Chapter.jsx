import { useEffect, useState } from "react";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { chapters } from "../constants/constants";

const Chapter = () => {
  const [sideBar, setSideBar] = useState(false);
  const [completed, setCompleted] = useState(
    Array.from(Array(chapters.length))
  );
  const showSideBar = () => setSideBar(true);
  const hideSideBar = () => setSideBar(false);

  const { slug, id } = useParams();
  useEffect(() => {
    const data = localStorage.getItem(slug);
    if (!data) {
      localStorage.setItem(slug, JSON.stringify(completed));
    } else {
      setCompleted(JSON.parse(data));
    }
  }, []);

  return (
    <div className="px-8">
      <Sidebar
        slug={slug}
        visible={sideBar}
        hideSideBar={hideSideBar}
        completed={completed}
      />
      <Content
        showSideBar={showSideBar}
        completed={completed}
        setCompleted={setCompleted}
      />
    </div>
  );
};

export default Chapter;
