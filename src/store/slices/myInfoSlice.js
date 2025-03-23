import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myName: "",
    myCompany: "",
    myAddress: "",
    myCity: "",
    myState: "",
    myPhone: "",
    myEmail: "",
};

const myInfoSlice = createSlice({
    name: "myInfo",
    initialState,
    reducers: {
        setMyInfo(state, action) {
            state[action.payload.type] = action.payload.text;
        }
    },
});

export const { setMyInfo } = myInfoSlice.actions;
export default myInfoSlice.reducer;