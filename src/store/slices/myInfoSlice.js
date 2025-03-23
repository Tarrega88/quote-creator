import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myName: "",
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
        // setMyName(state, action) {
        //     state.myName = action.payload;
        // },
        // setMyAddress(state, action) {
        //     state.myAddress = action.payload;
        // },
        // setMyCity(state, action) {
        //     state.myCity = action.payload;
        // },
        // setMyState(state, action) {
        //     state.myState = action.payload;
        // },
        // setMyPhone(state, action) {
        //     state.myPhone = action.payload;
        // },
        // setMyEmail(state, action) {
        //     state.myEmail = action.payload;
        // },
        setMyInfo(state, action) {
            state[action.payload.type] = action.payload.text;
        }
    },
});

export const { setMyInfo } = myInfoSlice.actions;
export default myInfoSlice.reducer;