
import { FaBars, FaColumns, FaElementor, FaFileSignature, FaGitter, FaHouseUser, FaScroll, FaUserCog } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructors from '../hooks/useInstructor';

const DashBoard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructors();

    // const isAdmin = true;
    // const isInstructor = false;

    return (
        <div>
            <div className="drawer z-30">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content z-10">

                    <label htmlFor="my-drawer" className="btn btn-primary bg-slate-950 text-white text-xl drawer-button w-full">Open Menu <FaBars></FaBars> </label>
                    <Outlet></Outlet>

                </div>

                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-2/3 lg:w-1/4  h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li className='text-xl mb-5 font-extrabold'>
                            <Link to="/">Music Scholling BD <FaHouseUser></FaHouseUser> </Link>
                        </li>
                        {
                            isAdmin

                                ?
                                <>
                                    <li>
                                        <Link to="/dashboard/manageUsers"> <FaUserCog></FaUserCog> Manage Users </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/manageClasses"> <FaElementor></FaElementor> Manage Classes </Link>
                                    </li>
                                </>
                                :
                                <>
                                    {
                                        isInstructor
                                            ?
                                            <>
                                                <li>
                                                    <Link to="/dashboard/addClass"> <FaFileSignature></FaFileSignature> Add Class </Link>
                                                </li>
                                                <li>
                                                    <Link to="/dashboard/myClass"> <FaFileSignature></FaFileSignature> My Class </Link>
                                                </li>
                                            </>
                                            :
                                            <>
                                                <li>
                                                    <Link to="/dashboard/mySelectedClass"> <FaColumns></FaColumns> My Selected Class </Link>
                                                    <Link to="/dashboard/myEnrolledClass"> <FaGitter></FaGitter> My Enrolled Class </Link>
                                                    <Link to="/dashboard/paymentHistory"> <FaScroll></FaScroll> Payment History </Link>
                                                </li>
                                            </>
                                    }
                                </>
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;