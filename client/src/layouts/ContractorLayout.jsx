import React from "react";
import Header from "../components/contractor/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/contractor/Footer";

const ContractorLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default ContractorLayout;
