import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LearningPath from "./components/LearningPath";
import Main from "./pages/Main";
import Chapter from "./pages/Chapter";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <LearningPath />,
      },
      {
        path: "/:slug/:id",
        element: <Chapter />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
