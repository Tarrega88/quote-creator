import { createSlice } from "@reduxjs/toolkit";

const dumbyData = {
    Marco: [
        { client: "Marco", quote: [], quoteNumber: 1, total: 0 },
        { client: "Marco", quote: [], quoteNumber: 2, total: 0 }
    ],
    Tina: [{ client: "Tina", quote: [], quoteNumber: 1, total: 0 },]
}

const initialState = {
    // clients: {},
    clients: dumbyData,
};


const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {

        updateClient(state, action) {
            const client = action.payload;
            if (state.clients[client]) {
                state.clients[client].push({ client, quoteNumber: state.clients[client].length + 1, total: 0, quote: [], });
            } else {
                state.clients[client] = [{
                    client: client,
                    quoteNumber: 1,
                    total: 0,
                    quote: [],
                },]
            }
        }
    },
});

export const { updateClient } = clientSlice.actions;
export default clientSlice.reducer;