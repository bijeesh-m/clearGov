import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = () => {


  const user = useSelector((state)=>state.user)
  const tenders = useSelector((state)=>state.tenders)

    return (
        <div className="min-h-screen bg-gray-100">
            
            {/* Main Content */}
            <div className=" p-8">
                <h1 className="text-3xl font-bold mb-8">Welcome, {user.username}</h1>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold">Total Tenders</h2>
                        <p className="text-3xl">{tenders.length}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold">Pending Bids</h2>
                        <p className="text-3xl">12</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold">Completed Projects</h2>
                        <p className="text-3xl">8</p>
                    </div>
                    
                </div>

                {/* Recent Activity */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                    <ul className="space-y-4">
                        <li className="flex items-center justify-between">
                            <span>New tender created: Road Construction Project</span>
                            <span className="text-sm text-gray-500">2 hours ago</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span>Bid approved for Highway Expansion Project</span>
                            <span className="text-sm text-gray-500">1 day ago</span>
                        </li>
                        <li className="flex items-center justify-between">
                            <span>New user registered: John Doe</span>
                            <span className="text-sm text-gray-500">3 days ago</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;