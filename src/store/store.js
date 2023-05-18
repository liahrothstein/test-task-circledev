import { configureStore } from "@reduxjs/toolkit";
import { expApi } from "./exp-api";

export default configureStore({
    reducer: {
        [expApi.reducerPath]: expApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(expApi.middleware)
});