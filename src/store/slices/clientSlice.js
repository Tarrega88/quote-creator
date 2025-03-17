import { createSlice } from "@reduxjs/toolkit";


//still debating whether to use times in the quotes- might be helpful

const initialState = {
    clients: {},
    activeClient: false,
    // clients: dumbyData,
};


const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        updateClient(state, action) {
            const client = action.payload;
            if (state.clients[client]) {
                state.activeClient = client;
                state.clients[client].push({ client, dateCreated: Date.now(), quoteNumber: state.clients[client].length + 1, total: 0, quote: [], });
            } else {
                state.activeClient = client;
                state.clients[client] = [{
                    client: client,
                    dateCreated: Date.now(),
                    quoteNumber: 1,
                    total: 0,
                    quote: [],
                },]
            }
        },
    },
});

export const { updateClient } = clientSlice.actions;
export default clientSlice.reducer;