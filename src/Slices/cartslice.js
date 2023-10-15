import { createSlice } from '@reduxjs/toolkit'

const cartsli= createSlice({
    name: 'cart',
   initialState: [] ,
   reducers:{
    additem: (state,actions)=>{
        state.push(actions.payload)
    },
    removeitem: (state,actions)=>{
        state.pop(state.indexOf(actions.payload),1)
    }
}})

export const  { additem,removeitem } = cartsli.actions;

export default cartsli.reducer;