import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState("dashboard");

    const navigate = useNavigate();

    return (
        <div className="flex flex-col md:flex-row sm:h-screen">
            {/* Sidebar */}
            <nav className="bg-gray-800 text-white h-full  w-full md:w-64 p-4">
                <h1 className="text-2xl font-bold mb-6">Contractor Dashboard</h1>
                <ul className="space-y-2">
                    <li>
                        <button
                            onClick={() => setActiveTab("dashboard")}
                            className={`block w-full text-left px-4 py-2 rounded-lg ${
                                activeTab === "dashboard" ? "bg-blue-600" : "hover:bg-gray-700"
                            }`}
                        >
                            Dashboard
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {setActiveTab("submit-tender")
                                navigate("/contractor/dashboard/tender-submission")
                            }}
                            className={`block w-full text-left px-4 py-2 rounded-lg ${
                                activeTab === "submit-tender" ? "bg-blue-600" : "hover:bg-gray-700"
                            }`}
                        >
                            Submit Tenders
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setActiveTab("implement-project");
                                navigate("/contractor/dashboard/project-implementation");
                            }}
                            className={`block w-full text-left px-4 py-2 rounded-lg ${
                                activeTab === "implement-project" ? "bg-blue-600" : "hover:bg-gray-700"
                            }`}
                        >
                            Implement Projects
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setActiveTab("expense-report");
                                navigate("/contractor/dashboard/report");
                            }}
                            className={`block w-full text-left px-4 py-2 rounded-lg ${
                                activeTab === "expense-report" ? "bg-blue-600" : "hover:bg-gray-700"
                            }`}
                        >
                            Report Expenses
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setActiveTab("spend-analysis");
                                navigate("/contractor/dashboard/spend-analysis");
                            }}
                            className={`block w-full text-left px-4 py-2 rounded-lg ${
                                activeTab === "spend-analysis" ? "bg-blue-600" : "hover:bg-gray-700"
                            }`}
                        >
                            Spend-analysis
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setActiveTab("latest-tenders");
                                navigate("/contractor/dashboard/latest-tenders");
                            }}
                            className={`block w-full text-left px-4 py-2 rounded-lg ${
                                activeTab === "latest-tenders" ? "bg-blue-600" : "hover:bg-gray-700"
                            }`}
                        >
                            Latest tenders
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
