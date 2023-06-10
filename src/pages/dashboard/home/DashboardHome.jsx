import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FaMusic } from "react-icons/fa";
import { Bounce } from "react-awesome-reveal";

const DashboardHome = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <Helmet>
                <title>Music Scholling | DashBoard</title>
            </Helmet>

            <Bounce>
                <h2 className="lg:text-4xl font-extrabold text-center my-10 "> <FaMusic className="inline-block text-orange-400"></FaMusic>  Welcome To <span className="text-violet-600">Music</span>  Scholling BD  <FaMusic className="inline-block text-green-500"></FaMusic></h2>
            </Bounce>

            <div className="w-full lg:w-1/3 mx-auto">
                <div className="card-body bg-slate-100 shadow-2xl rounded-2xl">
                    <div className="avatar mx-auto">
                        <div className="w-32 mask mask-squircle">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                    <h2 className="text-xl font-bold text-center mt-5 mb-2">User Name: <span className="text-green-500">{user?.displayName}</span></h2>
                    <h2 className="text-lg font-bold text-center">User Email: <span className="text-orange-500">{user?.email}</span></h2>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;