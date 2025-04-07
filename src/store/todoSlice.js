import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:["apple","mango"],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {add} = todoSlice.actions
export default todoSlice.reducer