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
import AddClass from "../pages/dashboard/addClass/AddClass";
import MyClass from "../pages/dashboard/myClass/MyClass";
import InstructorRoute from "../privateRoutes/InstructorRoute";
import UpdateMyClass from "../pages/dashboard/myClass/UpdateMyClass";
import MySelectedClass from "../pages/dashboard/mySeledtedClass/MySelectedClass";
import MyEnrolledClass from "../pages/dashboard/myEnrolledClass/MyEnrolledClass";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHistory from "../pages/dashboard/paymentHistory/PaymentHistory";
import DashboardHome from "../pages/dashboard/home/DashboardHome";
import Error from "../pages/error/Error";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
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
      errorElement: <Error></Error>,
      children:[       
        {
          path: "home",
          element: <DashboardHome></DashboardHome>
        },
        // admin routes start:
        {
          path: "manageUsers",
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: "manageClasses",
          element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path: "manageClasses/classes/:id",
          element: <AdminRoute><SendFeedBack></SendFeedBack></AdminRoute>,
        },
        // instructor routes start:
        {
          path: "addClass",
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path: "myClass",
          element: <InstructorRoute><MyClass></MyClass></InstructorRoute>
        },
        {
          path: "myClass/singleClass/:id",
          element: <InstructorRoute><UpdateMyClass></UpdateMyClass></InstructorRoute>
        },
        // student dashboard start here
        {
          path: "mySelectedClass",
          element: <PrivateRoutes><MySelectedClass></MySelectedClass></PrivateRoutes>
        },
        {
          path: "myEnrolledClass",
          element: <PrivateRoutes><MyEnrolledClass></MyEnrolledClass></PrivateRoutes>
        },
        {
          path: "mySelectedClass/:id",
          element: <PrivateRoutes><Payment></Payment></PrivateRoutes>,
          loader: ({params})=> fetch(`https://music-school-server.onrender.com/selectedClass/${params.id}`)
        },
        {
          path: "paymentHistory",
          element: <PrivateRoutes><PaymentHistory></PaymentHistory></PrivateRoutes>
        }
      ]
    }
]);

export default router;