import React from "react";
import Header from "../components/authority/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/authority/Footer";

const AuthorityLayout = () => {
    return (
        <div className=" flex flex-col">
            <Header />
            <div className=" w-full p-5  ">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default AuthorityLayout;
