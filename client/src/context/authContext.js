import { useDispatch } from "react-redux";
import axios from "../config/axios.config";
import { addUser } from "../features/user/userSlice";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get("/auth/me")
            .then((res) => {
                dispatch(addUser(res.data.user));
                setUser(res.data.user);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
