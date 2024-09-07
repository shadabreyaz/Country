import {createRoot} from "react-dom/client"
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "./components/Home";
import SingleCountry from "./components/SingleCountry";

import App from "./App"

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:country",
          element: <SingleCountry />,
        },
      ],
    },
  ]);

const root = createRoot(document.querySelector('#root'))
root.render( <RouterProvider router={router} />)