import React from "react";
import { Route, Routes } from "react-router-dom";
import ContractorRegister from "../pages/contractor/ContractorRegister";
import Dashboard from "../pages/contractor/Dashboard";
import SpendAnalysis from "../components/contractor/SpendAnalysis";
import ProjectImplementation from "../components/contractor/ProjectImplementation";
import TenderSubmission from "../components/contractor/TenderSubmission";
import ExpenseReport from "../components/contractor/ExpenseReport";
import NotFound from "../pages/NotFound/NotFound";
import Tenders from "../pages/tender/Tenders";
import ContractorLayout from "../layouts/ContractorLayout";
import BidSubmission from "../pages/contractor/BidSubmission";
import TenderView from "../pages/tender/TenderView";
import MyBidsPage from "../pages/contractor/MyBidsPage";
import BidView from "../pages/contractor/BidView";
import Profile from "../pages/contractor/Profile";

const ContractorRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/contractor-register" element={<ContractorRegister />} />
                <Route path="/" element={<ContractorLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/tenders" element={<Tenders />} />
                    <Route path="/tenders/:tenderId" element={<TenderView />} />
                    <Route path="/bids" element={<MyBidsPage />} />
                    <Route path="/bids/:bidId" element={<BidView />} />
                    <Route path="/spend-analysis" element={<SpendAnalysis />} />
                    <Route path="/bid-submission/:tenderId" element={<BidSubmission />} />
                    <Route path="/project-implementation" element={<ProjectImplementation />} />
                    <Route path="/report" element={<ExpenseReport />} />
                    <Route path="/latest-tenders" element={<Tenders />} />
                </Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default ContractorRoutes;
