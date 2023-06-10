import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DogsTypes} from "../dogs/dogs.types.tsx";
const initialState: DogsTypes[]= []
export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<DogsTypes>) => {
            state.push(action.payload)
        },
        removeItem: (state, action: PayloadAction<{ id: number }>) => {
            // @ts-ignore
            return state.filter(p => p.id !== action.payload.id)
        },
    },
})

export const likeReducer = likeSlice.reducer
export const likeAction = likeSlice.actions