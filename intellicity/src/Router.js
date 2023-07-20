import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Sign from "./pages/Auth/SignUp";
import NotFound from "./Shared/NotFound"
import App from "./App";
import Services from "./pages/Services/Services";
import About from "./pages/AboutUs/About";
import ContactUs from "./pages/ContactUs/ContactUs";

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
    },{
      path:"/about-us",
      element:<About/>
    },{
      path:"/contact-us",
      element:<ContactUs/>
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