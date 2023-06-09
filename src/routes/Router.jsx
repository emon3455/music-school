import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/home/Home";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import Instructors from "../pages/instructors/Instructors";
import Classes from "../pages/classes/Classes";
import Dashboard from "../layout/DashBoard";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import ManageClasses from "../pages/dashboard/manageClasses/ManageClasses";
import ManageUsers from "../pages/dashboard/manageUsers/ManageUsers";
import AdminRoute from "../privateRoutes/AdminRoute";
import SendFeedBack from "../pages/dashboard/manageClasses/SendFeedBack";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/signin",
            element: <SignIn></SignIn>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
          path: "/instructors",
          element: <Instructors></Instructors>
        },
        {
          path: "/classes",
          element: <Classes></Classes>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        // admin routes start:
        {
          path: "manageUsers",
          // element: <ManageUsers></ManageUsers>
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: "manageClasses",
          element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
          // element: <ManageClasses></ManageClasses>
        },
        {
          path: "manageClasses/classes/:id",
          element: <AdminRoute><SendFeedBack></SendFeedBack></AdminRoute>,
        }
      ]
    }
]);

export default router;