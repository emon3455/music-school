
import { FaColumns, FaElementor, FaFileSignature, FaGitter, FaHouseUser, FaIdBadge, FaMusic, FaScroll, FaUserCog, FaUserGraduate } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructors from '../hooks/useInstructor';
import Footer from '../component/Footer';

const DashBoard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructors();

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 text-xl font-bold "><Link to="/" className='btn'>Music Scholling BD</Link></div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
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

                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-2/3 sm:w-1/4 lg:text-lg space-y-2 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        <li className='lg:text-xl mb-5 font-extrabold'>
                            <Link to="/"> Music Scholling BD </Link>
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