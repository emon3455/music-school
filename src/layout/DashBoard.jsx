
import { FaBars, FaColumns, FaElementor, FaFileSignature, FaGitter, FaHouseUser, FaIdBadge, FaMusic, FaScroll, FaUserCog, FaUserGraduate } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructors from '../hooks/useInstructor';
import Footer from '../component/Footer';

const DashBoard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructors();

    return (
        <div>
            <div className="drawer z-30">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content z-10">

                    <label htmlFor="my-drawer" className="btn hover:bg-slate-800 bg-slate-900 text-white text-xl drawer-button w-full">Open Menu <FaBars></FaBars> </label>
                    <Outlet></Outlet>
                    <Footer></Footer>

                </div>

                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-2/3 sm:w-1/4 lg:text-lg space-y-2 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        <li className='lg:text-xl mb-5 font-extrabold'>
                            <Link> Music Scholling BD </Link>
                        </li>
                        <hr />

                        {

                            isAdmin

                                ?
                                <>
                                    <li>
                                        <Link to="/dashboard/home"> <FaHouseUser></FaHouseUser> Home </Link>
                                    </li>
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
                                                    <Link to="/dashboard/home"> <FaHouseUser></FaHouseUser> Home </Link>
                                                </li>
                                                <li>
                                                    <Link to="/dashboard/addClass"> <FaFileSignature></FaFileSignature> Add A Class </Link>
                                                </li>
                                                <li>
                                                    <Link to="/dashboard/myClass"> <FaIdBadge></FaIdBadge> My Classes </Link>
                                                </li>
                                            </>
                                            :
                                            <>
                                                <li>
                                                    <Link to="/dashboard/home"> <FaHouseUser></FaHouseUser> Home </Link>
                                                </li>
                                                <li>
                                                    <Link to="/dashboard/mySelectedClass"> <FaColumns></FaColumns> My Selected Class </Link>
                                                </li>
                                                <li>
                                                    <Link to="/dashboard/myEnrolledClass"> <FaGitter></FaGitter> My Enrolled Class </Link>
                                                </li>
                                                <li>
                                                    <Link to="/dashboard/paymentHistory"> <FaScroll></FaScroll> Payment History </Link>
                                                </li>
                                            </>
                                    }
                                </>
                        }

                        <div className="divider"></div>

                        <li className=' mb-5'>
                            <Link to="/"> <FaHouseUser></FaHouseUser> Home  </Link>
                        </li>
                        <li className=' mb-5'>
                            <Link to="/classes"> <FaMusic></FaMusic> All Classes  </Link>
                        </li>
                        <li className=' mb-5'>
                            <Link to="/instructors"> <FaUserGraduate></FaUserGraduate> All Instructors  </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;