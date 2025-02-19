import axios from "../.././config/axios.config";
import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "../../components/admin/Header";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className=" w-full  h-screen flex flex-col  overflow-y-auto">
                <div className=" overflow-y-auto h-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
