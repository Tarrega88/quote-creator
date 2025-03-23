import { createSlice } from "@reduxjs/toolkit";


const dummyData = {
    myName: "James Bond",
    myCompany: "MI6",
    myAddress: "007 Secret Agent Ln",
    myCity: "",
    myState: "",
    myPhone: "",
    myEmail: "",
}

const initialState = {
    ...dummyData,
    // myName: "",
    // myCompany: "",
    // myAddress: "",
    // myCity: "",
    // myState: "",
    // myPhone: "",
    // myEmail: "",
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