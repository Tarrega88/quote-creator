import { createSlice } from "@reduxjs/toolkit";
//TODO 3/19/2025: Add more dummy data to relevant slices
//Add action to add another quote to same client

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
            quotes: {
                1742300944160: {
                    dateCreated: 1742300944160,
                    expenses: {
                        materials: [],
                        labor: [],
                        rentals: [],
                    },
                    services: {
                        //category, like installs gets added when a service is added to quote
                        //installs: [],
                    },
                },
                1742410954170: {
                    dateCreated: 1742410954170,
                    expenses: {
                        materials: [],
                        labor: [],
                        rentals: [],
                    },
                    services: {
                    },
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
            const timeCreated = Date.now();
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
                quotes: {
                    [timeCreated]: {
                        dateCreated: timeCreated,
                        expenses: {
                            materials: [],
                            labor: [],
                            rentals: [],
                        },
                        services: {
                            //category, like installs gets added when a service is added to quote
                            //installs: [],
                        },
                    },
                },
            }
        },
        editClientData(state, action) {
            state.clients[action.payload.clientURL][action.payload.dataType] = action.payload.dataEdit;
        },
        setActiveClient(state, action) {
            state.activeClient = action.payload;
        },
        updateClientQuote(state, action) {
            const { clientURL, quoteID, tempData } = action.payload;
            state.clients[clientURL].quotes[quoteID][tempData.category][tempData.expenseType].push({ ...tempData })
        }
    },
});

export const { createClient, editClientData, setActiveClient, updateClientQuote } = clientSlice.actions;
export default clientSlice.reducer;