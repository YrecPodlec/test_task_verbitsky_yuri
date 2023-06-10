import {configureStore} from "@reduxjs/toolkit";
import {DogsApi} from "./dogs/dogs.api.tsx";
import {likeReducer} from "./likes/like.slice.tsx";

export const store = configureStore({
    reducer: {[DogsApi.reducerPath]: DogsApi.reducer, like: likeReducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(DogsApi.middleware)
})
export type TypeRootState = ReturnType<typeof store.getState>