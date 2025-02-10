import { useState } from "react";
import axios from "axios";
import ContractorRegister from "../../pages/contractor/ContractorRegister";

const UserForm = ({ user = null }) => {
    // const [name, setName] = useState(user ? user.name : "");
    // const [email, setEmail] = useState(user ? user.email : "");
    const [role, setRole] = useState(user ? user.role : "citizen");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const userData = { name, email, role };

        // try {
        //     if (user) {
        //         // Update existing user
        //         await axios.put(`/users/${user._id}`, userData);
        //     } else {
        //         // Create new user
        //         await axios.post("/users", userData);
        //     }
        // } catch (err) {
        //     console.error("Error submitting form", err);
        // }
    };

    console.log(role);

    return (
        <div className=" h-full">
            <div className="breadcrumbs text-sm px-5  py-4 fixed bg-white w-full">
                <ul>
                    <li>
                        <a href="/admin/dashboard">Dashboard</a>
                    </li>
                    <li>
                        <a href="/admin/dashboard/users">Users</a>
                    </li>
                    <li>Add User</li>
                </ul>
            </div>
            <form
                onSubmit={handleSubmit}
                className="space-y-4 flex flex-col py-20 p-5 bg-cover bg-center min-h-full"
                style={{
                    backgroundImage:
                        "url(https://img.freepik.com/free-photo/blue-office-stationery-set-with-laptop_23-2147843325.jpg?semt=ais_incoming)",
                }}
            >
                <select value={role} onChange={(e) => setRole(e.target.value)} className="input">
                    <option value="Citizen">Citizen</option>
                    <option value="Contractor">Contractor</option>
                    <option value="Admin">Admin</option>
                    <option value="Government Authority">Government Authority</option>
                </select>

                {role === "Contractor" && <ContractorRegister />}
            </form>
        </div>
    );
};

export default UserForm;
