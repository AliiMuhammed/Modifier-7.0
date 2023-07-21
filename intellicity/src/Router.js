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
import Guest from "./middleware/Guest";
import GuestProfile from "./middleware/GuestProfile";
import Profile from "./pages/Profile/Profile"
import MyServices from "./pages/Profile/components/MyServices";
import EditProfile from "./pages/Profile/components/EditProfile";
import MyFeedback from "./pages/Profile/components/MyFeedback";
import Admin from "./middleware/Admin";
import DashBoard from "./pages/Admin/DashBoard";
import MainAdmin from "./pages/Admin/components/MainAdmin";
import AdminUsers from "./pages/Admin/components/Users/AdminUsers";
import UsersTable from "./pages/Admin/components/Users/components/UsersTable";
import AddAdmin from "./pages/Admin/components/Users/components/AddAdmin";
export const routes = createBrowserRouter([
 {
  path:"",
  element:<App/>,
  children:[
    {
      path: "/",
      element: <Home/ >,
    },{
      path:"/services",
      element:<Services/>
    },{
      path:"/about-us",
      element:<About/>
    },{
      path:"/contact-us",
      element:<ContactUs/>
    },//Guest Profile Middleware
    {
      element: <GuestProfile />,
      children: [
        {
          path: "/profile/user",
          element: <Profile />,
          children:[
            {
              path: "/profile/user/:id",
              element:<MyServices/>
            },{
              path: "/profile/user/:id/edit",
              element:<EditProfile/>
            },{
              path: "/profile/user/:id/feedback",
              element:<MyFeedback/>
            }
          ]
        },
      ],
    },
    //Guest Middleware
    {
      element: <Guest />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },{
          path: "/sign-up",
          element: <Sign/>,
        }
      ],
    },
  ],
  errorElement:<NotFound/>
},
//Admin Middleware
{
  path: "/admin",
  element: <Admin/>,
  children: [
    {
      path:"/admin",
      element:<DashBoard/>,
      children:[
        {
          path:"",
          element:<MainAdmin/>
        },{
          path:"/admin/users",
          element:<AdminUsers/>,
          children:[
            {
              path:"",
              element:<UsersTable/>
            },
            {
              path:"/admin/users/add/:id",
              element:<AddAdmin/>,
            }
          ]
        }
      ]
    }
  ]
  }
  ]);