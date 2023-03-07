import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null,
    token:null,
  
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            localStorage.setItem("user",JSON.stringify(action.payload));
            state.user = action.payload.user;
            state.token = action.payload.token;
      
        },
        logout:(state)=>{
            localStorage.removeItem("user");
            state.user = null;
            state.token = null;
        },
        setUserFromLocalStorage:(state)=>{

            const user = JSON.parse(localStorage.getItem("user"));
        
            if(!user) return;
            state.user = user?.user;
            state.token = user?.token;
        }

    }   
})

export const {setUser,setUserFromLocalStorage, logout} = authSlice.actions;

export default authSlice.reducer;