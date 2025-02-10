import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import bidReducer from "../features/bids/bidSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        bids: bidReducer,
    },
});

export default store;
