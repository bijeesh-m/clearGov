import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/user/Home";
import UserProfile from "../pages/user/UserProfile";
import ProjectForm from "../components/project/ProjectForm";
import CreateTender from "../components/tender/CreateTender";
import TenderView from "../pages/tender/TenderView";
import SearchResults from "../pages/tender/SearchResults";
import ContractorRegister from "../pages/contractor/ContractorRegister";
import UserDashboard from "../pages/user/UserDashboard";
import TenderDetails from "../pages/tender/TenderDetails";
import NotFound from "../pages/NotFound/NotFound";

const UserRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contractor-registration" element={<ContractorRegister />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/" element={<HomeLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/project-submission" element={<ProjectForm />} />
                    <Route path="/tender-submission" element={<CreateTender />} />
                    <Route path="/tender-details" element={<TenderDetails />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/tender/:tenderId" element={<TenderView />} />
                    <Route path="/search-results/:searchQuerry" element={<SearchResults />} />
                </Route>
                <Route path="/*" element={<NotFound />} />
a            </Routes>
        </div>
    );
};

export default UserRoutes;
