import { useDispatch } from "react-redux";
import axios from "../config/axios.config";
import { addUser } from "../features/user/userSlice";
import { createContext, useEffect, useState } from "react";
import Login from "../pages/user/Login";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    const dispatch = useDispatch();
    console.log("hello from authcontext");

    useEffect(() => {
        console.log("hello");
        axios
            .get("/auth/me")
            .then((res) => {
                console.log(res);
                dispatch(addUser(res.data.user));
                setUser(res.data.user);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>{user === null ? <Login /> : children}</AuthContext.Provider>
    );
};

export default AuthContextProvider;
