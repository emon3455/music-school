import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/home/Home";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import Instructors from "../pages/instructors/Instructors";
import Classes from "../pages/classes/Classes";
import Dashboard from "../layout/DashBoard";
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
      element: <Dashboard></Dashboard>
    }
]);

export default router;