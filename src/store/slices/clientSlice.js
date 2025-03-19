import { createSlice } from "@reduxjs/toolkit";


//still debating whether to use times in the quotes- might be helpful

const dummyData = {
    clients: {
        "billy_bob": {
            clientName: "Billy Bob",
            client_: "billy_bob",
            clientAddress: "333 Windcrest Ln",
            clientCity: "Denver",
            clientState: "Colorado",
            clientZip: "80014",
            clientPhone: "907-123-4567",
            clientEmail: "billyBob@example.com",
            activeQuote: 1,
            quotes: {
                1: {
                    dateCreated: 1742300944160,
                    //TODO: should quote expenses and services be arrays or objects?
                    expenses: [],
                    services: [],
                },
            }
        }
    },
    activeClient: "billy_bob",
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
            const clientURL = client.toLowerCase().replaceAll(" ", "_")
            state.activeClient = clientURL;
            state.clients[clientURL] = {
                clientName: client,
                client_: clientURL,
                clientAddress: "",
                clientCity: "",
                clientState: "",
                clientZip: "",
                clientPhone: "",
                clientEmail: "",
                activeQuote: 1,
                quotes: {
                    1: {
                        dateCreated: Date.now(),
                        expenses: [],
                        services: [],
                        //incomplete - will add other data here soon
                    },
                },
            }
        },
        editClientData(state, action) {
            state.clients[action.payload.clientURL][action.payload.dataType] = action.payload.dataEdit;
        },
        setActiveClient(state, action) {
            state.activeClient = action.payload;
        }
    },
});

export const { createClient, editClientData, setActiveClient } = clientSlice.actions;
export default clientSlice.reducer;