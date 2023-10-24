import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import MenuAll from "../Pages/MenuAll/MenuAll";
import Login from "../Register/Login";
import Signup from "../Register/Signup";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
     children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path:'/menu',
          element:<MenuAll/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<Signup/>
        }
      ]
     
    },
  ]);
  