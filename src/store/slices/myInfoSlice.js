import { createSlice } from "@reduxjs/toolkit";


const dummyData = {
    myName: "Homer Simpson",
    myCompany: "Springfield Nuclear Power Plant",
    myAddress: "742 Evergreen Terrace",
    myCity: "Springfield",
    myState: "OR",
    myZip: "12345",
    myPhone: "907-555-7334",
    myEmail: "chunkylover53@aol.com",
    myImage: null,
}

const initialState = {
    // ...dummyData,
    myName: "",
    myCompany: "",
    myAddress: "",
    myCity: "",
    myState: "",
    myZip: "",
    myPhone: "",
    myEmail: "",
    myImage: null,
};

const myInfoSlice = createSlice({
    name: "myInfo",
    initialState,
    reducers: {
        setMyInfo(state, action) {
            state[action.payload.type] = action.payload.text;
        },
        setMyImage(state, action) {
            state.myImage = action.payload;
        },
    },
});

export const { setMyInfo, setMyImage } = myInfoSlice.actions;
export default myInfoSlice.reducer;