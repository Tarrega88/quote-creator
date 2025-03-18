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
        createClient(state, action) {
            const client = action.payload;
            state.activeClient = client;
            state.clients[client] = {
                clientName: client,
                quotes: {
                    1: {
                        dateCreated: Date.now(),
                        //incomplete - will add other data here soon
                    },
                },
            }
        }
    },
});

export const { createClient } = clientSlice.actions;
export default clientSlice.reducer;