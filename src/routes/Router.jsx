import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/home/Home";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import Instructors from "../pages/instructors/Instructors";
import Classes from "../pages/classes/Classes";
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
]);

export default router;