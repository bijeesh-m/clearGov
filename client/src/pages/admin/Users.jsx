import React, { useEffect, useState } from "react";
import UserList from "../../components/user/UserList";
import axios from "../../config/axios.config";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("/admin/users")
            .then((res) => {
                console.log(res);
                setUsers(res.data.users);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <UserList users={users} setUsers={setUsers} />
        </div>
    );
};

export default Users;
