import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import About from "./components/About";
import Periods from "./components/Periods";
import Gallery from "./components/Gallery";
import Volunteer from "./components/Volunteer";
import Donate from "./components/Donate";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "periods", Component: Periods },
      { path: "gallery", Component: Gallery },
      { path: "volunteer", Component: Volunteer },
      { path: "donate", Component: Donate },
    ],
  },
]);
