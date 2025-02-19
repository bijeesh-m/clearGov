import React from "react";
import { useSelector } from "react-redux";
const Dashboard = () => {
    const user = useSelector((state) => state.user);
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Dashboard Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Welcome Back, {user.username}</h1>
                <p className="text-gray-600">Here's what's happening with your tenders and bids today.</p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Active Tenders Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700">Active Tenders</h3>
                    <p className="text-2xl font-bold text-blue-600">12</p>
                    <p className="text-sm text-gray-500">You are currently participating in 12 tenders.</p>
                </div>

                {/* Submitted Bids Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700">Submitted Bids</h3>
                    <p className="text-2xl font-bold text-green-600">8</p>
                    <p className="text-sm text-gray-500">You have submitted 8 bids so far.</p>
                </div>

                {/* Upcoming Deadlines Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700">Upcoming Deadlines</h3>
                    <p className="text-2xl font-bold text-red-600">3</p>
                    <p className="text-sm text-gray-500">3 tenders have deadlines in the next 7 days.</p>
                </div>
            </div>

            {/* Active Tenders Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Active Tenders</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tender Name
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Deadline
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* Example Row */}
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    Construction of Highway Bridge
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-12-15</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 py-1 text-sm font-semibold bg-green-100 text-green-800 rounded-full">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <a href="#" className="text-blue-600 hover:text-blue-900">
                                        View Details
                                    </a>
                                </td>
                            </tr>
                            {/* Add more rows dynamically */}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Recent Bids Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Bids</h2>
                <div className="space-y-4">
                    {/* Example Bid Card */}
                    <div className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">Highway Bridge Construction</h3>
                                <p className="text-sm text-gray-500">Submitted on 2023-11-01</p>
                            </div>
                            <span className="px-2 py-1 text-sm font-semibold bg-blue-100 text-blue-800 rounded-full">
                                Under Review
                            </span>
                        </div>
                    </div>
                    {/* Add more bid cards dynamically */}
                </div>
            </div>

            {/* Quick Actions Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition duration-300">
                        Submit New Bid
                    </button>
                    <button className="p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition duration-300">
                        View All Tenders
                    </button>
                    <button className="p-4 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition duration-300">
                        Download Reports
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
