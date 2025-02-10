import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const HomeLayout = () => {
    return (
        <div>
            <Header />
            <div className=" min-h-screen my-5">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default HomeLayout;
