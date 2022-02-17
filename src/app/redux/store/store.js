import { configureStore } from "@reduxjs/toolkit";
import { messages } from "../../RTK";
import { params } from "../actions/ActionsRedusers";

export const store = configureStore({
  reducer: {
    params: params.reducer,
    [messages.reducerPath]: messages.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(messages.middleware),
});

