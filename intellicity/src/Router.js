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
import AdminContactUS from "./pages/Admin/components/ContactUS/AdminContactUS";
import ContactUsTable from "./pages/Admin/components/ContactUS/components/ContactUsTable";
import AdminAboutUs from "./pages/Admin/components/AboutUS/AdminAboutUs"
import MembersTaple from "./pages/Admin/components/AboutUS/Components/MembersTaple"
import AddMember from "./pages/Admin/components/AboutUS/Components/AddMember"
import UpdateMember from "./pages/Admin/components/AboutUS/Components/UpdateMember";
import AdminServices from "./pages/Admin/components/Services/AdminServices"
import ServicesTable from "./pages/Admin/components/Services/components/ServicesTable";
import UpdateServices from "./pages/Admin/components/Services/components/UpdateServices";
import AddServices from "./pages/Admin/components/Services/components/AddServices";
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
              path:"/admin/users/add",
              element:<AddAdmin/>,
            }
          ]
        }
        ,{
          path:"/admin/contact-us",
          element:<AdminContactUS/>,
          children:[
            {
              path:"",
              element:<ContactUsTable/>
            }
          ]
        }
        ,{
          path:"/admin/about-us",
          element:<AdminAboutUs/>,
          children:[
            {
              path:"",
              element:<MembersTaple/>
            },{
              path:"/admin/about-us/add",
              element:<AddMember/>
            },{
              path:"/admin/about-us/update/:id",
              element:<UpdateMember/>
            }
          ]
        }
        ,{
          path:"/admin/services",
          element:<AdminServices/>,
          children:[
            {
              path:"",
              element:<ServicesTable/>
            },{
              path:"/admin/services/add",
              element:<AddServices/>
            },{
              path:"/admin/services/update/:id",
              element:<UpdateServices/>
            }
          ]
        }
      ]
    }
  ]
  }
  ]);