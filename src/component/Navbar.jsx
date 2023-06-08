/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Navbar = () => {

    const { user , logOut} = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Successfully Loged out!',
                    'Success!',
                    'success'
                )
            })
            .catch(er => console.log(er))
    }

    const navMenu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors"> Instructors </Link></li>
        <li><Link to="/classes"> Classes </Link></li>
        {
            user
                ?
                <>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><button onClick={handleLogout} className="bg-warning font-bold">Logout</button></li>
                </>
                :
                <li><Link to="/signin">Sign In</Link></li>

        }
    </>

    return (
        <>
            <div className="navbar mx-auto sticky bg-black text-white z-20 bg-opacity-60">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost xl:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu space-y-2 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-gray-900 rounded-box w-52">
                            {navMenu}
                        </ul>

                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Music Scholling BD</a>
                </div>
                <div className="navbar-end">
                    <div className="hidden xl:flex">
                        <ul className="menu space-x-2 text-lg menu-horizontal px-1">
                            {navMenu}
                        </ul>
                    </div>

                    {
                        user
                        &&
                        <label className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user && user.photoURL} />
                            </div>
                        </label>
                    }
                </div>

            </div>

        </>
    );
};

export default Navbar;