import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile mt-10">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl text-neutral font-bold uppercase mb-5'>Welcome to your Dashboard</h2>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to="/dashboard" className='text-1xl font-bold uppercase'> Appointment</Link></li>
                    <li><Link to="/dashboard/dashboard-review" className='text-1xl font-bold uppercase'>Review</Link></li>
                    <li><Link to="/dashboard/history" className='text-1xl font-bold uppercase'>History</Link></li>
                    {admin && <li><Link to="/dashboard/users" className='text-1xl font-bold uppercase'>All Users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;