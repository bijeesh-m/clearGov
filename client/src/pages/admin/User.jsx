import React, { useEffect, useState } from "react";

import axios from "../../config/axios.config";
import { useParams } from "react-router-dom";
import UserList from "../../components/user/UserList";
import UserDetails from "../../components/user/UserDetails";

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});


    console.log(user);

    useEffect(() => {
        axios
            .get(`/user/user/${id}`)
            .then((res) => {
                console.log(res);
                setUser(res.data.user);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <UserDetails user={user} />
        </div>
    );
};

export default User;
