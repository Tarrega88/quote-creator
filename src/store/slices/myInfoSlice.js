import { createSlice } from "@reduxjs/toolkit";


const dummyData = {
    myName: "Homer Simpson",
    myCompany: "Springfield Nuclear Power Plant",
    myAddress: "742 Evergreen Terrace",
    myCity: "Springfield",
    myState: "OR",
    myPhone: "907-555-7334",
    myEmail: "chunkylover53@aol.com",
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
        },

    },
});

export const { setMyInfo } = myInfoSlice.actions;
export default myInfoSlice.reducer;