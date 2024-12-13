import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar></Navbar>
        <Home></Home>
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div>
        <Navbar></Navbar>
        <Paste></Paste>
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div>
        <Navbar></Navbar>
        <ViewPaste></ViewPaste>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;

  // <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default App;
