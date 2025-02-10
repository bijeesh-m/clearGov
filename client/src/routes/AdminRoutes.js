import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import AdminLayout from "../layouts/AdminLayout";
import Users from "../pages/admin/Users";
import User from "../pages/admin/User";
import AdminLogin from "../pages/admin/AdminLogin";
import AddUser from "../pages/admin/AddUser";
import NotFound from "../pages/NotFound/NotFound";
import Tenders from "../pages/tender/Tenders";
import Tender from "../pages/admin/Tender";

const AdminRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AdminLayout />}>
                    <Route path="/login" element={<AdminLogin />} />
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route path="/dashboard/users" element={<Users />} />
                        <Route path="/dashboard/tenders" element={<Tenders />} />
                        <Route path="/dashboard/tender/:tenderId" element={<Tender />} />
                        <Route path="/dashboard/user/:id" element={<User />} />
                        <Route path="/dashboard/add-user" element={<AddUser />} />
                    </Route>
                    <Route path="/users" element={<Users />} />
                    <Route path="/user/:id" element={<User />} />
                    <Route path="/*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
};

export default AdminRoutes;
