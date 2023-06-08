
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <div className="drawer z-30">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <Outlet></Outlet>
                    <label htmlFor="my-drawer" className="btn btn-warning text-black drawer-button w-full">Open Menu</label>

                </div>
                
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <Link to="">menu 1</Link>
                        </li>
                        <li>
                            <Link to="">menu 2</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;