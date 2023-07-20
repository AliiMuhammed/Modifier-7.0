import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Sign from "./pages/Auth/SignUp";
import NotFound from "./Shared/NotFound"
import App from "./App";
import Services from "./pages/Services/Services";

export const routes = createBrowserRouter([
 {
  path:"",
  element:<App/>,
  children:[
    {
      path: "/",
      element: <Home/ >,
    },
    {
      path: "/sign-up",
      element: <Sign/>,
    },{
      path:"/services",
      element:<Services/>

    }
  ],
  errorElement:<NotFound/>
},    {
  path: "/login",
  element: <Login/>,
},
//  {
//   path:"*",
//   element:
//  }
  ]);