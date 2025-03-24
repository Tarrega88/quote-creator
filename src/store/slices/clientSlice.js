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
                    quoteTitle: "",
                    "expenses": {
                        "materials": {
                            "e74bb82a-df6e-4680-af2d-fb65ad15e554": {
                                "costInDollars": 22.7,
                                "expenseName": "fabric",
                                "expenseType": "materials",
                                "measurementType": "length",
                                "measurementUnit": "feet",
                                "paymentModel": "measurement",
                                "unitAmount": 10,
                                "multiple": 1,
                                "category": "expenses",
                                "uuid": "e74bb82a-df6e-4680-af2d-fb65ad15e554"
                            },
                            "b4e8a14f-c7af-4255-9c43-6d748a966b7f": {
                                "costInDollars": 40,
                                "expenseName": "sheet metal",
                                "expenseType": "materials",
                                "measurementType": "area",
                                "measurementUnit": "square feet",
                                "paymentModel": "measurement",
                                "unitAmount": 50,
                                "multiple": 1,
                                "category": "expenses",
                                "uuid": "b4e8a14f-c7af-4255-9c43-6d748a966b7f"
                            }
                        },
                        "labor": {
                            "9ef02b8e-91f4-4c4e-ab29-2a886f24e49a": {
                                "costInDollars": 450,
                                "expenseName": "general labor",
                                "expenseType": "labor",
                                "paymentModel": "time",
                                "paidByThe": "day",
                                "multiple": 1,
                                "category": "expenses",
                                "uuid": "9ef02b8e-91f4-4c4e-ab29-2a886f24e49a"
                            },
                            "9cdbba90-93ab-425a-8b76-d72a144a7768": {
                                "costInDollars": 450,
                                "expenseName": "general labor",
                                "expenseType": "labor",
                                "paymentModel": "time",
                                "paidByThe": "day",
                                "multiple": 2,
                                "category": "expenses",
                                "uuid": "9cdbba90-93ab-425a-8b76-d72a144a7768"
                            }
                        },
                        "rentals": {
                            "6c440a10-fb48-461c-8e8d-65b4f72724dd": {
                                "costInDollars": 25,
                                "expenseName": "Uhaul",
                                "expenseType": "rentals",
                                "paymentModel": "time",
                                "paidByThe": "day",
                                "multiple": 1,
                                "category": "expenses",
                                "uuid": "6c440a10-fb48-461c-8e8d-65b4f72724dd"
                            },
                            "d286489d-c310-458c-8815-598adceff21a": {
                                "costInDollars": 25,
                                "expenseName": "Uhaul",
                                "expenseType": "rentals",
                                "paymentModel": "time",
                                "paidByThe": "day",
                                "multiple": 1,
                                "category": "expenses",
                                "uuid": "d286489d-c310-458c-8815-598adceff21a"
                            }
                        }
                    },
                    "services": {
                        "installation": {
                            "30245546-d5a3-48f9-8bb1-34fe5fedae06": {
                                "measurementType": "area",
                                "measurementUnit": "square_feet",
                                "pay": 500,
                                "paymentModel": "measurement",
                                "serviceCategory": "installation",
                                "serviceName": "French drain installation",
                                "unitAmount": 2,
                                "multiple": 1,
                                "category": "services",
                                "uuid": "30245546-d5a3-48f9-8bb1-34fe5fedae06"
                            },
                            "963ebeb5-27bb-4069-ae26-81d1b70a7de7": {
                                "measurementType": "area",
                                "measurementUnit": "square_feet",
                                "pay": 450,
                                "paymentModel": "measurement",
                                "serviceCategory": "installation",
                                "serviceName": "English drain installation",
                                "unitAmount": 2,
                                "multiple": 1,
                                "category": "services",
                                "uuid": "963ebeb5-27bb-4069-ae26-81d1b70a7de7"
                            }
                        },
                        "landscaping": {
                            "2f0ce417-06fa-49b0-b4c9-c30110b6a187": {
                                "measurementType": "area",
                                "measurementUnit": "square_feet",
                                "pay": 250,
                                "paymentModel": "measurement",
                                "serviceCategory": "landscaping",
                                "serviceName": "grading",
                                "unitAmount": 40,
                                "multiple": 1,
                                "category": "services",
                                "uuid": "2f0ce417-06fa-49b0-b4c9-c30110b6a187"
                            },
                            "94c3ace7-faf5-4b5e-84cc-26b50041a995": {
                                "measurementType": "area",
                                "measurementUnit": "square_feet",
                                "pay": 250,
                                "paymentModel": "measurement",
                                "serviceCategory": "landscaping",
                                "serviceName": "grading",
                                "unitAmount": 40,
                                "multiple": 1,
                                "category": "services",
                                "uuid": "94c3ace7-faf5-4b5e-84cc-26b50041a995"
                            }
                        }
                    }
                },
                1742410954170: {
                    dateCreated: 1742410954170,
                    quoteTitle: "",
                    expenses: {
                        materials: {},
                        labor: {},
                        rentals: {},
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
                        quoteTitle: "",
                        expenses: {
                            materials: {},
                            labor: {},
                            rentals: {},
                        },
                        services: {
                            //category, like installs gets added when a service is added to quote
                            //installs: {},
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
            const uuid = crypto.randomUUID();
            state.clients[clientURL].quotes[quoteID][tempData.category][tempData.expenseType][uuid] = { ...tempData, uuid };
        },
        updateClientQuoteService(state, action) {
            const { clientURL, quoteID, tempData } = action.payload;
            const { category, serviceCategory } = tempData;
            const uuid = crypto.randomUUID();

            const quote = state.clients[clientURL].quotes[quoteID];

            // Ensure category and expenseType objects exist
            // quote[category] ??= {};
            quote[category][serviceCategory] ??= {};
            quote[category][serviceCategory][uuid] = { ...tempData, uuid };
        },
        removeClientQuoteServiceData(state, action) {
            const { clientURL, quoteID, tempData } = action.payload;
            const { category, serviceCategory, uuid } = tempData;

            const quote = state.clients[clientURL].quotes[quoteID];
            delete quote[category][serviceCategory][uuid];
            if (!Object.keys(quote[category][serviceCategory]).length) delete quote[category][serviceCategory];

        },
        removeClientQuoteExpenseData(state, action) {
            const { clientURL, quoteID, tempData } = action.payload;
            const { category, expenseType, uuid } = tempData;

            const quote = state.clients[clientURL].quotes[quoteID];
            delete quote[category][expenseType][uuid];
            // if (!Object.keys(quote[category][expenseType]).length) delete quote[category][serviceCategory];

        },
        createNewQuote(state, action) {
            const timeCreated = Date.now();

            state.clients[action.payload].quotes[timeCreated] = {
                dateCreated: timeCreated,
                quoteTitle: "",
                expenses: {
                    materials: {},
                    labor: {},
                    rentals: {},
                },
                services: {},
            }
        },
        setQuoteTitle(state, action) {
            const { clientURL, quoteID, title } = action.payload;
            state.clients[clientURL].quotes[quoteID].quoteTitle = title;
        }
    },
});

export const { createClient, editClientData, setActiveClient, updateClientQuote, updateClientQuoteService, removeClientQuoteServiceData, removeClientQuoteExpenseData, createNewQuote, setQuoteTitle } = clientSlice.actions;
export default clientSlice.reducer;