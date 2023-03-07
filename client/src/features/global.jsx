import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode:localStorage.getItem("theme") || "light",
 
}

export const globalSlice = createSlice({
    name:"global",
    initialState,
    reducers:{
        toggleMode:(state)=>{
            localStorage.setItem("theme",state.mode === "light" ? "dark" : "light");
            state.mode = state.mode === "light" ? "dark" : "light";
        }
    }

})


export const {toggleMode,setModefromStorage} = globalSlice.actions;

export default globalSlice.reducer;