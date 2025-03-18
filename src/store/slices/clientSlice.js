import { createSlice } from "@reduxjs/toolkit";


//still debating whether to use times in the quotes- might be helpful

const dummyData = {
    clients: {
        "billy bob": {
            clientName: "Billy Bob",
            clientAddress: "333 Windcrest Ln",
            clientCity: "Denver",
            clientState: "Colorado",
            clientZip: "80014",
            clientPhone: "907-123-4567",
            clientEmail: "billyBob@example.com",
            quotes: {
                1: {
                    dateCreated: 1742300944160,
                },
            }
        }
    },
    activeClient: "Billy Bob",
}

const initialState = {
    ...dummyData,
    // clients: {},
    // activeClient: false,
};


const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        createClient(state, action) {
            const client = action.payload;
            const lowerCaseClient = action.payload.toLowerCase();
            state.activeClient = lowerCaseClient;
            state.clients[lowerCaseClient] = {
                clientName: client,
                clientAddress: "",
                clientPhone: "",
                clientEmail: "",
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