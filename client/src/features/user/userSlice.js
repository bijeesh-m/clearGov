import { createSlice } from "@reduxjs/toolkit";
import { AuthContext } from "../../context/authContext";

const { useEffect, useContext } = require("react");

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        addUser: (state, actions) => (state = actions.payload),
        removeUser:(state, actions) => (state = {}),
    },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
